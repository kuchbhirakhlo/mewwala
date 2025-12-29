import type { Metadata } from "next"
import { MenuContent } from "./menu-content";
import { collection, getDocs } from "@/lib/firebase";
import { db } from "@/lib/firebase";

interface MenuData {
  name: string;
  description?: string;
  restaurantName?: string;
}

export async function generateStaticParams() {
  try {
    const querySnapshot = await getDocs(collection(db, "menus"));
    const params: { restaurant: string }[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as MenuData;
      const names = [data.name, data.restaurantName].filter(Boolean);

      names.forEach((name) => {
        const slug = name!.replace(/\s+/g, '-').toLowerCase();
        params.push({ restaurant: slug });
      });
    });

    // Remove duplicates
    const uniqueParams = params.filter((param, index, self) =>
      index === self.findIndex(p => p.restaurant === param.restaurant)
    );

    return uniqueParams;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// This is a Server Component that safely extracts params and passes them as props
export async function generateMetadata({ params }: { params: { restaurant: string } }): Promise<Metadata> {
  const resolvedParams = await params;
  const restaurant = resolvedParams.restaurant;

  try {
    // Convert restaurant parameter back to search format
    const searchTerm = restaurant.replace(/-/g, ' ').toLowerCase();

    // Get all menus and find the matching one
    const querySnapshot = await getDocs(collection(db, "menus"));

    let matchingMenu: MenuData | null = null;
    querySnapshot.forEach((doc) => {
      const data = doc.data() as MenuData;
      const menuName = (data.name || '').toLowerCase();
      const restaurantName = (data.restaurantName || data.name || '').toLowerCase();

      // Check if either name matches our search term
      if (menuName === searchTerm || restaurantName === searchTerm) {
        matchingMenu = data;
      }
    });

    if (matchingMenu) {
      const menu = matchingMenu as MenuData;
      const title = `${menu.name} - Digital Menu | QR Menu`;
      const description = menu.description || `View ${menu.name}'s digital menu. Order directly via WhatsApp with QR code.`;

      return {
        title,
        description,
        keywords: [
          "digital menu",
          "restaurant menu",
          "qr menu",
          "online ordering",
          "whatsapp ordering",
          menu.name,
          "food menu",
          "restaurant digital transformation"
        ],
        openGraph: {
          title,
          description,
          type: 'website',
          images: [
            {
              url: '/logo.png',
              width: 1200,
              height: 630,
              alt: `${menu.name} Digital Menu`,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: ['/logo.png'],
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  // Fallback metadata
  return {
    title: "Digital Menu | QR Menu",
    description: "View restaurant digital menu and order via QR code.",
  };
}

export default async function MenuPage({ params }: { params: { restaurant: string } }) {
  const resolvedParams = await params;
  return <MenuContent restaurant={resolvedParams.restaurant} />;
}

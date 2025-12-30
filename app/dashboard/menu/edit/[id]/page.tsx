// Server Component
import { EditMenuContent } from "./edit-menu-content";
import { db, collection, getDocs } from "@/lib/firebase";

// This is a Server Component that safely extracts params and passes them as props
export async function generateStaticParams() {
  try {
    // Fetch all menu documents to generate static params
    const menusRef = collection(db, "menus");
    const menusSnapshot = await getDocs(menusRef);

    const params = menusSnapshot.docs.map(doc => ({ id: doc.id }));

    // Include a placeholder in case no menus exist
    if (params.length === 0) {
      params.push({ id: 'placeholder' });
    }

    return params;
  } catch (error) {
    console.error("Error fetching menus for static params:", error);
    // Fallback to placeholder
    return [{ id: 'placeholder' }];
  }
}

export default async function EditMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditMenuContent id={id} />;
}

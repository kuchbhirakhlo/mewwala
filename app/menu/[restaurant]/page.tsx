// Server Component 
import { MenuContent } from "./menu-content";

// This is a Server Component that safely extracts params and passes them as props
export default async function MenuPage({ params }: { params: { restaurant: string } }) {
  const resolvedParams = await params;
  return <MenuContent restaurant={resolvedParams.restaurant} />;
}

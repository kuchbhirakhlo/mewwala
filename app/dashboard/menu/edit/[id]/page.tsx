// Server Component
import { EditMenuContent } from "./edit-menu-content";
import { db, collection, getDocs } from "@/lib/firebase";

export const dynamic = 'force-dynamic';

export default async function EditMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditMenuContent id={id} />;
}

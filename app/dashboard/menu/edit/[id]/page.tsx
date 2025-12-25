// Server Component
import { EditMenuContent } from "./edit-menu-content";

// This is a Server Component that safely extracts params and passes them as props
export function generateStaticParams() {
  // For static export, we need to provide at least one param, but since menus are dynamic,
  // we'll provide a placeholder that won't be used in production.
  return [{ id: 'placeholder' }];
}

export default function EditMenuPage({ params }: { params: { id: string } }) {
  return <EditMenuContent id={params.id} />;
}

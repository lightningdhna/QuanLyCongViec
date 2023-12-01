import { NavbarComponent } from "./_component/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-100">
      <NavbarComponent></NavbarComponent>
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
    </div>
  );
}

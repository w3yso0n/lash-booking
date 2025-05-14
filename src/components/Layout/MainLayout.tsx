export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-800">
      {children}
    </div>
  );
}

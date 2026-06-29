import NavbarNextGen from '@/components/nextgenlab/NavbarNextGen';
import FooterNextGen from '@/components/nextgenlab/FooterNextGen';

export default function NextGenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarNextGen />
      <main className="pt-20">
        {children}
      </main>
      <FooterNextGen />
    </>
  );
}

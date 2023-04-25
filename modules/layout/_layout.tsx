import Nav from '@components/Nav/Nav';
import Footer from '@components/Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

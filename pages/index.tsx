import Layout from '@/modules/layout/_layout';
import Home from '@/modules/home/Home';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const hideLayout = router.pathname === '/snippets';
  return (
    <>
      {!hideLayout && (
        <Layout>
          <Home />
        </Layout>
      )}
      {hideLayout && <Home />}
    </>
  );
}

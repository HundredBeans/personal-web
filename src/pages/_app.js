import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AppLayout } from '../components/layout/Layout';
import { PageLoader } from '../components/PageLoader';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, router);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppLayout>
        {pageLoading ? <PageLoader height="100vh" /> : <Component {...pageProps} />}
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;

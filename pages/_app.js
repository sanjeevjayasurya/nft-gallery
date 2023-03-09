import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/layout";
import PageTransition from "../components/PageTransition";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const handleStart = (url) => url !== router.asPath && setLoading(true);
      const handleComplete = (url) =>
        url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 2000);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });

    return (
      loading && (
        <div class="flex justify-center items-center h-screen">
          <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
        </div>
      )
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageTransition>
          <Loading />
          <Component {...pageProps} />
        </PageTransition>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

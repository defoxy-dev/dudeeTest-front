import Head from "next/head";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Card from "../components/card";

export default function MyApp({ Component, pageProps, router }) {
  const navigateRouter = useRouter();
  const onNavigate = (href) => {
    navigateRouter.replace(href);
  };
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

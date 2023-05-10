import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Layout from "@/layouts/main";
import { Provider } from "react-redux";
import type { AppProps } from 'next/app'
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "@/components/meta";
import UserContext from "@/components/userContext";
import { useRef } from "react";
import typography from "@/theme/typography";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta title="Home" />
      <style jsx global>
        {`
      :root {
          --font-poppins: ${typography.fontFamily};
        }
    `}
      </style>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
              {pid === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;

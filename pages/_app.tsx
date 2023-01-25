import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import "./global.module.css";

import CartProvider from "@store/Cart";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
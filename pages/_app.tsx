import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { SessionProvider} from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

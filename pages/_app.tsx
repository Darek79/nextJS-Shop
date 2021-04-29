import {AppProps} from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/globalss.scss";
function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

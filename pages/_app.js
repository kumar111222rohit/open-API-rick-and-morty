import '../styles/globals.scss';
import '../components/Loader/Loader.module.scss';
import '../components/Footer/Footer.module.scss';
import '../components/Character/Character.module.scss';

import '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

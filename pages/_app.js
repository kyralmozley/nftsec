import 'tailwindcss/tailwind.css'
import { AnimateSharedLayout } from "framer-motion"
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
    </ParallaxProvider>
  )
}

export default MyApp

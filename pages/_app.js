import '../styles/globals.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

import Layout from '../components/layout/layout'
import Navigation from '../customTypeComponents/navigation/navigation'
import { createClient } from '../prismicio'
import NextApp, { AppProps } from 'next/app';
import { useState } from 'react'



 
const App = ({ Component, pageProps, navigationContainer, footerContainer, contactElementsContainer }) => {

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Layout
        navigationContainer={navigationContainer}
        footerContainer={footerContainer}
        contactElementsContainer={contactElementsContainer}
        >

        <Component {...pageProps} />

      </Layout>
      </PrismicPreview>
    </PrismicProvider>
  
  )
}

App.getInitialProps = async (appContext) => {

  const client = createClient({ appContext })
  const appProps = await NextApp.getInitialProps(appContext);
  const navigationContainer = await client.getSingle('navigation');
  const contactElementsContainer = await client.getSingle('contact_elements');
  const footerContainer = await client.getSingle('footer');
  return { ...appProps, navigationContainer, contactElementsContainer, footerContainer };
};

export default App

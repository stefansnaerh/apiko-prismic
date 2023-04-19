
import Header from "../../customTypeComponents/header/header"
import Footer from "../../customTypeComponents/footer/footer"
import ContactElements from "../../customTypeComponents/contactElements/contactElements"
import { useState } from "react"
import { createClient } from "../../prismicio"
import { useRef } from "react"

import Head from "next/head"

import styles from './layout.module.scss'

// Layout component for elements that are on every page, e.g Header, Footer and Contact Elements
const Layout = ({navigationContainer, contactElementsContainer, footerContainer, children}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    // useRef to handle scroll to contactElements when the link them is clicked in header
    const contactRef = useRef(null)
    const handleScrollContact = () => {
      contactRef.current?.scrollIntoView({behavior:'smooth'})
    }
    return (
        <>
            <Head>
          
              <title>{navigationContainer.data.website_title}</title>
              <meta name="description" content={"here i would link a description from header"}/>
              <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Prismic"/>
              <meta name="author" content="Stefán Snær"/>
              <meta property="og:title" content={navigationContainer.data.website_title} key="title" />
            </Head>
            <Header
            navigationContainer={navigationContainer}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            handleScrollContact={handleScrollContact}
            />
            <div className={styles.container}>
                {children}
            </div>
            <div ref={contactRef}>
              <ContactElements
              contactElementsContainer={contactElementsContainer}
              />
            </div>
            <Footer
            footerContainer={footerContainer}/>
        </>
    )
}

export default Layout


export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const navigationContainer = await client.getSingle('navigation')
    const contactElementsContainer = await client.getSingle('contact_elements')
    const footerContainer = await client.getSingle('footer')
  
    return {
      props: {
        navigationContainer,
        contactElementsContainer,
        footerContainer
      }
    }
  } 
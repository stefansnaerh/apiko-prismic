
import Header from "../../customTypeComponents/header/header"
import Footer from "../../customTypeComponents/footer/footer"
import ContactElements from "../../customTypeComponents/contactElements/contactElements"
import { useState } from "react"
import { createClient } from "../../prismicio"

import styles from './layout.module.scss'

const Layout = ({navigationContainer, contactElementsContainer, footerContainer, children}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    return (
        <>
            <Header
            navigationContainer={navigationContainer}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            />
            <div className={styles.container}>
                {children}
            </div>
            <ContactElements
            contactElementsContainer={contactElementsContainer}
            />
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
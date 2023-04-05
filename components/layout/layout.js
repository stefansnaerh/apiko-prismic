
import Navigation from "../../customTypeComponents/navigation/navigation"
import Footer from "../../customTypeComponents/footer/footer"
import ContactElements from "../../customTypeComponents/contactElements/contactElements"
import { useState } from "react"

const Layout = ({navigationContainer, contactElementsContainer, footerContainer}, {children}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    console.log(navigationContainer)
    return (
        <>
            <Navigation
            navigationContainer={navigationContainer}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            />
            {children}
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

    console.log(navigationContainer)

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
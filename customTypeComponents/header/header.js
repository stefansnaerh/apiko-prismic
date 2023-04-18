

import styles from './header.module.scss'
import { PrismicNextImage } from '@prismicio/next'
import { RichText, Link } from "prismic-reactjs"
import HamburgerButton from '../../components/hamburger/hamburger'
import NavMobile from '../../components/navMobile/navMobile'
import NavDesktop from '../../components/navDesktop/navDesktop'

const Header = ( {navigationContainer, isHamburgerOpen, setIsHamburgerOpen, handleScrollContact} ) => {
    return (
        <header className={styles.header}>
            <a href={"/"}>
                <PrismicNextImage 
                field={navigationContainer.data.logo} 
                alt={""}
                
                /> 
           
            <div className={styles.logoTextContainer}>
                <RichText render={navigationContainer.data.logo_text} />
                <RichText render={navigationContainer.data.logo_subtext} />
            </div>
            </a>
            <HamburgerButton
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            />
            <NavMobile
            navigationContainer={navigationContainer}
            isHamburgerOpen={isHamburgerOpen}
            />
            <NavDesktop
            handleScrollContact={handleScrollContact}
            navigationContainer={navigationContainer}/>
        </header>
    )
}

export default Header
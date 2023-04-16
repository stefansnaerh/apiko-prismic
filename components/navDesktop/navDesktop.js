

import styles from './navDesktop.module.scss'
import { Link } from 'prismic-reactjs'


const NavDesktop = ( {navigationContainer} ) => {
    return (
        <nav className={styles.nav}>
            <ul>
                    <a href={'/'} >
                        <li>{navigationContainer.data.home_link_text }</li>
                    </a>
                     {/* here im directing the link to the uid instead of using the Link from prismic*/}
                    <a href={`/${navigationContainer.data.about_link.uid}`}>
                        <li>{navigationContainer.data.about_link_text }</li>
                    </a>
                    <a href={'/dentists'}>
                        <li>{navigationContainer.data.specialists_link_text }</li>
                    </a>
                    {/*<a href={Link.url(navigationContainer.data.service_link)}>
                        <li>{navigationContainer.data.service_text }</li>
                    </a>  */  }            
                    <a href={Link.url(navigationContainer.data.contact_link)}>
                        <li>{navigationContainer.data.contact_link_text }</li>
                    </a>
                </ul>
        </nav>
    )
}


export default NavDesktop
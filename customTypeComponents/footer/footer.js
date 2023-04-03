
import styles from './footer.module.css'

import { RichText } from 'prismic-reactjs'


const Footer = ( {footerContainer} ) => {

    return (
        <footer className={styles.container}>
            <div>
                <RichText render={footerContainer.data.company_name}/>
                <RichText render={footerContainer.data.licence_number}/>
            </div>
            <RichText render={footerContainer.data.company_address}/>
            <div>
                <RichText render={footerContainer.data.company_phone}/>
                <RichText render={footerContainer.data.company_mail}/>
            </div>
        </footer>
    )
}

export default Footer
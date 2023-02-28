
import styles from './compInfo.module.css'

import { RichText, Link } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'



const CompanyInfo = (compInfo) => {

    return (
        <section className={styles.container}>
        <div className={styles.textLinkContainer}>
        <RichText render={compInfo.compInfo.data.title} />
        <span className={styles.yellowLine}></span>
        <RichText render={compInfo.compInfo.data.paragraph}/>
        <a  href={Link.url(compInfo.compInfo.data.read_more_link)}>
            <span className={styles.button}>{compInfo.compInfo.data.read_more_text}</span>
        </a>
        </div>
        <PrismicNextImage
        field={compInfo.compInfo.data.image}
        height= "250"
        width= "375"
        />
        </section>
    )
}


export default CompanyInfo
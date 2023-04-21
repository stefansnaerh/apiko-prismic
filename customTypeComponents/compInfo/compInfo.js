
import styles from './compInfo.module.scss'

import { RichText } from 'prismic-reactjs'
import Imgix from 'react-imgix'



const CompanyInfo = (compInfo) => {
    return (
        <section className={styles.container}>
        <div className={styles.textLinkContainer}>
            {compInfo.compInfo.data.title ?
            <RichText render={compInfo.compInfo.data.title} /> : null}
        <span className={styles.yellowLine}></span>
            {compInfo.compInfo.data.paragraph ? 
            <RichText render={compInfo.compInfo.data.paragraph}/> : null}
        {compInfo.compInfo.data.read_more_text ? 
            <a  href={`/${compInfo.compInfo.uid}`}>
            <span className={styles.button}>{compInfo.compInfo.data.read_more_text}</span>
        </a> : null}
        </div>
        {compInfo.compInfo.data.image.url ?
        <Imgix
        src={`${compInfo.compInfo.data.image.url}`}
        alt={compInfo.compInfo.data.image.alt}
        srcset=""
        sizes='(min-width: 525px ) 525px, 100vw'
        imgixParams={{ 
            auto:'format',
            q:100,
            usm:10,
            cs:'srgb'
        }}
        /> : null}
        </section>
    )
}


export default CompanyInfo
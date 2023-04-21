
import styles from './compInfo.module.scss'

import { RichText } from 'prismic-reactjs'
import Imgix from 'react-imgix'



const CompanyInfo = (compInfo) => {
    console.log(compInfo)
    return (
        <section className={styles.container}>
        <div className={styles.textLinkContainer}>
        <RichText render={compInfo.compInfo.data.title} />
        <span className={styles.yellowLine}></span>
        <RichText render={compInfo.compInfo.data.paragraph}/>
        <a  href={`/${compInfo.compInfo.data.read_more_link.uid}`}>
            <span className={styles.button}>{compInfo.compInfo.data.read_more_text}</span>
        </a>
        </div>
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
        />
        </section>
    )
}


export default CompanyInfo
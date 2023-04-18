
import { createClient, linkResolver } from "../prismicio"
import * as prismicH from "@prismicio/helpers";

import { RichText } from 'prismic-reactjs'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import Imgix from "react-imgix";
import styles from '../styles/uid/uid.module.scss'


const Page = ({pageContainer}) => {
  console.log(pageContainer)
    return (
      <div className={styles.pageContainer}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
        <Imgix
        src={`${pageContainer.data.image.url}`}
        srcset=""
        sizes='(min-width: 525px ) 500px, 100vw'
        imgixParams={{ 
            auto:'format',
            q:100,
            usm:10,
            cs:'srgb'
        }}/>
        </div>
        <div className={styles.textLinkContainer}>
          <RichText render={pageContainer.data.title} />
          <RichText render={pageContainer.data.paragraph}/>
          {/* Ask about this way to link between pages 
          {pageContainer.data.read_more_link.uid ? <a  href={`/${pageContainer.data.read_more_link.slug}`}>
             { <span className={styles.button}>{pageContainer.data.read_more_link.uid.charAt(0).toUpperCase() + pageContainer.data.read_more_link.uid.slice(1)}</span>}
      </a>: null}*/}
        </div>
      </section>
      <SliceZone slices={pageContainer.data.slices} components={components}   />
      </div>
    )
}





 
export async function getStaticProps({ params ,previewData }) {
    const client = createClient({ previewData })

    const pageContainer = await client.getByUID('company_info', params.uid)
    console.log(pageContainer)
  
    return {
      props: {
        pageContainer
      }
    }
  } 

  export async function getStaticPaths() {
    const client = createClient();
  
    const pages = await client.getAllByType('company_info');
    console.log(pages)
  
    return {
      paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
      fallback: false,
    };
  }


  export default Page
  
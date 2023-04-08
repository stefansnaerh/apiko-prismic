
import { createClient, linkResolver } from "../prismicio"
import * as prismicH from "@prismicio/helpers";


const Page = ({pageContainer}) => {
  console.log(pageContainer)
    return (
        <>
        hehehe
        </>
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
  
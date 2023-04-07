
import { createClient } from '../prismicio'
import { useState } from 'react'

import Hero from '../customTypeComponents/Hero/hero'
import CompanyInfo from '../customTypeComponents/compInfo/compInfo'

import styles from '../styles/Home.module.css'





const Page = ({ heroContainer, compInfoContainer} ) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <>
        <>
          <Hero
          heroContainer={heroContainer}
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <div className={styles.compInfoContainer}>
            {compInfoContainer.map(compInfo => {
              return (
                <div key={compInfo.id}>
                <CompanyInfo
                compInfo={compInfo}/>
                </div>
              )
            })}
          </div>
        </>
    </>
  )
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const heroContainer = await client.getSingle('homepage')
  const compInfoContainer = await client.getAllByType('company_info')

  return {
    props: {
      heroContainer,
      compInfoContainer,
    }
  }
} 
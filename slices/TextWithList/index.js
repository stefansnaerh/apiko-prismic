import React from 'react'
import { RichText } from 'prismic-reactjs'

import styles from './textWithList.module.scss'

const Text = ({ slice }) => (
  <section className={styles.container}>
    {slice.primary.paragraph ?
      <RichText render={slice.primary.paragraph}/>
      : null
    }
    { slice?.items?.map((item, i) => {
    return (
      <ul key={i} >
        <li>{ item.list }</li>
      </ul>
      )}
      ) }
  </section>
)

export default Text
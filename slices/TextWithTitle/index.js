import React from 'react'
import { RichText } from 'prismic-reactjs'

import styles from './textWithTitle.module.scss'

const TextWithTitle = ({ slice }) => (
  <section className={styles.container}>
      {slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    {slice.primary.paragraph ?
      <RichText render={slice.primary.paragraph}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
  </section>
)

export default TextWithTitle
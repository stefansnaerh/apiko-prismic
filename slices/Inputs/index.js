import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'
import styles from './inputs.module.scss'

const Inputs = ({ slice }) => {
  return (
  <section className={styles.container}>
    <form>
      {slice?.items?.map((item , i ) => {
        return (
          <React.Fragment key={i}>
          <label key={i} htmlFor={`${item.input_small}`} >
            <input name={`${item.input_small}`} placeholder={`${item.input_small}`}></input>
          </label>
          </React.Fragment>
        )
      })}
        <label className={styles.label} htmlFor='input-big'></label>
        <RichText render={slice.primary.input_big_headline} />
        {slice.primary.input_big ? 
          <textarea 
          className={styles.textarea}
          name='input-big'
          placeholder={`${slice.primary.input_big_placeholder}`}>
          </textarea> : null}
          <a  href={Link.url(slice.primary.input_button_link)}>
            <button className={styles.button}>{ slice.primary.input_button_text }</button>
          </a>

    </form>
  </section>
  )
       }

export default Inputs
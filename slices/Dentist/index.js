import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'

const Dentist = ({ slice }) => (
  
  <section>
    {console.log(slice)}
    <PrismicNextImage
    field={slice.primary.profile_image.url}
    width={120}
    height={120}
    alt={slice.primary.profile_image.alt}
    />
      <RichText render={slice.primary.name} />
      <RichText render={slice.primary.education} />
  </section>
)

export default Dentist
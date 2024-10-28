import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion:'v2023-10-07'
}

export const writeClient = createClient({
  ...options,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
 // useCdn: false,
 useCdn:false,
})

export const readClient = createClient({
  ...options,
  useCdn: false,
 //useCdn: true,
})

export function urlFor (source) {
  return imageUrlBuilder(readClient).image(source)
}

export const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}
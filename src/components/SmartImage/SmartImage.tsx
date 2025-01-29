import React, { useState } from 'react'

type Props = {
  src: string
  alt: string
  placeholder: string
  customStyle?: React.CSSProperties | undefined
}

const SmartImage = (props: Props) => {
  const { alt, src, placeholder, customStyle } = props
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return null
  }

  return (
    <span>
      {!loaded && placeholder}
      <img
        src={src}
        alt={alt}
        onLoad={() => {
          setLoaded(true)
        }}
        onError={() => {
          setError(true)
        }}
        style={{ ...customStyle, visibility: loaded ? 'visible' : 'hidden' }}
      />
    </span>
  )
}

export default SmartImage

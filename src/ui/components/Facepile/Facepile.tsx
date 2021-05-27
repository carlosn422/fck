import * as React from 'react'

import { facepileStyles } from './styles'

interface Props {
  images: string[]
}

const Facepile: React.SFC<Props> = ({ images }) => {
  return (
    <article className={facepileStyles.container}>
      {images.map((i, index) => (
        <div
          key={index}
          className={facepileStyles.avatar}
          style={{ backgroundImage: `url(${i})` }}
        />
      ))}
    </article>
  )
}

export default Facepile

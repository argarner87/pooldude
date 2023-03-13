import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const GridItem = ({ imgSrc, caption, linkTo }) => {
  return (
    <div className='grid-item'>
        <Link style={{textDecoration: 'none'}} href={linkTo}>
            <h2 className='grid-item-caption'>{caption}</h2>
            <Image
                className='grid-item-img'
                src={imgSrc} 
                width={200}
                height={200}
                alt={caption}
        />
        </Link>
    </div>
  )
}

export default GridItem
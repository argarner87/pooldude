import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GridItem from './gridItem'

const ItemGrid = () => {
  return (
    <section className='item-grid'>
        <GridItem 
            imgSrc='/Pool_pic_1.jpg' 
            caption="Pool Cleaning & Maintenance" 
            linkTo='/regular-maintenance' 
        />
        <GridItem 
            imgSrc='/Pool_pic_2.jpg' 
            caption="Green Pool Recovery" 
            linkTo='/green-pool-recovery' 
        />
        <GridItem 
            imgSrc='/Pool_pic_3.jpg' 
            caption="Commercial Pool Solutions" 
            linkTo='/commercial-solutions' 
        />
        <GridItem 
            imgSrc='/Pool_pic_4.jpg' 
            caption="Equipment & Spare Parts" 
            linkTo='/equipment' 
        />
        <GridItem 
            imgSrc='/Pool_pic_5.jpg' 
            caption="Pool and Spa Chemicals" 
            linkTo='/chemicals' 
        />
        <GridItem 
            imgSrc='/Pool_pic_1.jpg' 
            caption="Pool Dude Blog (Coming Soon!)" 
            linkTo='/pool-dude-blog' 
        />
    </section>
  )
}

export default ItemGrid
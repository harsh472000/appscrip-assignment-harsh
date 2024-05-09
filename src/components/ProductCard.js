import React from 'react'
import Heart from '../assets/Heart.svg'
import Image from 'next/image'
import '../styles/productCard.css'
import { convertToUpperCase } from '@/utils/convertUppercase'
import Link from 'next/link'

const ProductCard = ({img,title}) => {
  return (
    <div className='card-container'>
      <div className='card-container__image'>
        <Image src={img} height={400} width={290} alt="product-image" />
      </div>
      <div className='card-container__information'>
        <div className='information__title-subtitle'>
            <div className='information__title font-bold-title'>{title.length <= 20 ? convertToUpperCase(title) : convertToUpperCase(title.slice(0, 20)) + "..."}</div>
            <div className='information__subtitle'><Link href="#">Sign In</Link> or Create an account to see pricing</div>
        </div>
        <div className='information__wishlist-icon'><Image src={Heart} alt="wishlist icon"/></div>
      </div>
    </div>
  )
}

export default ProductCard

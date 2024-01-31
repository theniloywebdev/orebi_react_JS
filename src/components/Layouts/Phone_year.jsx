import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Ads_two from '../../assets/ads_two.jpg'

const Phone_year = () => {
  return (
   <section className='pb-32'>
    <Container>
      <a href='https://www.daraz.com.bd/' target='_blank'>
      <Image src={Ads_two} alt={Ads_two} className="w-full"/>
      </a>
    </Container>
   </section>
  )
}

export default Phone_year
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Offer_one from '../../assets/offer_one.png'
import Offer_two from '../../assets/offer_two.png'
import Offer_three from '../../assets/offer_three.png'


const Offer = () => {
  return (
   <section className='py-32'>
    <Container>
        <Flex className="justify-between">      
            <div className="w-[49%] pb-10">
              <a href='https://www.daraz.com.bd/' target='_blank'>
              <Image src={Offer_one}/>
              </a>
            </div>
            <div className="w-[49%]">
             <a href='https://www.daraz.com.bd/' target='_blank'>
             <Image src={Offer_two} alt={Offer_two} className="pb-10"/>
             </a>
              <a href='https://www.daraz.com.bd/' target='_blank'>
              <Image src={Offer_three} alt={Offer_three}/>
              </a>
            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default Offer
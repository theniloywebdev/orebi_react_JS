import React from 'react'
import Image from '../Image'
import offerBanner from '../../assets/banner_bg.png'
import Container from '../Container'
import Flex from '../Flex'
import Two from '../icons/Two'
import Track from '../icons/Track'
import Undo from '../icons/Undo'
import Content from '../Content'


const Banner = () => {
  return (
   <section>
     <div className="offer_bg shadow-shadowOffBg">
     <a href='https://www.daraz.com.bd/' target='_blank'>
        <Image src={offerBanner} alt={offerBanner} className="w-full"/>
        </a>
   </div>

     <div className="information_bg py-8 border-b border-infobColor">
     <Container>
            <Flex className="justify-between">
                <div className="w-1/6">
                  <Flex>
                  <Two/>
                   <Content className="pl-3" text="Two years warranty"/>
                  </Flex>
                </div>
                <div className="w-1/6">
                   <Flex>
                    <Track/>
                    <Content className="pl-3" text="Free shipping"/>
                   </Flex>
                </div>
                <div className="w-1/6">
                <Flex>
                    <Undo/>
                    <Content className="pl-3" text="Return policy in 30 days"/>
                   </Flex>
                </div>
            </Flex>
        </Container>
     </div>
   </section>
  )
}

export default Banner
import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Image from './Image'
import Product_one from '../../src/assets/product_one.jpg'
import About_pro_two from '../../src/assets/about_pro_two.jpg'
import Flex from './Flex'
import Button from './Button'
import Content from './Content'

const AboutPage = () => {
  return (
    <section>
        <Container>
            <div className="pt-124">
                <Heading text='About' className='text-49'/>

                <div className="pt-32 pb-28">
                    <Flex className='justify-between'>
                    <div className="w-[49%] relative">
                      <Image src={Product_one} alt={Product_one} className='w-full'/>
                      <Button text="Our Brands" className='absolute left-72 bottom-16 text-base'/>
                    </div>
                    <div className="w-[49%] relative">
                    <Image src={About_pro_two} alt={About_pro_two} className='w-full'/>
                    <Button text="Our Stores" className='absolute left-72 bottom-16 text-base'/>
                   </div>
                    </Flex>
                </div>
            </div>
            
            <div className="pb-28">
              <Content text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.' className="text-primaryColor text-[36px] leading-52 tracking-wider mr-14"/>
            </div>
                         
              <div className="mb-28">
              <Flex className="justify-between">
                  <div className="">
                  <Heading text='Our Vision' className='text-[25px] leading-9 pb-3	'/>
                  <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className="max-w-[505px] mr-[40px]	"/>
                  </div>
                  
                  <div className="">
                  <Heading text='Our Story' className='text-[25px] leading-9 pb-3	'/>
                  <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." className="max-w-[505px] mr-[40px]"/>
                  </div>

                  <div className="">
                  <Heading text='Our Brands' className='text-[25px] leading-9 pb-3	'/>
                  <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." className="max-w-[505px]"/>
                  </div>
                  
              </Flex>  
              </div>
            
        </Container>
    </section>
  )
}

export default AboutPage
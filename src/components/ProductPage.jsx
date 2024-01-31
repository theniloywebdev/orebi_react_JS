import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Image from './Image'
import About_pro_two from '../../src/assets/about_pro_two.jpg'
import Product_twelve from '../../src/assets/product_twelve.jpg'
import Product_eleven from '../../src/assets/product_eleven.jpg'
import Product_ten from '../../src/assets/product_ten.jpg'


const ProductPage = () => {
  return (
    <section>

        <Container>
        <div className="pt-124 pb-28">
            <Heading text='Product' className='text-49'/>

            <div className="pt-32 ">
                    <Flex className='justify-between'>
                    <div className="w-[49%]">
                    <Image src={About_pro_two} alt={About_pro_two} className='w-full'/>
                    </div>
                    <div className="w-[49%]">
                    <Image src={Product_twelve} alt={Product_twelve} className='w-full'/>
                   </div>

                    </Flex>
            </div>

            <div className="pt-8">
                    <Flex className='justify-between'>
                    <div className="w-[49%]">
                    <Image src={Product_eleven} alt={Product_eleven} className='w-full'/>
                    </div>
                    <div className="w-[49%]">
                    <Image src={Product_ten} alt={Product_ten} className='w-full'/>
                   </div>

                    </Flex>
            </div>

        </div>
        </Container>

    </section>
  )
}

export default ProductPage
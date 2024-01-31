import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import Product_five from '../../assets/product_five.jpg'
import Product_six from '../../assets/product_six.jpg'
import Product_seven from '../../assets/product_seven.jpg'
import Product_eight from '../../assets/product_eight.jpg'

const Bestsell = () => {
  return (
   <section className='pb-16'>
    <Container>
        <Heading text="Our Bestsellers"/>
        <div className="py-12">
            <Flex className="gap-10">
                <Product src={Product_five} alt={Product_five} badge="15%"/>
                <Product src={Product_six} alt={Product_six} badge="15%" />
                <Product src={Product_seven} alt={Product_seven} badge="15%"/>
                <Product src={Product_eight} alt={Product_eight} badge="15%"/>
            </Flex>
        </div>
    </Container>
   </section>
  )
}

export default Bestsell
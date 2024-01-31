import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Product from '../Product'
import Product_one from '../../assets/product_one.jpg'
import Product_two from '../../assets/product_two.jpg'
import Product_three from '../../assets/product_three.jpg'
import Product_four from '../../assets/product_four.jpg'


const Arrival = () => {
  return (
    <section className='pb-16'>
        <Container>
        <Heading text="New Arrivals"/>
                <div className="py-12">
                <Flex className="gap-10">
                    <Product src={Product_one} alt={Product_one} badge="New"/>
                    <Product src={Product_two} alt={Product_two} badge="New"/>
                    <Product src={Product_three} alt={Product_three} badge="New"/>
                    <Product src={Product_four} alt={Product_four} badge="New"/>
                    </Flex>
                </div>
           
        </Container>
    </section>
  )
}

export default Arrival
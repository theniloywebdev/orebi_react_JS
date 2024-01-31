import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import Product_nine from '../../assets/product_nine.jpg'
import Product_ten from '../../assets/product_ten.jpg'
import Product_eleven from '../../assets/product_eleven.jpg'
import Product_twelve from '../../assets/product_twelve.jpg'

const SpecialOffer = () => {
  return (
    <section className='pb-16'>
        <Container>
            <Heading text="Special Offers"/>
            <div className="py-12">
                <Flex className="gap-10">
                    <Product src={Product_nine} alt={Product_nine} badge="New"/>
                    <Product src={Product_ten} alt={Product_ten} badge="New"/>
                    <Product src={Product_eleven} alt={Product_eleven} badge="New"/>
                    <Product src={Product_twelve} alt={Product_twelve} badge="New"/>
                </Flex>
            </div>
        </Container>
    </section>
  )
}

export default SpecialOffer
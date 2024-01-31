import React from 'react'
import Container from './Container'
import Image from './Image'
import Badge from './Badge'
import Flex from './Flex'
import Content from './Content'
import { FaHeart } from "react-icons/fa";
import Undo from './icons/Undo'
import Cart from './icons/Shop'
import Product_info from './Product_info'



const Product = ({src,alt,badge}) => {
  return (
    <Container>
        <div className="relative  overflow-hidden hover:overflow-visible group block">
            <Image src={src} alt={alt} className="w-full"/>
            <Badge className="absolute top-5 left-5" text={badge}/>
            <Product_info />
            <div className="bg-white py-7 px-8 absolute left-0 -bottom-1/2 w-full group-hover:bottom-24 duration-500 transition-all ease-in-out">
                <div className="">
                    <Flex className="justify-end gap-4 items-center">
                        <Content text="Add to Wish List" className="text-secondaryColor"/><FaHeart/>
                    </Flex>
                </div>
                <div className="py-5">
                    <Flex className="justify-end gap-4 items-center">
                        <Content text="Compare" className="text-secondaryColor"/><Undo/>
                    </Flex>
                </div>
                <div className="">
                    <Flex className="justify-end gap-4 items-center">
                        <Content text="Add to Cart" className="text-primaryColor font-bold"/><Cart/>
                    </Flex>
                </div>
            </div>
          
        </div>
    </Container>
  )
}

export default Product
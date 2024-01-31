import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import Content from './Content'

const Product_info = () => {
  return (
    <div className="img_info py-4">
    <Flex className="justify-between items-center">
        <div className="">
            <Heading className="text-[20px]" text="Basic Crew Neck Tee"/>
        </div>
        <div className="">
            <Content className="text-secondaryColor" text="$44.00"/>
        </div>
    </Flex>
    <div className="pt-4">
        <Content className="text-secondaryColor" text="Black"/>
    </div>
</div>
  )
}

export default Product_info
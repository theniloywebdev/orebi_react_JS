import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bars from '../icons/Bars'
import Content from '../Content'
import Search from '../icons/Search'
import User from '../icons/User'
import Shop from '../icons/Shop'


const Category = () => {
  return (
    <section className='bg-categoryBgColor py-6 border-t border-borderbColor'>
       <Container>
        <Flex className="items-center">
            <div className="w-1/3">
                <Flex className="gap-2 items-center">
                <Bars/>
                <Content className="text-sm text-primaryColor" text="Shop by Category"/>
                </Flex>
            </div>
            <div className="w-1/3 relative">
                <input type="text" placeholder='Search Products' className='w-full p-4 rounded-md focus:outline-none'/>
                <Search className="absolute top-1/2 right-5 -translate-y-1/2"/>
            </div>
            <div className="w-1/3">
                <Flex className="justify-end gap-x-10 ">
                    <User/>
                    <Shop/>
                   
                </Flex>
            </div>
        </Flex>
       </Container>
    </section>
  )
}

export default Category
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='py-8'>
        <Container>
           <Flex>
            <div className="w-[5%]">
            
            <Link to='/'>
            <Image src={logo} alt={logo}/>
            </Link>
            
            </div>
            <div className="w-[95%] ">
                <ul>
                   <Flex className="justify-center gap-x-10">
                      <List text="Home" href="/" className='hover:font-bold hover:text-primaryColor'/>
                      <List text="Shop" href="/shop" className='hover:font-bold hover:text-primaryColor'/>
                      <List text="About" href="/about" className='hover:font-bold hover:text-primaryColor'/>
                      <List text="Contacts" href="/contact" className='hover:font-bold hover:text-primaryColor'/>
                      <List text="Journal" href="/" className='hover:font-bold hover:text-primaryColor'/>
                   </Flex>
               
                </ul>
            </div>
           </Flex>
        </Container>
    </nav>
  )
}

export default Navbar
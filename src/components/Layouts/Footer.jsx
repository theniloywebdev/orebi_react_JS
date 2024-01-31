import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Content from '../Content'
import List from '../List'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
  <section className='py-14 bg-categoryBgColor'>
    <Container className="max-w-container">
        <Flex>
            <div className="w-1/6 pb-16">
                 <Content className="font-bold text-primaryColor text-base cursor-pointer	 leading-6" text="MENU"/>
                 <ul>
               <div className="pt-4">
                 <List href="#" text="Home"/>
                 <List href="#" text="Shop"/>
                 <List href="#" text="About"/>
                 <List href="#" text="Contact"/>
                 <List href="#" text="Journal"/>
               </div>
                 </ul>
            </div>

            <div className="w-1/6">
                 <Content className="font-bold text-primaryColor text-base  cursor-pointer	 leading-6" text="SHOP"/>
                 <ul>
               <div className="pt-4">
                 <List href="#" text="Category 1"/>
                 <List href="#" text="Category 2"/>
                 <List href="#" text="Category 3"/>
                 <List href="#" text="Category 4"/>
                 <List href="#" text="Category 5"/>
               </div>
                 </ul>
            </div>

            <div className="w-1/6">
                 <Content className="font-bold text-primaryColor text-base  cursor-pointer	 leading-6" text="HELP"/>
                 <ul>
               <div className="pt-4">
                 <List href="#" text="Privacy Policy"/>
                 <List href="#" text="Terms & Conditions"/>
                 <List href="#" text="Special E-shop"/>
                 <List href="#" text="Shipping"/>
                 <List href="#" text="Secure Payments"/>
               </div>
                 </ul>
            </div>

          <div className="w-1/6">
            <div className="">
            <Content className="font-bold text-primaryColor leading-7 text-base	pb-3" text="(052) 611-5711
company@domain.com"/>
        
         <Content className="font-dmsan text-sm font-normal text-secondaryColor" text="575 Crescent Ave. Quakertown, PA 18951 "/>
        
            </div>
          </div>

          <div className="w-1/12 mx-auto">
                <a href="#">
                <Image src={Logo}/>
                </a>          
          </div>

        </Flex>
        <div className="footer_intro">
           <Flex className="justify-between">
           <div className="w-2/5">
            <Flex className="gap-5 ">
           <a href='#'><FaFacebookF/></a>
           <a href='#'><FaLinkedinIn/></a>
           <a href='#'><FaInstagram/></a>
            </Flex>
            </div>
            <div className="w-2/5 text-right">
                <Content text="2020 Orebi Minimal eCommerce Figma Template by Adveits"/>
            </div>
           </Flex>
        </div>
    </Container>
  </section>
  )
}

export default Footer
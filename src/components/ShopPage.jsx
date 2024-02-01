import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Content from './Content'
import Input from './Input'
import Product from './Product'
import Product_seven from '../../src/assets/product_seven.jpg'
import Product_eleven from '../../src/assets/product_eleven.jpg'
import Product_ten from '../../src/assets/product_ten.jpg'
import Product_nine from '../../src/assets/product_nine.jpg'
import Product_thirty from '../../src/assets/product_thirty.jpg'
import Product_eight from '../../src/assets/product_eight.jpg'
import Product_twelve from '../../src/assets/product_twelve.jpg'
import Product_one from '../../src/assets/product_one.jpg'
import Product_two from '../../src/assets/product_two.jpg'
import Product_four from '../../src/assets/product_four.jpg'
import Product_three from '../../src/assets/product_three.jpg'
import About_pro_two from '../../src/assets/about_pro_two.jpg'


import { FaPlus } from "react-icons/fa";
import { GoTriangleUp,GoTriangleDown } from "react-icons/go";
import { CgLayoutList } from "react-icons/cg";
import { RiLayoutGridFill } from "react-icons/ri";








const ShopPage = () => {
  return (
    <section>
        
          <Container>
              <div className="pt-124 pb-28">
                <Heading text="Shops" className='text-49'/>

                <div className="pt-152">  
                <Flex className="">
                <div className="w-3/12">
                       
             {/* SHOP BY CATEGORY END  */}
             <div className=" w-full">
             <Heading text="Shop by Category" className="text-[20px]"/>
       
           <div className="pt-8">
              <Flex className="items-center justify-between">
                <Content text="Category 1" className=""/>
                <FaPlus color="secondaryColor" fontSize=""/>
              </Flex>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
                <Content text="Category 2" className=""/> 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
              <Flex className="items-center justify-between">
                <Content text="Category 3" className=""/>
                <FaPlus color="secondaryColor" fontSize=""/>
              </Flex>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="Category 4" className=""/>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">                              
                <Content text="Category 5" className=""/>                             
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>
   </div>
   {/* SHOP BY CATEGORY END  */}

   {/* SHOP COLOR START  */}
   <div className="w-full pt-14">
       <Flex className="items-center justify-between">
       <Heading text="Shop by Color" className="text-[20px]"/>
       <GoTriangleUp />

       </Flex>
       
           <div className="pt-8">
               <Content text="Color 1" className=""/>                                 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
                <Content text="Color 2" className=""/> 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="Color 3" className=""/>                         
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="Color 4" className=""/>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">                              
                <Content text="Color 5" className=""/>                             
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>
   </div>
   {/* SHOP COLOR END  */}

    {/* BRAND START  */}
   <div className="w-full pt-14">
       <Flex className="items-center justify-between">
       <Heading text="Shop by Brand" className="text-[20px]"/>
       <GoTriangleUp />

       </Flex>
       
           <div className="pt-8">
               <Content text="Brand 1" className=""/>                                 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
                <Content text="Brand 2" className=""/> 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="Brand 3" className=""/>                         
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="Brand 4" className=""/>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">                              
                <Content text="Brand 5" className=""/>                             
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>
   </div>
   {/* BRAND END  */}

   {/* PRICE START  */}
   <div className="w-full pt-14">
       <Flex className="items-center justify-between">
       <Heading text="Shop by Price" className="text-[20px]"/>
       <GoTriangleUp />

       </Flex>
       
           <div className="pt-8">
               <Content text="$0.00 - $9.99" className=""/>                                 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
                <Content text="$10.00 - $19.99" className=""/> 
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="$20.00 - $29.99" className=""/>                         
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">
               <Content text="$30.00 - $39.99" className=""/>
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>

           <div className="pt-8">                              
                <Content text="$40.00 - $69.99" className=""/>                             
              <div className="border-b-2 border-infobColor pb-6 "></div>
           </div>
         </div>
        {/* PRICE END  */}
        </div>
                
                {/* FEATURE START  */}
                <div className="w-9/12	 pl-14 pt-4">
                        <Flex className="justify-between">
                            <div className="menu_size">
                                <Flex className="items-center">
                                    <div className="pr-2">
                                    < RiLayoutGridFill  color="secondaryColor" fontSize="" />
                                    </div>
                                    <div className="">
                                    <CgLayoutList  color="secondaryColor" fontSize="1.5em"/>
                                    </div>
                                    
                                </Flex>
                            </div>
                         <div className="feature">
                            <Flex className="gap-x-14">
                            <div className="">
                                <Flex className="items-center">
                                    <div className="">
                                       <Content text="Sort by:" className="pe-4"/>
                                    </div>
                                    <div className="relative">
                                        <Input inputType="text" inputPh="Featured" className="border-2 focus:border-primaryColor ps-4 py-2 "/>
                                        <GoTriangleDown className='absolute top-3 right-3' />
                                    </div>

                                    <div className=""></div>
                                </Flex>
                            </div>

                            <div className="">
                                <Flex className="items-center">
                                    <div className="">
                                       <Content text="Show:" className="pe-4"/>
                                    </div>
                                    <div className="relative">
                                        <Input inputType="text" inputPh="36" className="border-2  focus:border-primaryColor ps-4 py-2 "/>
                                        <GoTriangleDown className='absolute top-3 right-3' />
                                    </div>

                                    <div className=""></div>
                                </Flex>
                            </div>

                            </Flex>
                         </div>

                           
                        </Flex>

                        <div className="pt-14">
                            {/* 1ST LINE START  */}
                            <Flex className="gap-x-8">
                            <div className="w-2/6">
                                <Product src={Product_seven} alt={Product_seven} badge="New" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_eleven} alt={Product_eleven} badge="-10%" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_three} alt={Product_three} badge="New" />
                            </div>
                            </Flex>
                            {/* 1ST LINE  END  */}
                        </div>

                        <div className="pt-12">
                            {/* 2ND LINE START  */}
                            <Flex className="gap-x-8">
                            <div className="w-2/6">
                                <Product src={Product_nine} alt={Product_nine} badge="New" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_thirty} alt={Product_thirty} badge="-10%" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_eight} alt={Product_eight} badge="-10%" />
                            </div>
                            </Flex>
                            {/* 2ND LINE  END  */}
                        </div>

                        <div className="pt-12">
                            {/* 3RD LINE START  */}
                            <Flex className="gap-x-8">
                            <div className="w-2/6">
                                <Product src={Product_twelve} alt={Product_twelve} badge="-10%" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_ten} alt={Product_ten} badge="New"/>
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_four} alt={Product_four} badge="New"/>
                            </div>
                            </Flex>
                            {/* 3RD LINE  END  */}
                        </div>

                        <div className="pt-12">
                            {/* 4TH LINE START  */}
                            <Flex className="gap-x-8">
                            <div className="w-2/6">
                                <Product src={About_pro_two} alt={About_pro_two} badge="New" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_one} alt={Product_one} badge="-10%" />
                            </div>

                            <div className="w-2/6">
                                <Product src={Product_two} alt={Product_two} badge="-10%"/>
                            </div>
                            </Flex>
                            {/* 4TH LINE  END  */}
                        </div>
                </div>
                {/* FEATURE END  */}


                


            </Flex>                

                </div>
              </div>
          </Container>

    </section>
  )
}

export default ShopPage




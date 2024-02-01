import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Content from './Content'
import Label from './Label'
import Input from './Input'
import Flex from './Flex'
import Button from './Button'

import { GoTriangleDown } from "react-icons/go";


const SignUpPage = () => {
  return (
   <section>
      <Container>
           <div className="pt-124 pb-140">
              <Heading text="Sign up" className="text-49"/>

              <div className="pt-152 w-5/12">
                <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="mr-3 leading-7 text-secondaryColor"/>
              </div>
               <div className="border-b-2 border-infobColor pt-16"></div>
                
                {/* PERSONAL DETAILS START  */}
               <div className="">
                <Heading text="Your Personal Details" className="text-39 pt-16 pb-42"/>
                  
                  <div className="">
                    <Flex className="">
                        <div className="w-4/12">
                        <Label inputLabel="First Name" className=""/>
                        <Input inputType="text" inputPh="First Name" className="w-full py-5"/>
                        </div>

                        <div className="w-4/12 ps-16">
                        <Label inputLabel="Last Name" className=""/>
                        <Input inputType="text" inputPh="Last Name" className="w-full py-5"/>
                        </div>
                    </Flex>
                  </div>

                  <div className="pt-8">
                    <Flex className="">
                        <div className="w-4/12">
                        <Label inputLabel="Email address" className=""/>
                        <Input inputType="email" inputPh="company@domain.com" className="w-full py-5"/>
                        </div>

                        <div className="w-4/12 ps-16">
                        <Label inputLabel="Telephone" className=""/>
                        <Input inputType="text" inputPh="Your phone number" className="w-full py-5"/>
                        </div>
                    </Flex>
                    <div className="border-b-2 border-infobColor pt-20"></div>
                  </div>
               </div>
               {/* PERSONAL DETAILS END  */}

               {/* NEW CUSTOMER START  */}
               <div className="">
                <Heading text="New Customer" className="text-39 pt-16 pb-42"/>
                  
                  <div className="">
                    <Flex className="">
                        <div className="w-4/12">
                        <Label inputLabel="Address 1" className=""/>
                        <Input inputType="text" inputPh="4279 Zboncak Port Suite 6212" className="w-full py-5"/>
                        </div>

                        <div className="w-4/12 ps-16">
                        <Label inputLabel="Address 2" className=""/>
                        <Input inputType="text" inputPh="-" className="w-full py-5"/>
                        </div>
                    </Flex>
                  </div>

                  <div className="pt-8">
                    <Flex className="">
                        <div className="w-4/12">
                        <Label inputLabel="City" className=""/>
                        <Input inputType="text" inputPh="Your city" className="w-full py-5"/>
                        </div>

                        <div className="w-4/12 ps-16">
                        <Label inputLabel="Post Code" className=""/>
                        <Input inputType="text" inputPh="05228" className="w-full py-5"/>
                        </div>
                    </Flex>
                  </div>

                  <div className="pt-8">
                    <Flex className="">
                        <div className="w-4/12 relative">
                        <Label inputLabel="Country" className=""/>
                        <Input inputType="text" inputPh="Please select" className="w-full py-5"/>
                        <GoTriangleDown className='absolute top-14 right-2 primaryColor'/>
                        </div>

                        <div className="w-4/12 ps-16 relative">
                        <Label inputLabel="Region/State" className=""/>
                        <Input inputType="text" inputPh="Please select" className="w-full py-5"/>
                        <GoTriangleDown  className='absolute top-14 right-2'/>
                        </div>
                    </Flex>
                  </div>
                    <div className="border-b-2 border-infobColor pt-20"></div>
               </div>
               {/* NEW CUSTOMER END  */}
               {/* PASSWORD PART START  */}
                  
               <div className="">
                <Heading text="Your Password" className="text-39 pt-16 pb-42"/>
                  
                  <div className="">
                    <Flex className="">
                        <div className="w-4/12">
                        <Label inputLabel="Password" className=""/>
                        <Input inputType="password" inputPh="Password" className="w-full py-5"/>
                        </div>

                        <div className="w-4/12 ps-16">
                        <Label inputLabel="Repeat Password" className=""/>
                        <Input inputType="password" inputPh="Repeat Password" className="w-full py-5"/>
                        </div>
                    </Flex>
                  </div>
                  <div className="border-b-2 border-infobColor pt-20"></div>
               </div>
               {/* PASSWORD PART END  */}
            
             <div className="pt-20">
             <Button text="Log in" className="px-20 py-5 bg-primaryColor"/>
             </div>
           </div>
      </Container>
   </section>
  )
}

export default SignUpPage
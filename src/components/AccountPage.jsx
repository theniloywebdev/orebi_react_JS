import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Content from './Content'

const AccountPage = () => {
  return (
   <section>
      <Container>
           <div className="pt-124 pb-140">
                <Heading text="My Account" className='text-49'/>
              
                <div className="pt-152">                
                  
                    <Flex>
                        <div className="w-1/5">

                            <div className="">
                               <Heading text="Dashboard" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                             <div className="border-b-2 border-infobColor pb-5"></div>
                            </div>

                            <div className="">
                              <Heading text="Others" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                              <div className="border-b-2 border-infobColor pb-5"></div>
                            </div>

                             <div className="">
                              <Heading text="Donwloads" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                              <div className="border-b-2 border-infobColor pb-5"></div>
                            </div>

                            <div className="">
                              <Heading text="Addresses" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                              <div className="border-b-2 border-infobColor pb-5"></div>
                           </div>

                            <div className="">
                              <Heading text="Account details" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                              <div className="border-b-2 border-infobColor pb-5"></div>
                            </div>
                      
                             <div className="">
                              <Heading text="Logout" className="text-secondaryColor text-base font-normal leading-8 hover:text-primaryColor hover:font-bold duration-700 pt-5"/>
                              <div className="border-b-2 border-infobColor pb-5"></div>
                            </div>

                        </div>

                        <div className="ms-16 pt-4">
                          <p className='font-dmsans font-normal text-secondaryColor text-base'>Hello <span className='text-primaryColor text-lg'>admin</span> (not <span className='text-primaryColor text-lg'>admin</span>? <span className='text-primaryColor text-lg'>Log out</span>)</p>

                          <p className='font-dmsans font-normal text-secondaryColor text-base pr-[300px] pt-[40px]'>From your account dashboard you can view your <span className='text-primaryColor text-lg'>recent orders</span>, manage your <span className='text-primaryColor text-lg'>shipping and billing addresses</span>, and <span className='text-primaryColor text-lg'>edit your password and account details</span>.</p>
                           
                        </div> 
                    </Flex>
                                  
                </div> 

           </div>
      </Container>
   </section>
  )
}

export default AccountPage





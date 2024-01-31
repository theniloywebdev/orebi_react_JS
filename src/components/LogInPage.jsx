import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Content from './Content'
import Label from './Label'
import Input from './Input'
import Flex from './Flex'
import Button from './Button'


const LogInPage = () => {
  return (
    <section>
       <Container>
         <div className="pt-124 pb-140">
            <Heading text="Login" className='text-49'/>

            <div className="pt-152 w-5/12">
                <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="mr-3 leading-7 text-secondaryColor"/>
            </div>
            <div className="border-b-2 border-infobColor pt-16"></div>

              <div className="returning_customer">             
                    <Heading text="Returning Customer" className="text-39 pb-42 pt-14"/>

                   <Flex>
                   <div className="w-2/6">
                    <Label inputLabel="Email address" className="pb-3"/>
                    <Input inputType="email" inputPh="company@domain.com" className="w-full pb-4"/>
                    </div>

                    <div className="w-2/6 ml-16">
                    <Label inputLabel="Password" className="pb-3"/>
                    <Input inputType="password" inputPh="" className="w-full pb-4"/>
                    </div>
                   </Flex>

                   <div className="pt-7">
                    <Button text="Log in" className="bg-transparent	text-[#121111] border-2 border-btnBColor px-20"/>
                    <div className="border-b-2 border-infobColor pb-70"></div>
                   </div>
             </div>

             <div className="new_customer">
                <Heading text="New Customer" className="text-39 pb-42 pt-14"/>
                <div className="w-5/12">
                    <Content text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="mr-3 leading-7 text-secondaryColor pb-12"/>
                    <Button text="Continue" className="px-70"/>
                </div>
             </div>
                      
         </div>
       </Container>
    </section>
  )
}

export default LogInPage


{/* <Heading text="Returning Customer" className="text-39 pb-42 pt-14"/>
<Label inputLabel="Email address" className="pb-3"/>
<Input inputType="email" inputPh="company@domain.com" className="w-full pb-4"/> */}
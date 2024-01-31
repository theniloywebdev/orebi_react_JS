import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import Map from '../components/Map'

const ContactPage = () => {
  return (
    <section>

         <Container>
         <div className="pt-124 pb-140">
            <Heading text='Contact' className='text-49'/>


          <div className="w-1/2">

            <div className="pt-152 pb-42">
              <Heading text="Fill up a Form" className="text-39"/>
            </div>
           

            <div className="">
            <Label inputLabel="Name" className="leading-[23px] pb-3"/>
            <Input inputType="text" inputPh="Your name here" className="pb-4 w-full"/>

            <Label inputLabel="Email" className="leading-[23px] pb-3 pt-6"/>
            <Input inputType="email" inputPh="Your email here" className="pb-4 w-full"/>

            <Label inputLabel="Message" className="leading-[23px] pb-3 pt-6 "/>
            <Input inputType="text" inputPh="Your message here" className="pb-86 w-full"/>
           </div> 

              <div className="post_btn pt-8 pb-140">
                <Button text="Post" className="px-86"/>
             </div>
            
          </div> 
          <div className="">
            <Map/>
          </div>

        </div>

        
          

       
           

         </Container>

    </section>
  )
}

export default ContactPage
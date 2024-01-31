import React from 'react'
import Banner from './Layouts/Banner'
import Offer from './Layouts/Offer'
import Arrival from './Layouts/Arrival'
import Bestsell from './Layouts/Bestsell'
import Phone_year from './Layouts/Phone_year'
import SpecialOffer from './Layouts/SpecialOffer'

const HomePage = () => {
  return (
   <section>

         <Banner/>
         <Offer/>
         <Arrival/>
         <Bestsell/>
         <Phone_year/>
         <SpecialOffer/>

   </section>
  )
}

export default HomePage
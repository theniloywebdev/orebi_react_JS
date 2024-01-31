import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Content from './Content'
import Search from './icons/Search'
import Button from './Button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
          <Container>
        <div className="w-[40%] pb-40 pt-20">
           <div className="">
           <Heading className="text-[200px]" text="404"/>
           <Content className="leading-7 " text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
           </div>

           <div className="border-2 border-infobColor relative my-12">
                <input type='text' placeholder='Type to search' className='w-full p-5 rounded-md'/>
               <a href='#'>
               <Search className="absolute top-[50%] right-5 -translate-y-1/2"/>
               </a>
          </div>
          <Link to='/'>
          <Button text="Back to Home"/>
          </Link>
       </div>     
         </Container>
    </section>
  )
}

export default ErrorPage
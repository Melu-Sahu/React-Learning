import React from 'react'

import {
  Hero,
  PopularProduct,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from './Sections';

import Nav from './components/Nav';



const App = () =>  (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProduct/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>
      <section className='padding padding-x sm:py-32 py-15 w-full'>
        <Subscribe/>
      </section>
      <section className='padding bg-black padding-x paddint-t text-white'>
        <Footer/>
      </section>
    </main>
  )

export default App;

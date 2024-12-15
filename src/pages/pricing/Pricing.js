import React from 'react'
import CardPricing from './components/CardPricing'
import { Link } from 'react-router'

const Pricing = () => {
  return (
    <>
    <section className="py-20 bg-gray-100" id="pricing ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Mentorship Pricing
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <CardPricing
            title="Basic"
            price="$99/month"
            features={[
              '1-hour monthly mentorship session',
              'Email support',
            ]}
          />
          <CardPricing
            title="Premium"
            price="$299/month"
            features={[
              '2-hour monthly mentorship session',
              'Priority email support',
              'Quarterly progress review',
            ]}
          />
          <CardPricing
            title="Enterprise"
            price="$499/month"
            features={[
              'Customized mentorship program',
              'Dedicated support team',
              'Monthly progress review',
            ]}
          />
        </div>
      </div>
      <div className='text-center'>
     <h2 className="text- font-bold mb-4">Need Help? <Link to={"/contact-us"}> <span className='text-blue-500 cursor-pointer hover:underline'>Contact us</span></Link></h2>
   </div>
    </section>
    
   </>
  )
}

export default Pricing

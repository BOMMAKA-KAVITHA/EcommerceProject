import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About us - Ecommerce app'}>
        <div className='row about'>
          <div className='col-md-6'>
            <img
               src='\images\contactus.jpg'
               alt='contactus'
               style={{width:'100%'}}
              />
          </div>
          <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>ABOUT</h1>
            <p className='text-justify mt-2'>
            Find Make A eCommerce Website. Now with us! Search For Make A eCommerce Website at Discovertoday.co. Updated Info. Relevant Results. Get More Results. Fast Response. Get Latest Info. Awesome Info. More Info. Find it Here. Latest Today. Attractive Results.
              </p>
          </div>
        </div>

    </Layout>
  )
}

export default About
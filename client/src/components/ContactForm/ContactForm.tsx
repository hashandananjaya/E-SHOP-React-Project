import { TextField } from '@mui/material'
import React, { Component } from 'react'

export default class ContactForm extends Component {
  render() {
    return (
      <div>
          <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%"   title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
      <TextField
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            label='Email'
            type='email'
            variant='outlined'
            placeholder='Enter Your Email Address'
            fullWidth={true}
            required
            />
      </div>
      <div className="relative mb-4">
      <TextField
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            label='Name'
            type='text'
            variant='outlined'
            placeholder='Enter Your Name'
            fullWidth={true}
            required
            />
      </div>
      <div className="relative mb-4">
      <TextField
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            label='Message'
            type='text'
            variant='outlined'
            placeholder='Enter Your Message'
            fullWidth={true}
            multiline
            minRows={5}
            maxRows={Infinity}
            required 
            />

      </div>
      <button className="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
      </div>
    )
  }
}

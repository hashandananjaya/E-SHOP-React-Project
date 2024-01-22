import React, { Component, Fragment} from 'react'
import './contact.css'
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';


export default class Contact extends Component {
    render()  {
        return(
            <Fragment>
      <Header/>
      <div className="p-6">
        <h1 className='text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pb-5'>Contact Us</h1>
        <p className='font-semibold text-justify lg:text-lg md:text-md pb-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <div className='bg-white rounded-lg shadow-sm grid grid-col-4 gap-4'>
            <ContactForm/>
        </div>
      </div>
      </Fragment>
        );
        
    }
    
        
    }

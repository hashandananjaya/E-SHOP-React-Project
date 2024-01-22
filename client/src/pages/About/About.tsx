import React, { Component, Fragment } from 'react'
import './about.css'
import Header from '../../components/Header/Header';


type AboutCardDetails = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

type AboutProps = {};

type Aboutstate ={
    cardList: AboutCardDetails[];
}

export default class About extends Component<AboutProps, Aboutstate> {
        
    constructor(props: AboutProps) {
        super(props);
        this.state = {
            cardList: [
            

            ]
        }
    }

    render() {
        return(
            <Fragment>
      <Header/>
      <div className="p-6">
        <h1 className='text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pb-5'>About Us</h1>
        <p className='font-semibold text-justify lg:text-lg md:text-md pb-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <div className=' w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        </div>
      </div>
      </Fragment>
        )
        
    }

}
 
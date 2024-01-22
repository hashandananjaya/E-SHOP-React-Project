import React, { Component } from 'react'

type AboutCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

type AboutCardState = {};

export default class AboutCard extends Component<AboutCardProps, AboutCardState> {
  render() {
    return (
      <div className='w-full rounded-lg h-auto bg-gray-400 hover:bg-gray-600 hover:shadow-2xl hover:text-cyan-50'>
        <h2 className='pt-9 px-4 text-center font-bold text-xl'>{this.props.title}</h2>
        <p className='pt-2 px-4 pb-6 text-center font-semibold '>{this.props.description}</p>
        <span className='flex justify-center pb-9 text-3xl'>{this.props.icon}</span>
      </div>
    )
  }
}
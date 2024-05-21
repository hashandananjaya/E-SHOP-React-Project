import React, { Component, Fragment } from "react";
import "./home.css";
import { PostDetails } from "../../type/PostDetails";
import HeeoSection from "../../components/HeroSection/HeroSection";
import ItemCard  from "../../components/ItemCard";
import Header from "../../components/Header";





type HomeProps = {};

type  HomeState = {
    postList: PostDetails[];
};


export  default  class Home extends  Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            postList: [

            ],
        };
    }

    render() {
        return (
            <Fragment>
              <Header/>
                <div className= "p-0">
                    <HeeoSection/>

                    <div className= "p-6 w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        

                    </div>
                </div>
            </Fragment>
        );
    }
}
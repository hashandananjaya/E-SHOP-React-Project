import React, { Component, Fragment } from "react";
import "./home.css";
import { PostDetails } from "../../type/PostDetails";




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

                <div className= "p-0">

                    <div className= "p-6 w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4">

                    </div>
                </div>
            </Fragment>
        );
    }
}
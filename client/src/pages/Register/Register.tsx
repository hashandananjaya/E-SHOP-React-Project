import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
            <div className="relative flex flex-col justify-center mt-44">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-purple-600/40 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Sign up
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Username
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <Link to={'/login'}>
                                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    Save
                                </button>
                            </Link>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link to={'/login'} className="font-medium text-gray-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}




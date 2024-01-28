import React from 'react'
import { Outlet } from 'react-router-dom'
import Sider from '../components/static/Sider'
import Header from '../components/static/Header'

const Layout = () => {
    return (
        <div className="flex w-[100%]">
            <div className="md:flex w-[250px] h-[100vh] fixed hidden  transition-all duration-300 z-50">
                <Sider />
            </div>

            <div className="flex w-[calc(100%)] justify-end">
                <div className="flex flex-col w-[100%] transition-all duration-300 md:w-[calc(100%-250px)] justify-end">
                    <div

                    >
                        <Outlet />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
import React, {useEffect, useState} from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import AppRouter from '../AppRouter'


const Layout = () => {
    // chỗ này 
    // const adminUser = {
    //     email:"admin@gmail.com",
    //     password:"admin123"
    // }

    // const [admin, setAdmin ] = useState({email:""});
    // const [error, setError] = useState("");

    // const Login = details => {
    //     console.log(details);
    // } tới đây
    //
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()
// đã cmt chỗ này
    // useEffect(() => {
    //     const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    //     const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    //     dispatch(ThemeAction.setMode(themeClass))

    //     dispatch(ThemeAction.setColor(colorClass))
    // }, [dispatch])

    return (

            <AppRouter/>
            
            // <BrowserRouter>
                    
            //     <Route render={(props) => (
            //         <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            //             <Sidebar {...props}/>
            //             <div className="layout__content">
            //                 <TopNav/>
            //                 <div className="layout__content-main">
            //                     <Routes/>
                                
            //                 </div> 
                            
            //             </div>
                       
                        
            //         </div>
            //     )}/>
                
                
            // </BrowserRouter>   
    )
}

export default Layout

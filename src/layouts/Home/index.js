import React from 'react'
import Navbar from '../navbar/Navbar'
import Navbottom from '../headerbottom/HeaderBottom'
import Banner from '../banner/Banner'
import Whyus from '../whyus/Whyus'
import Footer from '../footer/AppFooter'
import { StylesProvider } from '@material-ui/core/Styles';

export default function Home() {
   
    return (
    
        <StylesProvider injectFirst>
           <Navbar/>
           <Navbottom />
            <Banner/>
            <Whyus/>
            <Footer/>
           </StylesProvider>
           
    )
}

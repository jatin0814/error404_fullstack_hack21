import React, { Component } from "react";

import styles from './Map.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

class Map extends Component {

    render() {

        return(
            <div>
                <Navbar/>
                Map
                <Footer/>
            </div>
        )
    }
}

export default Map;
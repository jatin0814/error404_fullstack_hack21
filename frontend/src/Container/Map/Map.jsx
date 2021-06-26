import React, { Component } from "react";
<<<<<<< HEAD
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import axios from "axios";
import date from 'date-and-time';

import styles from './Map.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

=======
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
>>>>>>> cd1d076a1231fdf83fb4eceedca8a44b5c1b72c6
class Map extends Component {
  componentDidMount() {
    console.log("in componentDidMount");
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamF0aW4wMjE0IiwiYSI6ImNrcWFuYXNkajBidDUyb3FzZXR3OTk5NTIifQ._jaXQLhuZomlQ03PznJeJg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.962883, 20.593683],
      zoom: 18,
    });

<<<<<<< HEAD
  state = {
    coordinates: [0,0]
  }

    componentDidMount(){

      var today = new Date();

      console.log(date.format(today, 'YYYY/MM/DD'))
  
      const data = {
      "date" : date.format(today, 'YYYY/MM/DD')
    }
        
        mapboxgl.accessToken = 'pk.eyJ1IjoiamF0aW4wMjE0IiwiYSI6ImNrcWFuYXNkajBidDUyb3FzZXR3OTk5NTIifQ._jaXQLhuZomlQ03PznJeJg';
        
        const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center:[78.962883,20.593683],
        zoom: 18
      })


      axios
      .post("http://localhost:9000/patient/patientOnDate" ,data)
      .then((res) => {
        this.setState({coordinates: res.data.patients[0].coordinate.reverse()})
        console.log(this.state.coordinates);
      })
      .catch((e) => {
        console.log(e);
      });

    
      map.on('load', function() {
        var directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          profile: 'mapbox/driving'
        });
        map.addControl(directions, 'top-left');  
        directions.setOrigin([76.337524,26.893192]);
        directions.setDestination([75.787270,26.912434]);
        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)
=======
    map.on("load", function () {
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: "mapbox/driving",
>>>>>>> cd1d076a1231fdf83fb4eceedca8a44b5c1b72c6
      });
      map.addControl(directions, "top-left");
      directions.setOrigin([76.337524, 26.893192]);
      directions.setDestination([75.78727, 26.912434]);
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
    });
  }

<<<<<<< HEAD
    render() {
        return(
            <div>
                <Navbar/>
                <button>SHOW NEXT PATIENT LOCATION</button>
                <div className={styles.map}>
                    <div id='map' style={{width:"100vw",height:"100vh"}}></div>
                </div>
                <Footer/>
            </div>
        )
    }
=======
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
        </div>
        <Footer />
      </div>
    );
  }
>>>>>>> cd1d076a1231fdf83fb4eceedca8a44b5c1b72c6
}

export default Map;

import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import axios from "axios";
import date from "date-and-time";
import styles from "./Map.module.css";
import Navbar from "../../Components/Navbar/Navbar2";
import Footer from "../../Components/Footer/Footer";
// var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  state = {
    coordinates: [0, 0],
  };

  componentDidMount() {

    mapboxgl.accessToken =
      "pk.eyJ1IjoiamF0aW4wMjE0IiwiYSI6ImNrcWFuYXNkajBidDUyb3FzZXR3OTk5NTIifQ._jaXQLhuZomlQ03PznJeJg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.962883, 20.593683],
      zoom: 13,
    });

    map.on("load", function () {
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: "mapbox/driving",
      });
      map.addControl(directions, "top-left");
      directions.setOrigin([76.337524, 26.893192]);
      directions.setDestination([77.185024, 28.629401599999998]);
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
    });
  }

  onGetDirection() {
    let location = [0, 0];

    var today = new Date();

    console.log(date.format(today, "YYYY/MM/DD"));

    const data = {
      date: date.format(today, "YYYY/MM/DD"),
    };

    axios
      .post("https://mobivax-api.herokuapp.com/patient/patientOnDate", data)
      .then((res) => {
        // this.setState({
        //   location: res.data.patients[0].coordinate.reverse(),
        // });
        console.log(res.data.patients[0].coordinate.reverse());
        location = res.data.patients[0].coordinate.reverse();
        console.log(location);
      })
      .catch((e) => {
        console.log(e);
      });

    mapboxgl.accessToken =
      "pk.eyJ1IjoiamF0aW4wMjE0IiwiYSI6ImNrcWFuYXNkajBidDUyb3FzZXR3OTk5NTIifQ._jaXQLhuZomlQ03PznJeJg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.962883, 20.593683],
      zoom: 13,
    });

    map.on("load", function () {
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: "mapbox/driving",
      });
      map.addControl(directions, "top-left");
      directions.setOrigin([76.337524, 26.893192]);
      directions.setDestination(28.629401599999998, 77.185024);
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
    });
  }

  render() {
    return (
      <div className={styles.mapbody}>
        <Navbar />
        <div className={styles.next}>
          <button onClick={this.onGetDirection}>Next User</button>
        </div>
        <div className={styles.center}>
          <button>Re-Center</button>
        </div>
        <div className={styles.map}>
          <div id="map" className={styles.map}></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map;

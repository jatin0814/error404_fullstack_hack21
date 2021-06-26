import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
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

    map.on("load", function () {
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: "mapbox/driving",
      });
      map.addControl(directions, "top-left");
      directions.setOrigin([76.337524, 26.893192]);
      directions.setDestination([75.78727, 26.912434]);
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
    });
  }

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
}

export default Map;

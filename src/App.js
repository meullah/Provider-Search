import React, { Component } from "react";
// import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Geocode from "react-geocode";
import MapComponent from "./components/maps";
Geocode.setApiKey("AIzaSyDADM9II6LJh8_dsIM21Jb0_9tpAiFTBDQ");
Geocode.enableDebug();

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markersLocation: [],
    };
  }
  componentWillMount() {
    this.getGeoLocation([
      "islamabad",
      "Quaid e Azam International Hospital",
      "Karachi company islamabd",
      "National Institude of Electronics Islamabad",
      "Faisal Mosque Islamabad",
    ]);
  }
  getGeoLocation(Address_names) {
    let temp = this.state.markersLocation;
    console.log("in geo getGeoLocation, names = ", Address_names);
    var name;
    for (name of Address_names) {
      console.log("Name is ", name);
      Geocode.fromAddress(name).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          temp.push({ latitude: lat, longitude: lng });
          console.log(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    this.setState({ markersLocation: temp });
  }

  render() {
    return (
      <div>
        <h1>ehsan</h1>
        <MapComponent
          name={"Rawalpindi, EME"}
          location={this.state.markersLocation}
        />
      </div>
    );
  }
}

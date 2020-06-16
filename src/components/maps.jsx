import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, Circle } from "google-maps-react";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDADM9II6LJh8_dsIM21Jb0_9tpAiFTBDQ");
Geocode.enableDebug();
const mapStyles = {
  width: "50%",
  height: "50%",
};

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 33.6163404,
      longitude: 72.937198,
    };
  }
  componentWillMount() {
    let self = this;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        self.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );

    // this.getGeoLocation(["islamabad", "faizabad", "Karachi company islamabd"]);
    // console.log("markers Location", this.state.markersLocation);
  }

  // getGeoLocation(Address_names) {
  //   let temp = this.state.markersLocation;
  //   console.log("in geo getGeoLocation, names = ", Address_names);
  //   var name;
  //   for (name of Address_names) {
  //     console.log("Name is ", name);
  //     Geocode.fromAddress(name).then(
  //       (response) => {
  //         const { lat, lng } = response.results[0].geometry.location;
  //         temp.push({ latitude: lat, longitude: lng });
  //         console.log(lat, lng);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );

  //     this.setState({ markersLocation: temp });
  //   }
  // }
  displayMarkers = () => {
    return this.props.location.map((loc, index) => {
      console.log("aaaaaaaaaaaaaaahhhh: ", loc);
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: loc.latitude,
            lng: loc.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          center={{ lat: this.state.latitude, lng: this.state.longitude }}
        >
          <Marker
            position={{ lat: this.state.latitude, lng: this.state.longitude }}
          />
          <Circle
            radius={5000}
            center={{ lat: this.state.latitude, lng: this.state.longitude }}
            onMouseover={() => console.log("mouseover")}
            onClick={() => console.log("click")}
            onMouseout={() => console.log("mouseout")}
            strokeColor="#FF0000"
            strokeOpacity={1}
            strokeWeight={1}
            fillColor="#FF0000"
            fillOpacity={0.2}
          />
          {this.displayMarkers()}
        </Map>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDADM9II6LJh8_dsIM21Jb0_9tpAiFTBDQ",
})(MapComponent);

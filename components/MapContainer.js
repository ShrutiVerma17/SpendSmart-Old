import React, { Component } from 'react';
//import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapView, {Marker} from 'react-native-maps';
import {AppRegistry, StyleSheet, View, Text, Block} from 'react-native';
const CustomMarker = () => (
  <View
    style={{
      padding: 1,
      backgroundColor: "red",
      borderColor: "#eee",
      borderRadius: 100,
      elevation: 10
    }}
  >
    <Text style={{ color: "#fff" }}>Target</Text>
  </View>
);
export class MapContainer extends Component{
    render(){
        return (
            <MapView
            style={styles.myMap}
            initialRegion={{latitude: 33.023,
            longitude: -117.10,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05}}
            >
              <Marker coordinate={{ latitude: 33.0197, longitude: -117.125 }} />
              <Marker coordinate={{ latitude: 33.021151, longitude: -117.072395}} />
              <Marker coordinate={{ latitude: 33.019444, longitude: -117.113013}} />
              <Marker coordinate={{ latitude: 33.028, longitude: -117.126 }} />
              <Marker coordinate={{ latitude: 33.041635, longitude: -117.113013}} />
              <Marker coordinate={{ latitude: 33.019094, longitude: -117.114019}} />
            </MapView>
        );
    }
}

AppRegistry.registerComponent('MapContainer', () => MapContainer)

const styles = StyleSheet.create({
  myMap: {
    flex: 0.5,
  },
  myText: {
    position: 'absolute',
    top: 100,
    right: 80,
  }
});


export default MapContainer;
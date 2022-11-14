//pick the location in react  like rapido  code ? 
//get exact location pick  like rapido in react-native function component code ?

import React, { useEffect, useState } from 'react'
import findNearestLocation from 'map-nearest-location';
import { View,Text} from 'react-native';
import { StyleSheet } from 'react-native';

export default function locationtrack() {
 const [myLocation, setMylocation] = useState(null);
 const [nearestLocation, setNearestLocation] = useState(null);
 const [status, setStatus] = useState(null);

 const locations = [
     {
       lat: 17.310419,
       lng: 78.529991
     },
     {
       lat: 17.310419,
       lng: 78.529991
     },
     {
       lat: 17.310419,
       lng: 78.529991
     },
     {
       lat: 17.310419,
       lng: 78.529991
     }
   ];

 useEffect(() => {
      getLocation();
 }, []);

 useEffect(() => {
     if(myLocation) {
          const nearest = findNearestLocation(myLocation, locations);
          setNearestLocation(nearest);
     }
 },[myLocation]);

 const getLocation = () => {
      if (!navigator.geolocation) {
           setStatus('Geolocation is not supported by your browser');
      } else {
           setStatus('Locating...');
           navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setMylocation({
                     lat: position.coords.latitude,
                     lng: position.coords.longitude
                })
           }, () => {
                setStatus('Unable to retrieve your location');
           });
      }
 }

 console.log(nearestLocation);

 return (
      <View style={styles.container}>
           <Text>map here</Text>
      </View>
 )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
        
    }
})

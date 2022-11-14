import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {TextInput} from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet, Image,ScrollView} from 'react-native';
import Icons from '../assets/constants/Icons';

const Details = (props) => {

let propsimage=props?.route?.params?.item?.item?.xt_image;

 console.log("propsdata",props?.route?.params?.item?.item?.xt_image);

  const navigation = useNavigation();
  const [message,setMessage]=useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();




// const data = async()=>{

//     const url = {propsimage};
//     const { data: stream } = await axios.get(url, {
//         responseType: 'stream',
//       })

//       const formData = new FormData()
//       formData.append('image', stream)
      
//       try {
//         const { data } = await axios.post('http://dev3.xicom.us/xttest/savedata.php', formData, {
//           headers: formData.getHeaders(),
//         })
//         console.log("dataaa",data)
//       } catch (error) {
//         // handle error
//       }
// }


    let handleSubmit = async (e) => {
         alert((e))
      const url = {propsimage};
    // const { data: stream } = await axios.get(url, {
    //     responseType: 'stream',
    //   })
    const client=axios.create(({
      baseURL:url
    }))
    const {data:steam}=client.get({
      ResponseType: 'stream',

    });
    console.log(steam)
      const formData = new FormData()
      formData.append('image', steam)
        try {
          let res = await fetch("http://dev3.xicom.us/xttest/savedata.php",  formData, {
                      headers: formData.getHeaders(),
                    },{
          "Content-Type": "multipart/form-data",
            method: "POST",
            redirect: 'follow',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
           
            }),
            
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("")
            
            setMessage("details updated successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
      console.log("firstName",firstName)
      console.log("lastName",lastName)
      console.log("email",email)
      console.log("phone",phone)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icons.BackArrow} style={styles.imageStyle} />
        </TouchableOpacity>
        <Text style={{fontWeight: '800', fontSize: 16}}>Detail screen</Text>
        <View></View>
      </View>
      <View style={{padding:16}}>
        <Image source={{uri:propsimage}} style={styles.detailsIcon} />
      </View>
      <View style={{paddingHorizontal:15}}>
      <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <Text style={[styles.fonts, {color: 'black'}]}>First Name</Text>
        <TextInput
          style={{
            height: 40,
            width: '60%',
            borderColor: 'gray',
            placeholderTextColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
          }}
          onChangeText={e => setFirstName(e.target)}
          value={firstName}
          placeholder=""
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <Text style={[styles.fonts, {color: 'black'}]}>Last Name</Text>
        <TextInput
          style={{
            height: 40,
            width: '60%',
            borderColor: 'gray',
            placeholderTextColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
          }}
          onChangeText={e => setLastName(e.target)}
          value={lastName}
          placeholder=""
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <Text style={[styles.fonts, {color: 'black'}]}>Email</Text>
        <TextInput
          style={{
            height: 40,
            width: '60%',
            borderColor: 'gray',
            placeholderTextColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
          }}
          onChangeText={e => setEmail(e.target)}
          value={email}
          placeholder=""
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingTop: 8,
        }}>
        <Text style={[styles.fonts, {color: 'black'}]}>Phone</Text>
        <TextInput
          style={{
            height: 40,
            width: '60%',
            borderColor: 'gray',
            placeholderTextColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
          }}
          onChangeText={e => setPhone(e.target)}
          value={phone}
          keyboardType='numeric'
          dataDetectorTypes="phoneNumber"
          placeholder=""
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 8,
        }}>
        <TouchableOpacity
          onPress={(e)=>handleSubmit(e)}
          style={{
            backgroundColor: 'green',
            padding: 10,
            width: '30%',
            borderRadius: 10,
          }}>
          <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 16}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  fonts: {
    width: '30%',
    fontSize: 14,
    fontWeight:'600',
    color: 'green',
    paddingBottom: 5,
    paddingTop: 10,
  },
  detailsIcon:{
    width: '100%',
    height: 200,
    borderRadius: 8,
  }
});

export default Details;

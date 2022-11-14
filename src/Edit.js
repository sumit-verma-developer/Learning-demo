import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {COLORS} from '../assets/constants/Index';
import {Responsive} from '../src/utils/layouts/Layout';
import ApiList from './ApiList';
import Icons from '../assets/constants/Icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';



const Edit = props => {
  console.log('props', props.route.params);
  const editdetails = props?.route?.params;

  const navigation = useNavigation();
  const [name, setName] = React.useState(editdetails?.name);
  const [email, setEmail] = React.useState(editdetails?.email);
  const [role, setRole] = React.useState(editdetails?.role);


  const handleSubmit = editdetails => {
    const filteredData = ApiList.filter((ele=>ele.id!=editdetails.id))
    
    const data = [...filteredData, 
      {
        "id": editdetails.id,
        "name": name,
        "email": email,
        "role": role
    
    }]
    navigation.navigate('Home', data)

    
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainerwrapper}>
        <Text style={styles.headerWrapper}>Edit</Text>
      </View>
      <View
        style={{flex: 8, justifyContent: 'space-between', paddingBottom: 40}}>
        <View style={styles.listWrapper}>
          <View style={{}}>
            <View style={{paddingLeft: 5}}></View>

            <View style={styles.listDataWrapper}>
              <View style={{}}>
                <Text style={[styles.fonts, {color: 'black'}]}>Name</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    placeholderTextColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChangeText={e => setName(e)}
                  value={name}
                  placeholder=""
                />
              </View>

              <View style={{}}>
                <Text
                  style={[styles.fonts, {paddingBottom: 0, color: 'black'}]}>
                  Email
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'gray',
                    placeholderTextColor: 'gray',
                    borderRadius: 10,
                  }}
                  onChangeText={e => setEmail(e)}
                  value={email}
                  placeholder=""
                />
              </View>

              <View style={{}}>
                <Text
                  style={[styles.fonts, {paddingBottom: 0, color: 'black'}]}>
                  Role
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'Black',
                    placeholderTextColor: 'grey',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChangeText={e => setRole(e)}
                  value={role}
                  placeholder=""
                />
              </View>
              <View style={{width: '2%'}}></View>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              handleSubmit(editdetails);
            }}
            style={{
              padding: 10,
              backgroundColor: 'green',
              width: '70%',
              borderRadius: 15,
            }}>
            <Text
              style={{textAlign: 'center', fontWeight: '500', fontSize: 16}}>
              Submit details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainerwrapper: {
    backgroundColor: COLORS.white,
    marginTop: Responsive.height(5),
    paddingBottom: Responsive.height(6),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    fontSize: 20,
  },
  searchBarwrapper: {
    marginTop: Responsive.height(30),
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  listDataWrapper: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // backgroundColor: 'red',
  },
  listWrapper: {
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    paddingVertical: 20,
    // borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },

  fonts: {
    fontSize: 14,
    color: 'green',
    paddingBottom: 5,
    paddingTop: 10,
  },
});
export default Edit;
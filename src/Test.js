import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';


let limit = 10;
let loadMore = true;


const Test = () => {

  const navigation = useNavigation()
  const [data, setdata] = useState([]);
  const [skip, setskip] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  const fetchdata = () => {

    var formdata = new FormData();
    formdata.append('user_id', '108');
    formdata.append('offset', '0');
    formdata.append('type', 'popular');
    let query = `?skip=${skip}&limit=${limit}`;
    fetch(
      'http://dev3.xicom.us/xttest/getdata.php',
      (requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      }),
      +query,
    )
      .then(res => res.json())
      .then(res => {
        console.log('apidata', res);
        if (res?.length === 0) {
          loadMore = false;
        }
        // setdata(res.images.xt_image)
        setShowLoader(false);
        setdata([...data, ...res?.images]);
        setskip(skip + 10);
      })
      .catch(error => {
        console.log('error ', error);
      });
  };

  const onEndReached = () => {
    if (loadMore) {
      fetchdata();
      setShowLoader(true);
    }
  };
  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator size={'large'} />;
  });

  React.useEffect(() => {
    fetchdata();
  }, []);

  const renderItem = useCallback(
    item => {
      console.log("itemdata",item);

      return (
        <View key={item.id} style={styles.faltstyle}>
          <TouchableOpacity onPress={()=>navigation.navigate("details",{item})}>
            <Image source={{uri:item?.item?.xt_image}} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
      );
    },
    [data],
  );

  const keyExtractor = useCallback(item => `${item.id}`);
  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}}></View>;
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparatorComponent}
          onEndReached={onEndReached}
          ListFooterComponent={showLoader && listFooterComponent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  faltstyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#fff',
    padding: 8,
    margin: 2,
  },
});
export default Test;

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {getUsers} from '../../services/userServices';

import {Result} from './RandomUser-interface';

const Users: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    getUsers().then(res => setData(res.results));
  }, []);

  const onPress = (item: Result) => navigation.navigate('User', item);

  return (
    <View>
      <FlatList
        style={styles.flatContainer}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id.name}
            style={styles.touchableO}
            onPress={() => onPress(item)}>
            <Image
              style={styles.image}
              source={{uri: `${item.picture.thumbnail}`}}
            />
            <Text style={styles.highlight}>
              {item.name.first} {item.name.last}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainer: {
    marginTop: 32,
    paddingHorizontal: 50,
    display: 'flex',
  },
  touchableO: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Users;

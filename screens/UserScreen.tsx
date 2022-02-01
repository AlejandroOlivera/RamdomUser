// @Vendors:
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const User = ({route}: any) => {
  return (
    <View style={styles.userContainer}>
      <Image
        style={styles.image}
        source={{uri: `${route.params.picture.large}`}}
      />
      <View style={styles.nameContainer}>
        <Text>{route.params.name.title},</Text>
        <Text>{route.params.name.first}</Text>
        <Text>{route.params.name.last}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Gender: {route.params.gender}</Text>
        <Text>Email: {route.params.email}</Text>
        <Text>Phone: {route.params.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  nameContainer: {
    display: 'flex',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20,
  },
});

export default User;

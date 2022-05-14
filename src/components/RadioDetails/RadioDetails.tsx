import React from 'react';
import { IRadioStation } from '@api';
import { View, Image } from 'react-native';
import { styles } from './styles';

const RadioDetails = ({ image }: IRadioStation) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export { RadioDetails };

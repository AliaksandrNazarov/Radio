import React from 'react';
import { IRadioStation } from '@api';
import { View, Text } from 'react-native';
import { styles } from './styles';

const RadioListItem = ({ name, frequency }: IRadioStation) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{frequency}</Text>
    </View>
  );
};

export { RadioListItem };

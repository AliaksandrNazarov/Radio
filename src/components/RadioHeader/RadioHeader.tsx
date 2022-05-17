import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const STATIONS = 'STATIONS';

const arrowLeftIcon = require('@assets/icons/arrow_left.png');
const powerIcon = require('@assets/icons/power.png');

interface IProps {
  onPowerPress: () => void;
  onArrowPress: () => void;
}

const RadioHeader = ({ onPowerPress, onArrowPress }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onArrowPress}>
        <Image source={arrowLeftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{STATIONS}</Text>
      <TouchableOpacity onPress={onPowerPress}>
        <Image source={powerIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export { RadioHeader };

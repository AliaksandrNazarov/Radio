import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const plusIcon = require('@assets/icons/plus.png');
const minusIcon = require('@assets/icons/minus.png');

interface IProps {
  onPress?: () => void;
  plus?: boolean;
  minus?: boolean;
}

const CircleButton = ({ plus = true, onPress }: IProps) => {
  const source = plus ? plusIcon : minusIcon;
  return (
    <TouchableHighlight style={styles.circleContainer} onPress={() => onPress?.()}>
      <Image source={source} style={styles.circleButtton} />
    </TouchableHighlight>
  );
};

export { CircleButton };

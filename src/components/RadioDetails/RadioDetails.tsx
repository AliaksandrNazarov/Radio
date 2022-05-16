import React from 'react';
import { IRadioStation } from '@api';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { CircleButton } from './CircleButton';

interface IProps {
  stationsData: IRadioStation[];
  selectedSection: number[];
  setSelectedSection: (position: number[]) => void;
}

const RadioDetails = ({ selectedSection, stationsData, setSelectedSection }: IProps) => {
  const item = stationsData[selectedSection[0]];

  const onPlusPress = () => {
    const nextPlusValue = selectedSection[0] + 1;
    const valueToSet = nextPlusValue > stationsData.length - 1 ? 0 : nextPlusValue;
    setSelectedSection([valueToSet]);
  };

  const onMinusPress = () => {
    const nextMinusValue = selectedSection[0] - 1;
    const valueToSet = nextMinusValue < 0 ? stationsData.length - 1 : nextMinusValue;
    setSelectedSection([valueToSet]);
  };

  return (
    <View style={styles.container}>
      <CircleButton plus={false} onPress={onMinusPress} />
      <Image source={{ uri: item?.image }} style={styles.image} />
      <CircleButton onPress={onPlusPress} />
    </View>
  );
};

export { RadioDetails };

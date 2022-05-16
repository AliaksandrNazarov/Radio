import React from 'react';
import { View, Text } from 'react-native';
import { IRadioStation } from '@api';
import { styles } from './styles';

const CURRENTLY_PLAYING = 'CURRENTLY_PLAYING';

interface IProps {
  selectedSectionItem: IRadioStation;
}

const RadioFooter = ({ selectedSectionItem }: IProps) => {
  return (
    <View style={styles.container}>
      {selectedSectionItem?.name ? (
        <>
          <Text style={styles.textDescription}>{CURRENTLY_PLAYING}</Text>
          <Text style={styles.textName}>{selectedSectionItem?.name}</Text>
        </>
      ) : null}
    </View>
  );
};

export { RadioFooter };

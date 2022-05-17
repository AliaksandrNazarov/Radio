import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { variables } from '@assets';

interface IProps {
  error: Error;
  resetError: () => void;
}

const Fallback = ({ error, resetError }: IProps) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>Something happened!</Text>
    <Text style={styles.textError}>{String(error.name)}</Text>
    <Text style={styles.textError}>{String(error.message)}</Text>
    <Button title={'Try again'} color={variables.HeaderBackgroundColor} onPress={resetError} />
  </View>
);

export { Fallback };

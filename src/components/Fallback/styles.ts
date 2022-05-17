import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: variables.ListItemBackgroundColor,
  },
  textTitle: {
    fontSize: 28,
    color: variables.HeaderTextColor,
    paddingBottom: 20,
  },
  textError: {
    fontSize: 20,
    color: variables.HeaderTextColor,
    paddingBottom: 20,
  },
  button: {
    color: 'red',
  },
});

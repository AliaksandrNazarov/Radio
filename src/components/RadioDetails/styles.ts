import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: variables.ListItemBackgroundColor,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 15,
    borderRadius: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: variables.ListItemTextColor,
  },
});

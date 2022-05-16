import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: variables.HeaderBackgroundColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  text: {
    color: variables.HeaderTextColor,
    fontSize: variables.ListItemFontSize,
  },
  icon: {
    width: 35,
    height: 35,
  },
  button: {
    backgroundColor: variables.HeaderBackgroundColor,
  },
});

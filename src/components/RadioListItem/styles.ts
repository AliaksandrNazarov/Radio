import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: variables.ListItemBackgroundColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 15,
  },
  text: {
    color: variables.ListItemTextColor,
    fontSize: variables.ListItemFontSize,
  },
});

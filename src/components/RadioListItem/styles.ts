import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: variables.ListItemBackgroundColor,
  },
  text: {
    color: variables.ListItemTextColor,
    fontSize: variables.ListItemFontSize,
  },
  innerContainer: {
    backgroundColor: variables.ListItemBackgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: variables.ListItemTextColor,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});

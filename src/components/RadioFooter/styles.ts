import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#1d1d25',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: variables.ListItemTextColor,
  },
  textDescription: {
    color: variables.HeaderBackgroundColor,
    fontSize: variables.FooterSmallFontSize,
    fontWeight: '500',
  },
  textName: {
    color: variables.ListItemTextColor,
    fontSize: variables.ListItemFontSize,
  },
});

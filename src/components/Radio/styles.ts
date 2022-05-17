import { StyleSheet } from 'react-native';
import { variables } from '@assets';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.ListItemBackgroundColor,
    flex: 1,
  },
  containerAccordeonFooter: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

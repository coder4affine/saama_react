import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'column',
  },
  vCenter: {
    justifyContent: 'center',
  },
  hCenter: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  margin: {
    margin: 10,
  },
});

export default styles;

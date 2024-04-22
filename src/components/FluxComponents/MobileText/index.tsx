import {StyleSheet, Text} from 'react-native';
import {Component, Text as FluxText} from 'test_fluxjs';

const styles = StyleSheet.create({
  title: {
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const MobileText: React.FC<{component: Component}> = ({component}) => {
  const textComponent = component as FluxText;
  return <Text style={styles.title}>{textComponent.text}</Text>;
};

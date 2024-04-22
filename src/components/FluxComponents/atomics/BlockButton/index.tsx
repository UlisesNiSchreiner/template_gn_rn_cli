import {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {BlockButton} from 'test_fluxjs';
import {AuthContext} from '../../../../context/AuthContext';

export const BlockButtonImp: React.FC<{component: BlockButton}> = ({
  component,
}) => {
  const state = useContext(AuthContext);
  console.log(state);
  const eventHandler = () => {
    if (component.onClickEvent) {
      state.authState.eventHandler(component.onClickEvent);
    }
  };

  const styles = StyleSheet.create({
    padding: {
      padding: 10,
    },
  });

  return (
    <View style={styles.padding}>
      <Button onPress={eventHandler} title={component.text}></Button>
    </View>
  );
};

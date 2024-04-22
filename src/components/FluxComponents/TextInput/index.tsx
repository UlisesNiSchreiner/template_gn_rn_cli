import {useContext} from 'react';
import { View, TextInput } from 'react-native';
import {SetOutputEvent, Component, TextInput as FluxTextInput} from 'test_fluxjs';
import { AuthContext } from '../../../context/AuthContext';

export const TextInputImp: React.FC<{component: Component}> = ({component}) => {
  const textInputComponent = component as FluxTextInput;
  const state = useContext(AuthContext)
  const eventHandler = (textValue: string) => {
    const output = new SetOutputEvent(
      textInputComponent.output,
      textValue,
    );
    state.authState.eventHandler(output)
  };

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => eventHandler(newText)}
      />
    </View>
  );
};

import { useContext, useEffect, useState } from "react";
import { getFirstConnection } from "./untiles/NavigationUntils";
import { useFluxNavigation } from "./hooks/useFluxNavigation";
import { useEventManager } from "./hooks/useEventManager";
import { AuthContext } from "./context/AuthContext";
import viewStepFactory from "./components/viewSteps";
import { Text, View } from "react-native";
import { ClientNavigation } from "test_fluxjs";

interface Props {
  entryPoint: string;
  clientNavigation: ClientNavigation;
}

export const AppNavigation = (props: Props) => {
  const [lastConnectionExecuted, executeConnection] = useState(
    getFirstConnection(props.entryPoint)
  );

  const {
    result,
    fetching,
    addOutput,
  } = useFluxNavigation(props.clientNavigation, lastConnectionExecuted);

  const navigateHandler = (navigationId: string): void => {
    const connection = result.connections[navigationId];
    //connection.forceSync = true
    executeConnection(connection);
  };
  const {executeEvent} = useEventManager(navigateHandler, addOutput);
  
  const context = useContext(AuthContext)

  useEffect(() => {context.sigin(fetching)}, [fetching]);
  useEffect(() => {context.setManager(executeEvent)}, [result]);
  
  /*const {state, setState} = useContext(moduleContext);
  useEffect(() => {
    setState({
      ...state,
      fetching: fetching,
      eventHandler: executeEvent,
    });
  }, [fetching]);*/

  if (result != undefined) {
    const functionalComponent = viewStepFactory(result);
    if (functionalComponent != undefined) {
      return functionalComponent;
    }
  }

  return <View><Text>Loading</Text></View>;
};

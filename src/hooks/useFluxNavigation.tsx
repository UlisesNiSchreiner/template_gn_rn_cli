import { useState, useEffect } from 'react';
import { Connection, ClientNavigation, ViewStep } from 'test_fluxjs';

export const useFluxNavigation = (
  clientNavigation: ClientNavigation,
  connection: Connection
) => {
  const initialViewStep = new ViewStep("desde_useFLux")
  const [result, setViewStep] = useState(initialViewStep);
  const [fetching, setFetching] = useState(true);
  const [output, setOutput] = useState({});

  const addOutput = (key: string, value: string) => {
    console.log("add output", key, value)
    setOutput({
      ...output,
      [key]: value,
    });
  };

  const clearOutput = () => {
    setOutput({});
  };

  useEffect(() => {
    loadActualViewStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection]);

  const fetchingCallback = (isFetching: boolean = false): object => {
    setFetching(isFetching);
    if (isFetching) clearOutput();
    return {}
  };

  const loadActualViewStep = async () => {
    console.log("va a fetchear con los outputs", output)
    const navigationResult = await clientNavigation.navigate(
      connection,
      output,
      fetchingCallback
    );
    setViewStep(navigationResult);
  };

  return {
    result,
    fetching,
    //loadActualViewStep,
    addOutput,
    //output,
    //clearOutput,
  };
};

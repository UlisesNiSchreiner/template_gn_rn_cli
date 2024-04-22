import {StyleSheet, View} from 'react-native';
import {MobileViewStep, ViewStep} from 'test_fluxjs';
import {ScrollingComponent} from '../posicioning/ScrollingComponent';
import {ThreePartComponentDivider} from '../posicioning/ThreePartComponentDivider';

export const MobileViewStepImp: React.FC<{viewStep: ViewStep}> = ({
  viewStep,
}) => {
  const viewStepComponent = viewStep as MobileViewStep;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      {viewStepComponent.organizer == 'threePart' ? (
        <ThreePartComponentDivider
          components={viewStepComponent?.components ?? []}
        />
      ) : (
        <ScrollingComponent
          components={viewStepComponent?.components ?? []}></ScrollingComponent>
      )}
    </View>
  );
};

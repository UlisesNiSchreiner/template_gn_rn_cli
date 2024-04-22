import React from 'react';
import { View } from 'react-native';
import { Component, Position } from 'test_fluxjs';
import componentFactory from '../..';

interface Props {
    components: Component[];
}

export const ThreePartComponentDivider = ({ components }: Props) => {
  const topComponents: Component[] = [];
  const centerComponents: Component[] = [];
  const bottomComponents: Component[] = [];

  components.forEach((component: Component) => {
    if (component.position === Position.TOP) {
      topComponents.push(component);
    } else if (component.position === Position.BOOTON) {
      bottomComponents.push(component);
    } else {
      centerComponents.push(component);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {topComponents.length > 0 && (
        <View style={{ flex: 0 }}>
          {topComponents.map((component: Component, index: number) =>
            <View key={`top-component-${index}`}>
              {componentFactory(component)}
            </View>
          )}
        </View>
      )}
      {centerComponents.length > 0 && (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {centerComponents.map((component: Component, index: number) =>
              <View key={`center-component-${index}`}>
                {componentFactory(component)}
              </View>
            )}
          </View>
        </View>
      )}
      {bottomComponents.length > 0 && (
        <View style={{ flex: 0 }}>
          {bottomComponents.map((component: Component, index: number) =>
            <View key={`bottom-component-${index}`}>
              {componentFactory(component)}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

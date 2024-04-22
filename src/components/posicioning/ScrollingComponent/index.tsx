import React from 'react'
import { View } from 'react-native'
import { Component } from 'test_fluxjs';
import componentFactory from '../..';

interface Props {
    components: (Component)[];
}

export const ScrollingComponent = ({ components }: Props) => {
  return (
    <View>
        {components.map((component: Component, index: number) =>
        <View key={`component-${index}`}>
          {componentFactory(component)}
        </View>
      )}
    </View>
  )
}

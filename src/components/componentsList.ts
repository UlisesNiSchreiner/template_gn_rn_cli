import { Component } from 'test_fluxjs'
import { BlockButtonImp } from './FluxComponents/atomics/BlockButton';
import { MobileText } from './FluxComponents/MobileText';
import { TextInputImp } from './FluxComponents/TextInput';

const components = new Map<string, React.FC<{ component: Component }>>();
components.set('block_button', BlockButtonImp);
components.set('text', MobileText)
components.set('text_input', TextInputImp)

export default components;

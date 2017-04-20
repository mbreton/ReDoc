// @flow
import fs from 'fs';
import { internal as logger } from '../../logger';
import type {
  ComponentDescriptor,
  MethodDescriptor,
  PropDescriptor,
} from '../../models/component-descriptor';

function renderMethod(methods: MethodDescriptor[]): string {
  return methods.map(method => (`
    <li>name: ${method.name}</li>
    <li>docblock: ${method.docblock}</li>
    <li>modifiers: ${method.modifiers.join(',')}</li>
    <li>params: ${method.params.join(',')}</li>
  `)).join('');
}

function renderProps(props: { [propIdentifier: string]: PropDescriptor }): string {
  return Object.entries(props).map((entry) => {
    const name: string = entry[0];
    const prop: PropDescriptor = (entry[1]: any);
    return (`
      <li>name: ${name}</li>
      ${prop.flowType ? `<li>flowtype: ${prop.flowType.name}</li>` : ''}
      <li>required: ${prop.required.toString()}</li>
      <li>description: ${prop.description}</li>
    `);
  }).join('');
}

function renderToString(componentDescriptors: ComponentDescriptor[]) {
  return componentDescriptors.map(descriptor => `
    <h2>${descriptor.name}</h2>
    <ul><li>path: ${descriptor.path}</li></ul>
    <h3>Methods</h3>
    <ul>${renderMethod(descriptor.methods)}</ul>
    <h3>Props</h3>
    <ul>${renderProps(descriptor.props)}</ul>
    `).join('');
}

export default {
  render(componentDescriptors: ComponentDescriptor[]) {
    logger.debug('Rendering docs ...');
    fs.writeFileSync('./index.html', renderToString(componentDescriptors));
  },
};

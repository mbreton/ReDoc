// @flow
export type MethodDescriptor = {
  name: string,
  docblock: string,
  modifiers: [],
  params: [],
  returns: any
};

export type PropDescriptor = {
  flowType?: { name: string },
  required: boolean,
  description: string
};

export type ComponentDescriptor = {
  name: string,
  path: string,
  description: string,
  methods: MethodDescriptor[],
  props: { [propIdentifier: string]: PropDescriptor }
};

export const benchmark: MethodDecorator = (
  target: Object,
  property: string | symbol,
  descriptor: TypedPropertyDescriptor<unknown>,
): void => {
  console.log({ target, property, descriptor });
};

export const memoize: MethodDecorator = (
  target: Object,
  property: string | symbol,
  descriptor: TypedPropertyDescriptor<unknown>,
): void => {
  console.log({ target, property, descriptor });
};

export const camelCase: MethodDecorator = (
  target: Object,
  property: string | symbol,
  descriptor: TypedPropertyDescriptor<unknown>,
): void => {
  console.log({ target, property, descriptor });
};

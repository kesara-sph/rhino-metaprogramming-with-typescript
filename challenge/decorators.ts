export function paginate(): MethodDecorator {
  return function (target: Object, property: string | symbol, descriptor: TypedPropertyDescriptor<unknown>): void {
    // TODO
  };
}

export function trace(): ClassDecorator {
  return function (target: Function): void {
    for (const property of Object.getOwnPropertyNames(target.prototype)) {
      if (typeof target.prototype[property] !== "function") {
        continue;
      }

      const original: CallableFunction = target.prototype[property];

      target.prototype[property] = function (...args: unknown[]): unknown {
        console.debug("Invoking %s with args %O", property, args);
        return Function.apply.call(original, this, args);
      };
    }
  };
}

---
title: Providers
---

Providers are responsible to configure and resolve the value registered in the container. The following types of providers are available out-of-the-box:

* ClassProvider
* ValueProvider
* FactoryProvider

For the most part, because they are defined according to the way you register some value in the container, the use of providers will be transparent to you. 

## ClassProvider

This provider is used to instantiate and inject all dependencies a class needs. It is able to inject both constructor dependencies and property dependencies.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

class OrderRepository {
  // ...
}

class OrderService { 
  private readonly repository: OrderRepository
  // ...
}

container.register("OrderRepository").asClass(OrderRepository);

container.register("OrderService").asClass(OrderService, {
  properties: [{
    name: "repository",
    inject: "OrderRepository"
  }]
});
```

You can also specify that a constructor property or dependency is not required, that way the resolution will not fail if the dependency cannot be resolved at runtime



## ValueProvider

This provider is useful for registering constants, or things that have a already been instantiated in a particular way.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.register("release year").asValue(2022);
```

## FactoryProvider

This provider allows you to register your own factory. The factory has access to the `ResolutionContext` and must return a value:

```typescript
type Factory<T> = (context: ResolutionContext) => T;
```

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.register("user").asFactory((context) => {
  return new User();
});
```

## Custom Providers

It is possible to create your own Provider, extending the `AbstractProvider` abstract class.

```typescript
export abstract class AbstractProvider<T> {
  abstract resolve(context: ResolutionContext): T;
}
```

```typescript
class HelloProvider extends AbstractProvider<string> {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  resolve(context: ResolutionContext): T {
    return `Hello ${this.name}!`;
  }
}

container.register("hello").asProvider(
  new HelloProvider("Microinjection")
);

console.log(container.resolve("hello"))
// "Hello Microinjection!"
```
---
title: Modules
---

You can create `Modules` to help with your registrations. This allows you to add registrations in a container in a modular way, just by calling `container.addModule()` method.

The modules also allow you to use external libraries that create their own registrations in the container you define.

```typescript
abstract class AbstractModule {
  abstract configure(container: Container): Promise<void> | void;
}
```

When a `Module` object is added to a `Container`, the `configure` method is invoked with the container where the module was added.

## Creating a Module

To create a module, you just need to extends the `AbstractModule` class with a concrete `configure(container: Container)` method: 

```typescript

export class ServicesModule extends AbstractModule {
  async configure(container: Container): Promise<void> {
    // Your registration logic goes here
  }
}
```

## Adding a module to the container

You can use `container.addModule()` to add modules into a container instance.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.addModule(new ServiceModule());
```
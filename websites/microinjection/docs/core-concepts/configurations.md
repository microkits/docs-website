---
title: Configurations
---

You can use `Configuration` objects to help with your registrations. This allows registrations to be done in a modular way. This also allows you to load the configurations into any container instance you want just calling the `container.load()` method.

The constructor argument for Configuration class is a `ConfigurationHandler` that is passed a container that you can use like anywhere else.

```typescript
interface ConfigurationHandler {
  (container: Container): void
}
```

When a configuration object is loaded into a Container, the handler is invoked.

## Creating configurations

To create a configuration object, you just need to instantiate the `Configuration` class by passing a `ConfigurationHandler`: 

```typescript
// repositoriesConfiguration.ts
import { Configuration } from "@microkits/microinjection";

// ...

export const repositoriesConfiguration = new Configuration((container) => {
  container.register("UserRepository").asClass(UserRepository);
  container.register("OrderRepository").asClass(OrderRepository);
});
```

```typescript
// servicesConfiguration.ts
import { Configuration } from "@microkits/microinjection";

// ...

export const servicesConfiguration = new Configuration((container) => {
  container.register("UserService").asClass(UserService);
  container.register("OrderService").asClass(OrderService);
});
```

## Loading configurations

You can use `container.load()` to load configurations into a container instance.

```typescript
import { Microinjection } from "@microkits/microinjection";
import { servicesConfiguration } from "./servicesConfiguration";
import { repositoriesConfiguration } from "./repositoriesConfiguration";

const container = Microinjection.getDefaultContainer();

container.load(servicesConfiguration, repositoriesConfiguration);
```
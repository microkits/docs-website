---
title: Scopes
---

Scopes allows you to determine how returned instances are cached. Microinjection lets you define the scope when registering a dependency.

```typescript
container.register("release year").asValue(2022).inTransientScope();
container.register("release year").asValue(2022).inSingletonScope();
container.register("release year").asValue(2022).inContextScope();

// Or

container.register("release year").asValue(2022).inScope(Scope.TRANSIENT);
container.register("release year").asValue(2022).inScope(Scope.SINGLETON);
container.register("release year").asValue(2022).inScope(Scope.CONTEXT);
```

## Transient Scope

It is the default Scope used by Microinjection. A new instance of the component will be created with each resolve. If multiple consumers depend on the dependency, each consumer will get its own new instance of the given dependency.

## Singleton Scope

There will be at most one instance in the container where the registration was made. Each resolve will return the same instance. If an instance is requested by a child container, but registration was performed in the parent container, the instance will be cached in the parent container.

:::note
If a singleton is resolved, and it depends on a transient or context scoped registration, they will remain in the singleton for it's lifetime!
:::

## Context Scope

Similar to singleton scopes, but the instance will be cached in the resolution context instead of in a container. Two different contexts in the same container will resolve and cache two different values. For more information on how contexts work, please check [Resolution Context](resolution-context).
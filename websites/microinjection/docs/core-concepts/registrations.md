---
title: Registrations
---

A `Registration` is anything you, well, register in the container to be resolved later.

## Registering

In the code snippet below, a registration with the id "release year" is being added to the container. This registration does not yet have information on how it can be resolved or the scope to which it will belong.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.register("release year");
```

You can also use [Configuration objects](configurations) to add registrations to your container.

### Using a Provider

A registration is only considered ready to be resolved when a [Provider](providers) is linked to it. When you call `container.register()` a `RegistrationBuilder` is returned with all the methods needed to complete the setup of a registration.

In the code snippet below, we added [ValueProvider](providers#valueprovider) to give us a value that will be returned when registration is resolved.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.register("release year").asValue(2022);
```

Other [default providers](providers) can be used, or you can [create your own provider](providers#custom-providers).

### Defining a Scope

It is also possible to define a [Scope](scopes.md) for registration:

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.register("release year").asValue(2022).inSingletonScope();
```

:::note
Please note that using some types of providers, there is no way to return a different instance, so even though the scope is set and the provider is asked to create a new instance, the same instance will always be returned, regardless of the scope.
:::

## Resolving

The typical way that an object is resolved is from the `container.resolve()` method.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

const value = container.resolve("release year");
```

### Not required resolution

You can also specify whether the value is not required to be resolved, so an error will not be thrown if a registration is not found and `undefined` will be returned.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

const value = container.resolve("release year", false);
```

## Removing a single registration

It is also possible to remove a registration from a container. If you try to remove a registration that doesn't exist, an error will be thrown.

:::note
A container is not able to remove a registration from its ancestors. 
:::

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.remove("release year");
```

## Removing all registrations

You can clear all registrations from a container at once using `container.clear()`.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

container.clear();
```

## Checking if a registration exists

It is possible to check if a registration exists in a container.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

if (container.has("release year")) {
  console.log("The registration exists!");
}
```

If you need to verify that a registration exists, taking into account all ancestors of a container, you can use the following code snippet:

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

// container.get() returns a registration by their id
const exists = (container.get("release year") != null);
```

:::note
While it is possible to get a registration from the container, directly manipulating it can lead to unexpected behavior. Use carefully!
:::

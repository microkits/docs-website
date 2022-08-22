---
title: Decorators
---

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. We use them to make it easy to create registrations in our containers.

Decorators are available in the package `@microkits/microinjection-decorators`. It is possible to dynamically load decorated classes to be registered in the container

```sh
# NPM
npm install @microkits/microinjection-decorators
```

```sh
# Yarn
yarn add @microkits/microinjection-decorators
```

## Configuring decorators

In order for the decorated classes to be identified and registered, the `DecoratorModule` needs to be added to your container. The registration will be done when the import is performed at runtime.

```typescript
  import { Microinjection } from "@microkits/microinjection";
  import { DecoratorModule } from "@microkits/microinjection-decorators"

  const container = Microinjection.createContainer();

  await container.addModule(new DecoratorModule({
    path: "path to your directory containg decorated classes"
  }));
```

The module will find all the decorated classes in the given path and create the registrations based on the added decorators added in each class.

## Available Decorators

### @Injectable

The `@Injectable(id?: string)` decorator define that your class should be registered in the container. You can also use it to define the id that registration will have when it is added to the container

```typescript
import { Injectable } from "@microkits/microinjection";

@Injectable()
class Cat {
  speak() {
    console.log("meooow!")
  }
}
```

### @SingletonScoped

Define that your class should be registered in [Singleton Scope](../core-concepts/scopes.md#singleton-scope)

```typescript
import { Injectable } from "@microkits/microinjection";

@SingletonScoped()
@Injectable()
class Cat {
  speak() {
    console.log("meooow!")
  }
}
```

### @ContextScoped

Define that your class should be registered in [Context Scope](../core-concepts/scopes.md#context-scope)

```typescript
import { Injectable } from "@microkits/microinjection";

@SingletonScoped()
@Injectable("Cat")
class Cat {
  speak() {
    console.log("meooow!")
  }
}
```

### @TransientScoped

Define that your class should be registered in [Transient Scope](../core-concepts/scopes.md#transient-scope)

```typescript
import { Injectable } from "@microkits/microinjection";

@TransientScope()
@Injectable("Cat")
class Cat {
  speak() {
    console.log("meooow!")
  }
}
```

### @Inject

Defines that a property of the class or a parameter of the constructor must be injected by the container. You can pass the registration id to the @Inject decorator that should be injected into the property, otherwise the property name will be used by default.

```typescript
import { Inject, Injectable } from "@microkits/microinjection";

@Injectable()
class CatOwner {
  @Inject("Cat")
  readonly cat: Cat;
}
```

Anything that is registered in containers can be injected, even if they have not been registered using decorators, such as other classes, values and factories.

## Resolving

Registrations created by decorators can be resolved in [the same way](../core-concepts/registrations.md#resolving) as any other.
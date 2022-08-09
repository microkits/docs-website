---
title: Decorators
---

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. We use them to make it easy to create registrations in our containers.

Classes that use decorators will be registered in the application's default `Container`. 

In order for the decorators to be identified and the class to be registered, modules containing decorated classes need to be imported into your application's entry point. The class will be registered when the import is performed at runtime.

```typescript
import "./Cat";
```

## Registering

You can use the `@Injectable` decorator to say that your class should be registered in the container.

```typescript
import { Injectable } from "@microkits/microinjection";

@Injectable("Cat")
class Cat {
  speak() {
    console.log("meooow!")
  }
}
```

## Defining a Scope

You can use the following decorators to define the scope of your registration:

- @SingletonScoped
- @ContextScoped
- @TransientScoped

```typescript
import { Inject, Injectable, SingletonScoped } from "@microkits/microinjection";

@SingletonScoped()
@Injectable("CatOwner")
class CatOwner {
  @Inject("Cat")
  cat: Cat;
}
```

## Injecting

Where you need to inject an instance of the class, you will use the `@Inject` decorator.

```typescript
import { Inject, Injectable } from "@microkits/microinjection";

@Injectable("CatOwner")
class CatOwner {
  @Inject("Cat")
  cat: Cat;
}
```

Anything that is registered in containers can be injected, even if they have not been registered using decorators, such as other classes, values and factories.

## Resolving

Registrations created by decorators can be resolved in the same way as any other, using the `container.resolve()` method.
---
title: Resolution Context
---

The function of a [`Container`](containers) is to store the registrations you perform, and the `ResolutionContext` is the entry point to encapsulate all the resolution of the values you want. The returned values, which have `Scope.CONTEXT` scope, will be cached in the resolution context. This means that the context will return the same instance each time a resolution for this dependency is requested.

Contexts can be useful if you need more control over when new instances are created. A practical example of this is when we need to get a new instance on every HTTP request and we want this instance to be reused within that request.

## Creating a Resolution Context

You can also get a resolution context from a container and use it to resolve the dependencies you need. 

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();
const context = container.createResolutionContext();
```

A context is able to access the registrations of the container responsible for its creation and its ancestors.

:::note
When you use `container.resolve()`, you are actually asking the container to create a `ResolutionContext` and ask it to resolve the dependency for you. 
:::

## Context Hierarchy

As with containers, you can also have a hierarchy of resolution contexts. When we ask the context to resolve a context scoped instance, it will first look for an instance in its cache, then look in its ancestors cache, and then try to create a new instance using existing registrations in the container.

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();

class User {}

container.register("user").asClass(User).inContextScope();

const parentContext = container.createResolutionContext();
const childContext = parentContext.createChildContext();

const user1 = parentContext.resolve("user");
const user2 = childContext.resolve("user");

// user1 and user2 are the same instance
console.log(user1 === user2); // true

```
---
title: Circular dependencies
---

:::note
Circular dependencies shouldn't be such a common use case. It usually means bad design. Try as much as possible to refactor your code before proceeding.
:::

## On Properties

Microinjection supports out-of-the-box cyclic dependencies on `Class Properties`. You just need to register properties and they will be resolved automatically the first time they are used.

```typescript
const container = new Container();

class B {
  a: A;
}

class A {
  b: B;
}

container.register("B").asClass(B, {
  properties: [{
    name: "a",
    inject: "A"
  }]
});

container.register("A").asClass(A, {
  properties: [{
    name: "b",
    inject: "B"
  }]
});

const a = container.resolve("A");
const b = container.resolve("B");
```

## On Constructor

Microinjection does not support this at the moment. We are working to make it better, but as said before, circular dependencies shouldn't be a common use case.
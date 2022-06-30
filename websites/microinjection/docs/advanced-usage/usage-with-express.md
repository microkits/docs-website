---
title: Usage with Express
---

:::note 
If you are using TypeScript, you will want to create a custom definition to add a property to express request object. Check the currently correct way to do this in the Express and TypeScript documentation.
:::

## Create your registrations

You can add your registrations with the scope you prefer. Registrations added with the context scope will be cached and reused each time an instance is requested from context. [Scopes page](../core-concepts/scopes) has more information about that.

```typescript
import { Microinjection } from "@microkits/microinjection";

class UserService { 
  // ...
}

const container = Microinjection.getDefaultContainer();

container.register("UserService").asClass(UserService).inContextScope();
```

## Create a middleware

```typescript 
import { Microinjection } from "@microkits/microinjection";

app.use((req, res, next) => {
  const container = Microinjection.getDefaultContainer();
  req.context = container.createContext();
  next();
});
```

## Use in your routes

```typescript 
app.get("/test", (req, res) => {
  // In each request a different instance of UserService will 
  // be returned, but in the same context, the instance 
  // of UserService will also remain the same.
  const service = req.context.resolve("UserService");
})
```
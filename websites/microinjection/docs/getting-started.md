Microinjection is available as a package on NPM.

To install and save in your package.json dependencies, run the following command:

Install with **npm**:
```sh
npm install @microkits/microinjection
```

Install with **yarn**:
```sh
yarn add @microkits/microinjection
```

## Basic usage

Containers are the main components of Microinjection. The first step to start using Microinjection is to [getting a container](core-concepts/containers.md#getting-a-container).

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();
```

With an instance of the `Container` in hand, you can add your [Registrations](core-concepts/registrations.md).

```typescript
class Cat {
  speak() {
    console.log("meooow!")
  }
}

class CatOwner {
  cat: Cat;
}

container.register("Cat").asClass(Cat);
container.register("CatOwner").asClass(CatOwner, {
  properties: [{
    name: "cat",
    inject: "Cat"
  }]
});
```

Now, you can request that the `Container` resolve a `Registration` for you. It will also resolve all necessary dependencies.

```typescript
// Container will inject an instance of Cat on resolved CatOwner.
const owner = container.resolve<CatOwner>("CatOwner");

owner.cat.speak();
// logs "meooow!" to the console
```
---
title: Frequently Asked Questions
---

### Do Microinjection supports custom scopes?

Not at the time. Many of the users who requested this feature have Java or C# experience. The scope options available already give you a lot of flexibility. Using singleton instances in Node.js is also perfectly acceptable, unlike other languages, because Node.js doesn't follow the request/response Multi-Threaded Stateless Model in which every request is processed by a separate thread.

### Can I provide runtime values during resolve?

Not at the moment, but you could use factories, or register the value in the container so that it can be used during resolution. This is an interesting use case that we may support in the future.

### Can I register the container instance in itself?

I don't know why you would do that, but yes, it should be supported.

### How can I use two isolated containers?

You can just create two containers and register what you need in each one.

```typescript 
import { Microinjection } from "@microkits/microinjection";

const container1 = Microinjection.createContainer();
const container2 = Microinjection.createContainer();
```

### Is possible to override a existing cached registration?

Not at the moment, but it's something we can implement in the future.

### It is possible to inject two different implementations for the same property?

Well, not so simple, but you can use child containers to register the correct instance you need and perform the resolution through it.

```typescript 
import { Microinjection } from "@microkits/microinjection";

class Pet {}

// Cat is a Pet
class Cat extends Pet {}

// Dog also is a Pet
class Dog extends Pet {}

// A person has a Pet
class Person {
  pet: Pet;
}

const container = Microinjection.createContainer();
const petAsCatContainer = container.createChildContainer();
const petAsDogContainer = container.createChildContainer();

container.register("Person").asClass(Person, {
  properties: [{
    name: "pet",
    inject: "Pet"
  }]
});

petAsCatContainer.register("Pet").asClass(Cat);
petAsDogContainer.register("Pet").asClass(Dog);

// So, we get person: 
const personWithCat = petAsCatContainer.resolve("Person");
const personWithDog = petAsDogContainer.resolve("Person");

// Check pet instances: 
console.log(personWithCat.pet instance of Cat); // true
console.log(personWithDog.pet instance of Dog); // true

```

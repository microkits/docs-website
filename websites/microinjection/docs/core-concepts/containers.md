---
title: Containers
---

Containers are the main components of Microinjection. It knows how to instantiate and configure other objects, knows their relationship to other objects in the project, and does the dependency injection for you. This allows you to centrally manage all the (inter)dependencies of your project and, more importantly, makes it possible to change/simulate one or more of them without having to edit a bunch of places in your code.

To learn how to add, resolve or remove registrations from a container, check the [Registrations page](registrations).

## Container Hierarchy

Microinjection works with a hierarchy of containers, this allows you to create complex container structures, according to your needs.

When you try to resolve a dependency using a container, the container tries to satisfy that dependency with its own registrations. If the container does not have a registration capable of resolving that dependency, it will search recursively in its parent container, until it finds a container that has a registration capable of resolving the dependency or run out of ancestors.

Sibling containers (containers with the same parent) do not share registrations with each other. 

## Getting a Container

The recommendation for simple use cases is to get a singleton container, shared by the entire application using `Microinjection.getDefaultContainer()` helper. You can use this helper function whenever you need an instance of the container: 

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.getDefaultContainer();
```

:::note
Be careful, not use a container instance directly into your classes to request the dependencies they need. This is a common anti-pattern called Service Locator. Instead, register in the container all the dependencies the class needs and ask the container for an instance of the class using `container.resolve()`
:::


If you need to have multiple containers that have different sets of registrations, you can create containers using `Microinjection.createContainer()`. Each created container will be able to resolve registrations from the default container too, but not be able to resolve registrations from each other:

```typescript
import { Microinjection } from "@microkits/microinjection";

const container = Microinjection.createContainer();
```

## Creating a child container

Is possible to create a container with a parent, by passing a container to `Microinjection.createContainer()` function or directly from a container instance by invoking `container.createChildContainer()`.

Each of the child containers can have independent registrations, but if a registration is absent in the child container at resolution, the registration will be getted from the parent. 

```typescript
import { Microinjection } from "@microkits/microinjection";

// container has default container as parent
const container = Microinjection.createContainer();

// child1 and child2 are child of container
const child1 = Microinjection.createContainer(container);
const child2 = Microinjection.createContainer(container);

// child3 will be child of container too
const child3 = container.createChildContainer();
```

In the example above, `child1`, `child2` and `child3` has `container` as parent. 
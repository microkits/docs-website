---
title: Overview
---

**Microinjection** aims to make development easier and faster by helping you write testable, loosely coupled, and maintainable applications.

Microinjection is a dependency injection written entirely in **TypeScript**, but supports **JavaScript** as well.

## Dependency Injection

Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC). Using DI, we move the creation and binding of the dependent objects outside of the class that depends on them.

DI Container is a thing that knows how to create and configure an instance of a class and its dependent objects.

## Features

- Property Injection
- Constructor Injection
- Multiple DI containers
- Registering and resolving dependencies hierarchically
- Singleton, Transient, and Context scopes
- Circular dependencies
- Out-of-the-box support for injecting values, factories and classes.

# Numu Component Lib V2

This repository contains the Numu Component Library V2. It is a collection of reusable components that can be used to build web applications. The components are divided into two parts;

1. **Core Components**: These are components core to the product for example campaign form or campaign card, etc. They are bigger and more complex components which maintain their own states and side effects.

2. **UI Components**: These are atomic UI components which are essentially the building blocks of the product. For example, button, input, etc.

The repository is built with ReactJS and bundled with Vite. It is written in TypeScript and uses TailwindCSS (mostly) for styling.

All the components Core and UI are deployed on Bit Dev. You can find the components [here](https://bit.cloud/numudev). The components are published as packages and can be installed in any project using npm or yarn.

# Bit Dev 

## Organization

1. Organization:              numudev
2. Workspace:                 component-lib-v2 
3. Scope:                     
   1. core components:        core                   
   2. ui components:          ui

## Commmands

### Create a new component

```bash
bit create react {COMPONENT_NAME} --default-scope {core|ui} --path {src/{core|ui}/{|atom,components,forms,tables,typography}}
```

* react 
  * This is the name of the bit dev template to create a React based UI component. 
* --default-scope 
  * This flag is used to specify the scope of the component. 
  * There are two scopes namely, core and ui. 
  * One of the scopes should always be specified. 
* --path
  * This flag is used to specify where, in the code, the component should be created.
  * Do **NOT** use this flag when scope is **core**.
  * The values for the **ui** scope are as follows:
    * atom
    * components
    * forms
    * tables
    * typography

### Remove a component (from local repo)

```bash
bit remove {COMPONENT_NAME}
```

### Remove a component (from remote)

```bash
bit delete {COMPONENT_NAME}
```

### Export your component

```bash
bit status
bit tag -m {MESSAGE} --build
bit export
```

1. First run `bit status` to see the components that are staged for export.
   1. If there are any errors you will need to fix them before you can export the component.
2. Run the bit tag command to tag the components for export.
   1. The `-m` flag is used to specify a message for the tag.
   2. The `--build` flag is used to build the components before tagging them. It will show you any errors which need to be fixed before the components can be exported to bit dev. 
3. Run the bit export command to export the components to bit dev.
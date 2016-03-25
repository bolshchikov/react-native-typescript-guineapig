# React-Native + Typescript + Redux Guineapig (POC)

## 1. Why TypeScript and not Flow?
Static typing is great no matter what people say. It helps reasnoning about the application, which object are passing around. 
It also help to avoid minor mistakes of inconsistency when you are trying to trnsform domain objects to DTO.
However TypeScript also provides a very reach ecosystem of type definitions 
for thousands of libraries by [DefinitelyTyped](http://definitelytyped.org/tsd/).

## 2. Module system
```
|-android
|-ios
|-src
  |-images
  |-modules
    |-[firstModuleName]
      |-[firstModuleName]ActionTypes.ts
      |-[firstModuleName]Actions.ts
      |-[firstModuleName]Model.ts
      |-[firstModuleName]Reducer.ts
    |-[secondModuleName]  
    |-index.ts
  |-screens
  |-typings
  |-index.tsx
  |-tsconfig.json
|-index.ios.js
|-tsd.json
|-gulpfile.js
```

## Credits
* [@mrpatiwi](https://github.com/mrpatiwi) for initial gulp file

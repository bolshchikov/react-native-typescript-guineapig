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

## How does it work?
Pretty staright forward. When you run `npm run start` command, `gulp` compiles the `ts` files and then runs `concurrently` `gulp watch` and `react-native start` commands in the same terminal. `gulp` file compiles code to `app` folder mimicking the same structure as in `src` folder. The main `index.ios.js` simply imports the main component from the `app` folder instead of `src`.

## Credits
* [@mrpatiwi](https://github.com/mrpatiwi) for initial gulp file

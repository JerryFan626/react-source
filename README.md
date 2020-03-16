# React 源码探究

简易实现了以下库的源码

`react`、`react-dom`

`history`、`react-router-dom`

`redux`、`react-redux`

目录结构:

```
src
 ├── react
 │   ├── index.js
 │   ├── ReactElement.js
 │   ├── ReactBaseClasses.js
 │   └── ReactContext.js
 ├── react-dom
 │   └── index.js
 ├── history
 │   ├── createBrowserHistory.js
 │   └── index.js
 ├── react-router-dom
 │   ├── Link.js
 │   ├── BrowserRouter.js
 │   ├── index.js
 │   ├── HashRouter.js
 │   ├── Propmt.js
 │   ├── withRouter.js
 │   ├── Route.js
 │   ├── NavLink.js
 │   ├── NavLink.css
 │   ├── Redirect.js
 │   ├── Switch.js
 │   └── RouterContext.js
 ├── redux
 │   ├── index.js
 │   ├── applyMiddleware.js
 │   ├── compose.js
 │   ├── combineReducers.js
 │   ├── bindActionCreators.js
 │   └── createStore.js
 ├── react-redux
 │   ├── connect.js
 │   ├── index.js
 │   ├── Provider.js
 │   └── Context.js
 └── redux-middleware
     ├── index.js
     ├── promise.js
     ├── thunk.js
     └── logger.js
```

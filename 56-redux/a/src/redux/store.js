import { createStore } from "redux";

const rootReducer = (state) => {
  return {
    linksRootReducer: [
      { title: 'Google', url: 'http://www.google.com' },
      { title: 'Yahoo', url: 'http://www.yahoo.com' },
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "HKO", url: "https://www.hko.gov.hk" },
      { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
    ],
    Users: [
        { username: "alex", description: "Alex Cheung"},
        { username: "peter", description: "Peter Pan"},
        { username: "tom", description: "Tom Corbin"},
        { username: "john", description: "John Wick"},
        { username: "xccelerate", description: "Xccelerate HK"},
    ]
  }
};

const store = createStore(
rootReducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
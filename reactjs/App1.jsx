import React from "react"
import { render } from "react-dom"
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

let finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
// let reducer = combineReducers(reducers)
// let store = finalCreateStore(reducer)


class App1 extends React.Component {
	
	render () {
		return (
			<div>TEST</div>
			)
	}
}

render(<App1/>, document.getElementById('App1'))
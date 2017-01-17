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
import * as reducers from "./reducers"
import BlogpostContainer from "./containers/BlogpostContainer"
import ReleaseContainer from "./containers/ReleaseContainer"

let finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)


class App1 extends React.Component {

	renderBlogposts () {
		return (
			<Provider store={store}>
				<BlogpostContainer />
			</Provider>
			)
	}

	renderReleases () {
		return (
			<Provider store={store}>
				<ReleaseContainer />
			</Provider>
			)
	}
	
	render () {
		return (
			<div>
				{this.renderBlogposts()}
				{this.renderReleases()}
			</div>
			)
	}
}

render(<App1/>, document.getElementById('App1'))
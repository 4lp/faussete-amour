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

const styles = {
	left: {
		textAlign: "left",
		width: "33%",
	},
	center: {
		width: "33%",
	},
	right: {
		textAlign: "right",
		width: "33%",
	}
}

class App1 extends React.Component {

	renderSoundcloud () {
		let source = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/130545701&amp;" +
			"auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;" +
			"show_reposts=false&amp;visual=true"
		return (
			<iframe 
			width="50%" 
			height="450" 
			scrolling="no" 
			frameBorder="no" 
			src= {source}
			></iframe>
			)
	}

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

	renderMain () {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container fluid">
						<div style={styles.left} className="col-md-4">
							<h3 style={styles.left}>link1</h3>
							<h3 style={styles.left}>link2</h3>
							<div className="clearfix"></div>
						</div>
						<div style={styles.center} className="col-md-4">
							<h1 className="text-center">FA</h1>
						</div>
						<div style={styles.right} className="col-md-4">
							<h3 style={styles.right}>link3</h3>
							<h3 style={styles.right}>link4</h3>
							<div className="clearfix"></div>
						</div>
					</div>
				</nav>
				{this.renderBlogposts()}
				{this.renderReleases()}
				{this.renderSoundcloud()}
			</div>
			)
	}
	
	render () {
		return (
			<div>
				{this.renderMain()}
			</div>
			)
	}
}

render(<App1/>, document.getElementById('App1'))
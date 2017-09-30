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
		maxHeight: "inherit",
		maxWidth: "inherit"

	},
	center: {
		maxHeight: "inherit",
		maxWidth: "inherit"

	},
	right: {
		textAlign: "right",
		maxHeight: "inherit",
		maxWidth: "inherit"

	},
	height: {
		maxHeight: "inherit",
		maxWidth: "inherit"
	}
}

class App1 extends React.Component {
	constructor(props){
    super(props);
      	this.state = {
        	page: "main",
        	release: "main",
      	}
  	}

  	setMain () {
  		this.setState({ page: "main" })
  	}

  	setReleases () {
  		this.setState({ page: "releases" })
  	}

  	setBlog () {
  		this.setState({ page: "blog" })
  	}

  	setReleaseMain () {
  		this.setState({ release: "main" })
  	}

  	setRelease () {
  		this.setState({ release: "" })
  	}

	renderSoundcloud (width) {
		let source = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/130545701&amp;" +
			"auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;" +
			"show_reposts=false&amp;visual=true"
		return (
			<iframe 
			width={width} 
			height="500" 
			scrolling="no" 
			frameBorder="no" 
			src= {source}
			></iframe>
			)
	}

	renderBandcamp () {
		return (
			<iframe 
			style={{width: "50%", height: "500px",}} 
			src="https://bandcamp.com/EmbeddedPlayer/album=497716961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
			seamless>
				<a href="http://phftapes.bandcamp.com/album/limit-breaks">limit breaks by Pirates of the High Frequencies</a>
			</iframe>
		)
	}

	renderAllBlogposts () {
		document.body.classList.remove('releases');
		return (
			<Provider store={store}>
				<BlogpostContainer count="all"/>
			</Provider>
			)
	}

	renderSomeBlogposts () {
		return (
			<Provider store={store}>
				<BlogpostContainer count="02"/>
			</Provider>
			)
	}

	renderReleases () {
		document.body.classList.add('releases');
		return (
			<Provider store={store}>
				<ReleaseContainer page={this.state.release} setRelease={this.setRelease.bind(this)} setReleaseMain={this.setReleaseMain.bind(this)}/>
			</Provider>
			)
	}

	renderMain () {
		document.body.classList.remove('releases');
		if (1){
			return (
				<div>
					{this.renderSoundcloud("100%")}
					<br />
					{this.renderSomeBlogposts()}
				</div>
				)
		} else {
			return (
					<div>
						{this.renderSoundcloud("50%")}
						{this.renderBandcamp()}
						<br />
						{this.renderSomeBlogposts()}
					</div>
					)
		}
	}
	
	render () {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top" style={{maxHeight: "100px"}}>
					<div className="container fluid" style={styles.height}>
						<div style={styles.left} className="col-md-4">
							<h5 style={styles.left}>link1</h5>
							<h5 style={styles.left}>link2</h5>
						</div>
						<div style={styles.center} className="col-md-4">
							<img src="../static/images/FA2.png" style={styles.height}/>
						</div>
						<div style={styles.right} className="col-md-4">
							<h5 style={styles.right} onClick={() => this.setMain()}>Home</h5>
							<h5 style={styles.right} onClick={() => this.setBlog()}>Blog</h5>
							<h5 style={styles.right} onClick={() => {this.setReleases(), this.setReleaseMain()}}>Releases</h5>
						</div>
					</div>
				</nav>
				<a id="releaseAnchor"></a>
				{this.state.page === "main" ? this.renderMain() : null}
				{this.state.page === "blog" ? this.renderAllBlogposts() : null}
				{this.state.page === "releases" ? this.renderReleases() : null}
				<div><img src="../static/images/spin_cube.gif" className="center footer-image"/></div>
			</div>
			)
	}
}

render(<App1/>, document.getElementById('App1'))

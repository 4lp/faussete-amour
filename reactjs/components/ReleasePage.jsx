import React from "react"

export default class ReleaseContent extends React.Component {

	componentDidMount(){
		let script = this.props.optionalContent
		eval(script);
	}

	renderDefault () {
		return (
			<div>{this.props.selectedRelease}</div>
		)
	}

	renderOptional () {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.optionalHTML}}></div>
		)
	}
	
	render () {
		return (
			<div>{this.props.optionalHTML === "" ? this.renderDefault() : this.renderOptional()}</div>
		)
	}
}

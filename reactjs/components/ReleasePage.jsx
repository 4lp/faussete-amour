import React from "react"

export default class ReleaseContent extends React.Component {
	renderDefault () {
		return (
			<div>{this.props.selectedRelease}</div>
		)
	}

	renderOptional () {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.optionalContent}}></div>
		)
	}
	
	render () {
		return (
			<div>{this.props.optionalContent === "" ? this.renderDefault() : this.renderOptional()}</div>
		)
	}
}
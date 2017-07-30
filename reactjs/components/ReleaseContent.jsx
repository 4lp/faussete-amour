import React from "react"
import ReleasePage from "./ReleasePage"

export default class ReleaseContent extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          selectedRelease: "none",
          optionalContent: "",
	  optionalHTML: "",
        }
    }

  setSelectedRelease (release) {
    this.setState({ selectedRelease: release})
  }

  setOptionalContent (content) {
    this.setState({ optionalContent: content })
  }

  setOptionalHTML (content) {
    this.setState({ optionalHTML: content })
  }

  renderSelectedRelease () {
    return (
      <ReleasePage selectedRelease = {this.state.selectedRelease} optionalContent = {this.state.optionalContent} optionalHTML = {this.state.optionalHTML} />
    )
  }

  renderMain () {
    let {content} = this.props
    let contentNodes = []
    let i = 0
    content.forEach((item, index) => {
      let node = (
        <div className="col-sm-4 text-center" >
          <img src={item.image} onClick={() => {this.props.setRelease(), this.setSelectedRelease(item.name), this.setOptionalContent(item.optional_content), this.setOptionalHTML(item.optional_html)}}/>
          <p>{item.name}</p>
        </div>
      )
      i++
      contentNodes.push(node)
      if (i % 3 == 0) {
        contentNodes.push(<div className="clearfix"></div>)
      }
    })

    return (
      <div>{contentNodes}</div>
    )
  }

  render () {
    return (
      <div>
        {this.props.page === "main" ? this.renderMain() : this.renderSelectedRelease()}
      </div>
    )
  }
}

import React from "react"

export default class BlogpostContent extends React.Component {
  render() {
    let {content} = this.props
    let contentNodes = []
    content.forEach((item, index) => {
      let node = (
        <div>
        {item.name}
        {item.date}
        {item.content}
        </div>
      )
      contentNodes.push(node)
    })

    return (
      <div>{contentNodes}</div>
    )
  }
}
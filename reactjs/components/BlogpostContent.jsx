import React from "react"

export default class BlogpostContent extends React.Component {
  render() {
    let {content} = this.props
    let contentNodes = []
    let count = ""
    let i = 0
    if (this.props.count === "all") {
      count = 1000
    } else {
      count = parseInt(this.props.count, 10)
    }
    content.forEach((item, index) => {
      if (i < count) {
        let node = (
          <div className="blogpost">
          <h3>{item.name}</h3>
          <p><em>{item.date}</em></p>
          <p>{item.content}</p>
          </div>
        )
        contentNodes.push(node)
      }
      i++
    })
    

    return (
      <div>{contentNodes}</div>
    )
  }
}

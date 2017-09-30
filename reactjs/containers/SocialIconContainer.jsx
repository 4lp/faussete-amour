import React from "react"
import * as iconActions from '../actions/iconActions'
import SocialIconContent from '../components/SocialIconContent'
import { connect } from "react-redux"

@connect(state => ({
  icon: state.icon
}))

export default class SocialIconContainer extends React.Component {
  componentDidMount() {
    let {dispatch, icon} = this.props
    if (!icon.isLoadingIcon && icon.content === undefined) {
      dispatch(iconActions.fetchIcon())
    }
  }

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  render() {
    let {icon} = this.props
    if (icon.isLoadingIcon || icon.content === undefined) {
      return this.renderLoading()
    }
    return (
      <div>
        <div className="row">
          {icon.content !== undefined &&
		  <SocialIconContent content={icon.content} />
          }
        </div>
      </div>
    )
  }
}

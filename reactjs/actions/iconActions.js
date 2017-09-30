import { request } from "../utils"

export const ICON = "ICON"
export const ICON_SUCCESS = "ICON_SUCCESS"
export const ICON_ERROR400 = "ICON_ERROR400"
export const ICON_ERROR500 = "ICON_ERROR500"
export const ICON_FAILURE = "ICON_FAILURE"

export function fetchIcon() {
  return function (dispatch) {
    let url = "http://localhost:8000/social_icon/"
    dispatch({type: ICON})
    return request(
      url, {},
      (json) => { dispatch({type: ICON_SUCCESS, res: json}) },
      (json) => { dispatch({type: ICON_ERROR400, res: json}) },
      (res) => { dispatch({type: ICON_ERROR500, res: res}) },
      (ex) => { dispatch({type: ICON_FAILURE, error: ex}) },
    )
  }
}

import * as iconActions from "../actions/iconActions"

const initialState = {
	isLoadingIcon: false,
	icon: undefined,
}

export default function icon(state=initialState, action={}) {
  switch (action.type) {
  case iconActions.ICON:
    return {...state, isLoadingIcon: true}
  case iconActions.ICON_SUCCESS:
    return {...state, isLoadingIcon: false, content: action.res}
  case iconActions.ICON_ERROR400:
  case iconActions.ICON_ERROR500:
  case iconActions.ICON_FAILURE:
    return {...state, isLoadingIcon: false}
  default:
    return state
  }
}

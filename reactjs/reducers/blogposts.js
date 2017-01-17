import * as blogpostActions from "../actions/blogpostActions"

const initialState = {
	isLoadingBlogpost: false,
	blogpost: undefined,
}

export default function blogpost(state=initialState, action={}) {
  switch (action.type) {
  case blogpostActions.BLOGPOST:
    return {...state, isLoadingTeams: true}
  case blogpostActions.BLOGPOST_SUCCESS:
    return {...state, isLoadingBlogpost: false, content: action.res}
  case blogpostActions.BLOGPOST_ERROR400:
  case blogpostActions.BLOGPOST_ERROR500:
  case blogpostActions.BLOGPOST_FAILURE:
    return {...state, isLoadingBLOGPOST: false}
  default:
    return state
  }
}
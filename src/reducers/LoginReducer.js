export default function LoginReducer(state={
  userId: '',
  displayName: '',
  fullName: '',
  loggedIn: false
}, action) {
  switch(action.type) {
    case 'RECEIVE_USER_DATA':
      return action.data
    default:
      return state;
  }
}

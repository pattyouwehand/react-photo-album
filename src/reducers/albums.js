export default (state = [], action = {}) => {
  if (action.type === "HELLO_WORLD") {
    return "hello world"
  }
  return state
}
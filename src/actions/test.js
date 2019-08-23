export function helloWorld(firstName, lastName) {
  console.log("IM RUNNING")
  return {
    type: 'HELLO_WORLD',
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  }
}
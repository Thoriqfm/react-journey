// Conditional rendering

import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="John Doe" />
      <UserGreeting isLoggedIn={true} />
    </>
  )
}

export default App;

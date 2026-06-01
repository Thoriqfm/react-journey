import Student from "./Student";

function App() {
  return (
    <>
      <Student name="John Doe" age={30} isStudent={true} />
      <Student name="Patrick Jane" age={25} isStudent={false} />
      <Student name="Spongebob Squarepants" age={50} isStudent={true} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student/>
    </>
  )
}

export default App;

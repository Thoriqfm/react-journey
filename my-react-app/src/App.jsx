import Button from "./Button";

const ButtonBold = (props) => {
  // Destructuring props with default values
  const {children = "Button", variant = "bg-slate-700"} = props;

  return (
    <button 
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} 
      type="submit"
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center App">
      <div className="flex gap-x-3">
        <Button text="Login" />
        <ButtonBold variant="bg-red-500">Buy now!</ButtonBold>
        <ButtonBold/>
      </div>
    </div>
  );
}

export default App;

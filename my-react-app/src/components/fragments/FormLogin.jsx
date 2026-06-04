import Button from "../elements/Button/Button";
import InputForm from "../elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="* * * * * * * *"
        />
      </div>
      <Button clasname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;

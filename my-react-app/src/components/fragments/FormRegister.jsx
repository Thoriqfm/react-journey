import Button from "../elements/Button/Button";
import InputForm from "../elements/Input/Index";

const FormRegister = () => {
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
      <div className="mb-6">
        <InputForm
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="* * * * * * * *"
        />
      </div>
      <Button clasname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;

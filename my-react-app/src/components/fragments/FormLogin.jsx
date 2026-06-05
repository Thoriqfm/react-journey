import Button from "../elements/Button/Button";
import InputForm from "../elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;

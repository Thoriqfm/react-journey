import AuthLayouts from "../components/layout/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;

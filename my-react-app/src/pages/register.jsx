import AuthLayouts from "../components/layout/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;

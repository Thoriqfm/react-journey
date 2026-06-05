import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center App">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="font-bold text-blue-500 hover:underline"
          >
            {type === "login" ? "Register here" : "Log in"}
          </Link>
        </p>
        <Navigation type={type} />
      </div>
    </div>
  );
};

// Component
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-blue-500 hover:underline"
        >
          Register here
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;

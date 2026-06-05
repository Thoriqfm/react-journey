const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-slate-400 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 focus:text-slate-900 focus:border-blue-500 focus:outline-none"
      placeholder={placeholder}
      name={name}
      id={name}
    ></input>
  );
};

export default Input;

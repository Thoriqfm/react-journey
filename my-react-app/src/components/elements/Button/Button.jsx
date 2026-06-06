export default function Button(props) {
  const {
    children = "Button",
    classname = "bg-slate-700",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white cursor-pointer hover:opacity-80 transition-opacity duration-300`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

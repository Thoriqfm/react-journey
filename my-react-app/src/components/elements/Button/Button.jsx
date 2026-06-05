export default function Button(props) {
  const { children = "Button", classname = "bg-slate-700" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white cursor-pointer hover:opacity-80 transition-opacity duration-300`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default function Button(props) {
  const { children = "Button", clasname = "bg-slate-700" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${clasname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
}

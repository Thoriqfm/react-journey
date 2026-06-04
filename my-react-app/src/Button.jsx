export default function Button(props) {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-slate-700 bg-black text-white"
      type="submit"
    >
      {props.text}
    </button>
  );
}

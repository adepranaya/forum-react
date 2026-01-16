export default function Button({ onClick, children }) {
  return (
    <button
      className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

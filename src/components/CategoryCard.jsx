export default function CategoryCard({
  icon,
  label,
  active = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex w-full items-center justify-center gap-2
        rounded-xl px-4 py-3 text-2xl font-medium
        backdrop-blur-md transition-all

        ${
          active
            ? "bg-white/80 text-gray-900 shadow"
            : "bg-white/20 text-white hover:bg-white/30"
        }
      `}
    >
      <span className="text-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        {icon}
      </span>

      <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        {label}
      </span>
    </button>
  );
}

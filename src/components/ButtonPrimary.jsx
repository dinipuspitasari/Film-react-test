export default function ButtonPrimary({
  size = "sm",
  bgColor = "bg-black",
  iconColor = "text-white",
  onClick,
}) {
  const sizes = {
    sm: "h-6 w-6 text-[10px]",
    md: "h-8 w-8 text-xs",
    lg: "h-10 w-10 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition hover:scale-105 ${bgColor} ${sizes[size]}`}
    >
      <span className={iconColor}>▶</span>
    </button>
  );
}

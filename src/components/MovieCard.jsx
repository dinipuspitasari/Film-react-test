import ButtonPrimary from "./ButtonPrimary";

export default function MovieCard({
  title,
  image,
  bgColor = "#2b5f8f",
  label = "View Details",
}) {
  return (
    <div
      className="relative flex h-56 w-full overflow-hidden rounded-2xl shadow-2xl"
      style={{ backgroundColor: bgColor }}>
      {/* LEFT CONTENT */}
      <div className="relative z-20 flex w-1/2 flex-col justify-between p-6 text-white">
        <h2 className="text-3xl font-semibold leading-snug">{title}</h2>

        <div className="flex items-center gap-2">
          <ButtonPrimary size="sm" />
          <span className="text-xs opacity-90">{label}</span>
        </div>
      </div>

      {/* IMAGE WRAPPER */}
      <div className="absolute right-0 top-0 z-10 h-full w-1/2">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-75" />

        {/* LEFT EDGE FADE */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16"
          style={{
            background: `linear-gradient(to right, ${bgColor} 0%, transparent 100%)`,
          }}
        />

        {/* RIGHT EDGE FADE */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16"
          style={{
            background: `linear-gradient(to left, ${bgColor} 0%, transparent 5%)`,
          }}
        />
      </div>
    </div>
  );
}

export default function MoviePosterCard({
  title,
  poster,
  rating,
  year,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer space-y-2"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={poster}
          alt={title}
          className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="truncate text-sm font-semibold text-heading">
          {title}
        </h3>

        <div className="mt-1 flex items-center gap-2 text-xs text-body">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}

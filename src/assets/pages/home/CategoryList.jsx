import {
  HiFire,
  HiFilm,
  HiHeart,
  HiSparkles,
  HiMoon,
  HiStar,
} from "react-icons/hi";
import CategoryCard from "../../../components/CategoryCard";

export default function CategoryList({ active, onChange }) {
  const categories = [
    { key: "trending", label: "Trending", icon: <HiFire /> },
    { key: "action", label: "Action", icon: <HiFilm /> },
    { key: "romance", label: "Romance", icon: <HiHeart /> },
    { key: "animation", label: "Animation", icon: <HiSparkles /> },
    { key: "horror", label: "Horror", icon: <HiMoon /> },
    { key: "special", label: "Special", icon: <HiStar /> },
  ];

  return (
    <div className="mx-auto mt-6 w-full max-w-screen-xl px-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.key}
            icon={cat.icon}
            label={cat.label}
            active={active === cat.key}
            onClick={() => onChange(cat.key)}
          />
        ))}
      </div>
    </div>
  );
}

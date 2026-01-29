import { cn } from "@/lib/utils";
import { Tv, Trophy, Film, Sparkles, Newspaper, Baby } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Todos": <Tv className="w-4 h-4" />,
  "Canais Abertos": <Tv className="w-4 h-4" />,
  "Esportes": <Trophy className="w-4 h-4" />,
  "Filmes e Séries": <Film className="w-4 h-4" />,
  "Variedades": <Sparkles className="w-4 h-4" />,
  "Notícias": <Newspaper className="w-4 h-4" />,
  "Infantil": <Baby className="w-4 h-4" />,
};

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)]"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {categoryIcons[category]}
          {category}
        </button>
      ))}
    </div>
  );
}

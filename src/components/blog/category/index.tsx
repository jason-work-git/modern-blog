interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: "All", count: 20 },
  { name: "Technology", count: 3 },
  { name: "Lifestyle", count: 2 },
  { name: "Travel", count: 5 },
  { name: "Health", count: 9 },
  { name: "Culture", count: 1 },
];

// BlogCategory Component
interface BlogCategoryProps {
  // categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({
  // categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-15 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`hover:bg-dark hover:border-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white ${
            selectedCategory === category.name
              ? "bg-dark border-dark text-white"
              : "bg-gray border-gray-3 text-dark"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
};
export default BlogCategory;

import useOutsideClick from "../hooks/useOutsideClick";
import CategoryListModal from "./CategoryListModal";

const CategorySidebar = ({categories}) => {
    const {isMenuOpen, setIsMenuOpen, menuRef} = useOutsideClick();

    return (
        <div className=" relative flex gap-4 p-4 rounded-lg bg-zinc-100 dark:bg-gray-900 overflow-x-auto">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className="cursor-pointer py-4 px-8 text-sm font-medium flex items-center gap-3 transition-all bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md whitespace-nowrap"
                >
                    {category.name}
                </button>
            ))}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:underline">
                Ver más
            </button>
            {isMenuOpen && (
                <CategoryListModal
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                    categories={categories}
                />
            )}
        </div>
    );
};

export default CategorySidebar;

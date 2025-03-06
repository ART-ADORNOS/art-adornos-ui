import { FaArrowLeft, FaTachometerAlt, FaBook, FaStickyNote, FaStar } from 'react-icons/fa';

const FilterSidebar = () => {
    return (
        <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 h-9 rounded-md px-3 text-sm font-medium flex items-center gap-2 transition-all">
                <FaArrowLeft className="text-red-500" />
                <span>Back</span>
            </button>
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 h-9 rounded-md px-3 text-sm font-medium flex items-center gap-2 transition-all">
                <FaTachometerAlt className="text-blue-500" />
                <span>Dashboard</span>
            </button>
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 h-9 rounded-md px-3 text-sm font-medium flex items-center gap-2 transition-all">
                <FaBook className="text-green-500" />
                <span>Articles</span>
            </button>
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 h-9 rounded-md px-3 text-sm font-medium flex items-center gap-2 transition-all">
                <FaStickyNote className="text-yellow-500" />
                <span>Notes</span>
            </button>
            <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 h-9 rounded-md px-3 text-sm font-medium flex items-center gap-2 transition-all">
                <FaStar className="text-purple-500" />
                <span>Reviews</span>
            </button>
        </div>
    );
};

export default FilterSidebar;

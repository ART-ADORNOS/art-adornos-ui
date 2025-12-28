import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 md:p-6 flex justify-center">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link
          to="/terms"
          className="underline font-medium text-gray-600 hover:text-gray-800"
        >
          Términos y condiciones
        </Link>
      </span>
    </footer>
  );
}

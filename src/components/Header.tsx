export default function Header() {
  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#"
          className="flex items-center text-primary hover:text-secondary"
        >
          <svg
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="text-2xl font-bold">MyBrand</span>
        </a>

        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className="hidden md:hidden bg-gray-50 border-t border-gray-200 transition-height duration-300 ease-in-out"
      >
        <ul className="px-4 py-2">
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

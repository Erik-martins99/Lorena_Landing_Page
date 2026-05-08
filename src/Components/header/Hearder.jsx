import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header
      className="w-full 
                 h-16 md:h-20
                 bg-gradient-to-r from-white to-neutral-200
                 flex items-center justify-between
                 px-4 md:px-8"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/headerLogoNew.png"
          alt="Logo"
          className="h-8 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Navegação */}
      <nav className="flex items-center gap-x-4 md:gap-x-8">
        <Link
          to="/"
          className="text-xs md:text-xl font-bold hover:underline"
        >
          HOME
        </Link>

        <Link
          to="/sobre"
          className="text-xs md:text-xl hover:underline"
        >
          SOBRE MIM
        </Link>

        <Link
          to="/planos"
          className="text-xs md:text-xl hover:underline"
        >
          PLANOS
        </Link>
      </nav>
    </header>
  )
}

export default Header

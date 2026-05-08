import { IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import AttachEmailIcon from "@mui/icons-material/AttachEmail"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const Footer = () => {
  return (
    <footer className="w-full bg-stone-800 px-4 md:px-12 py-10">
      <div
        className="max-w-7xl mx-auto 
                   flex flex-col md:flex-row 
                   items-center md:items-start 
                   justify-between gap-10"
      >
        {/* Links institucionais */}
        <nav className="flex flex-col gap-2 text-gray-100 text-center md:text-left">
          <Link to="/sobre" className="text-sm md:text-lg hover:underline">
            Sobre Lorena (Lo Freitas)
          </Link>
          <Link to="/planos" className="text-sm md:text-lg hover:underline">
            Conheça os Planos
          </Link>
          <a href="https://www.instagram.com/bylofreitas/" className="text-sm md:text-lg hover:underline">
            Portfólio
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5571987211395&text&type=phone_number&app_absent=0" className="text-sm md:text-lg hover:underline">
            Orçamento Personalizado
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5571987211395&text&type=phone_number&app_absent=0" className="text-sm md:text-lg hover:underline">
            Fale Conosco
          </a>
        </nav>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/LogWhite.png"
            alt="Logo Lorena Freitas"
            className="h-16 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Redes sociais + copyright */}
        <div className="flex flex-col text-gray-100 text-center md:text-left gap-4">
          <h3 className="text-sm md:text-base font-medium">
            Mídias Sociais
          </h3>

          <div className="flex justify-center md:justify-start gap-2">
            <IconButton
              component="a"
              href="https://www.instagram.com/bylofreitas/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.youtube.com/@bylofreitas"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <YouTubeIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=byllofreitas@gmail.com"
              sx={{ color: "white" }}
            >
              <AttachEmailIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://api.whatsapp.com/send/?phone=5571987211395&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <WhatsAppIcon />
            </IconButton>
          </div>

          <p className="text-xs md:text-sm max-w-xs">
            Copyright © 2025 LORENA FREITAS
            <br />
            Todos os direitos reservados
          </p>

          <p className="text-xs md:text-sm">
            CNPJ 60.691.729/0001-83
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

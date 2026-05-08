import Button from '@mui/material/Button';

import Header from "../Components/header/Hearder"
import { Link } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Gallery from '../Components/gallery/Gallery';

const Home = () => {
  return (
    <>
      <Header />

      <section
        className="w-full min-h-[85vh] md:min-h-[700px]
                   bg-[url(/about1.png)]
                   bg-cover bg-center bg-no-repeat
                   flex items-center"
      >
        <div className="w-full flex flex-col items-center px-4 text-yellow-300">
          <h1 className="font-serif 
                         text-3xl sm:text-4xl md:text-5xl 
                         text-center">
            Fotos como filme
          </h1>

          <h3
            className="font-sans 
                       max-w-xl md:max-w-2xl 
                       text-center 
                       text-base sm:text-lg md:text-xl
                       mt-4"
          >
            Aqui nós transformamos a sua história em uma narrativa única
            <br className="hidden sm:block" />
            e te colocamos como protagonista do filme da sua vida
          </h3>
        </div>
      </section>
      <section
      className="w-full min-h-[100vh] md:min-h-[700px]
                   bg-[url(/cine6.jpg)]
                   bg-cover bg-center bg-no-repeat
                   flex flex-row items-center">
        <Gallery />
      </section>    
      <section
        className="w-full min-h-[100vh] md:min-h-[700px]
                   bg-[url(/Lore3.png)]
                   bg-cover bg-center bg-no-repeat
                   flex items-center pt-5"
      >
        <div className="w-full flex flex-col items-start mx-2 md:mx-20 px-4 text-yellow-300">
          <h3
            className="font-sans 
                       max-w-[200px] md:max-w-[600px]
                       text-base sm:text-lg md:text-2xl
                       mt-4"
          >
            A fotografia entrou em minha vida
            antes mesmo do meu nascimento,
            assim como o empreendedorismo já
            estava presente em minhas origens. 
          </h3>
          <h3
            className="font-sans 
                       max-w-[200px] md:max-w-[600px] 
                       text-base sm:text-lg md:text-2xl
                       mt-4"
          >
            Te convido a conhecer um pouco
            mais sobre minha história pessoal e
            trajetória profissional.
          </h3>
          <div className='flex flex-col mt-5'>
            <Button variant="contained" color='warning'
            component={Link} to="/sobre">Clique aqui</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home

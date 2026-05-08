import { Link } from "react-router-dom"
import Footer from "../Components/footer/Footer"
import Header from "../Components/header/Hearder"
import { Button } from "@mui/material"

const Sobre = () => {
    return(
        <>
            <Header />
            <div className="min-h-[100vh] md:min-h-[700px] w-full
                            flex flex-col flex-colitems-center items-center">
                <img
                src="/Logo.png"
                alt="Logo"
                className="h-[250px] md:h-[300px] w-auto object-contain"
                />

                <h3
                    className="p-5 font-sans 
                        max-w-xl md:max-w-4xl 
                        text-center 
                        text-base sm:text-lg md:text-xl
                        mt-4"
                    >
                        Criada por uma mãe "correria" e um pai artesão
                        autodidata que não só me ensinou a manusear uma
                        câmera logo cedo, mas me mostrou que empreender
                        exige mais do que desejo, mas propósito. Vim de
                        uma família humilde, mas que nunca abaixou a 
                        cabeça e sempre correu atrás. Trago em mim toda 
                        essa força, coloco a arte na fotografia, o 
                        propósito na jornada empreendedora, a criatividade
                        nas produções e nas consultorias tudo que aprendi
                        durante 7 anos de experiência em marketing e
                        gestão intencional.
                </h3>
            </div>
            <section
                className="w-full min-h-[100vh] md:min-h-[700px]
                        bg-[url(/about1.png)]
                        bg-cover bg-center bg-no-repeat
                        flex items-center pt-5"
            >
            <div className="w-full flex flex-col items-start mx-2 md:mx-20 px-4 text-gray-200">
                <h3
                    className="font-sans 
                            max-w-[200px] md:max-w-[600px]
                            text-base sm:text-lg md:text-2xl
                            mt-4"
                >
                    Hoje, cada clique é uma combinação de arte e estratégia,
                    buscando não apenas capturar imagens, mas contar histórias. 
                    Acredito firmemente que cada fotografia tem o poder de emocionar, 
                    inspirar e conectar pessoas, e é essa crença que me impulsiona a
                    continuar explorando novas maneiras de compartilhar minha visão do mundo. 
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
                    href="https://www.youtube.com/playlist?list=PL5UsYDbsTRqTOm_PHC2-CDemlTTQoHSrl">
                        História Completa
                    </Button>
                </div>
            </div>
            </section>
             <div className="min-h-[100vh] md:min-h-[700px] w-full
                            flex flex-col flex-colitems-center items-center">

                <h3
                    className="p-5 font-sans 
                        max-w-xl md:max-w-4xl 
                        text-center 
                        text-base sm:text-lg md:text-2xl
                        mt-4"
                    >                 
                    Anos de modelagem, vida acadêmica, trabalhos no marketing, 
                    comercializar fotografia mobile quando poucos valorizavam 
                    o celular como equipamento, até o dia em que comprei minha 
                    primeira câmera profissional — uma Canon T7 — com o dinheiro 
                    que juntei trabalhando como social media.
                </h3>

                <h3
                    className="p-5 font-sans 
                        max-w-xl md:max-w-4xl 
                        text-center 
                        text-base sm:text-lg md:text-2xl
                        mt-4"
                    >                 
                    Hoje, minha fotografia carrega um olhar documental, 
                    uma pitada cinematográfica, texturas dos anos 90 e 
                    muito afeto. Com o mesmo cuidado que meu pai tinha 
                    ao apertar o botão do obturador da Yashika. 
                </h3>

                <h3
                    className="p-5 font-sans 
                        max-w-xl md:max-w-4xl 
                        font-bold
                        text-center 
                        text-base sm:text-lg md:text-4xl
                        mt-4"
                    >                 
                    Porque mais do que fotos, 
                    eu coleciono histórias.
                </h3>
            </div>
            <Footer />
        </>
    )
}

export default Sobre
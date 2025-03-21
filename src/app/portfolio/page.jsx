"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Lopes Consultoria de Imoveis",
    desc: "Empresa Brasileira de Consultoria de Imoveis, Foi onde comecei a programar, clipper e c++",    
    img: "/assets/empresa1.png",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Usinas Itamarati",
    desc: "Usina de alcool e acucar, desenvolvi diversos sistemas por 10 anos",
    img: "/assets/empresa2.png",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-purple-300 to-red-300",
    title: "CRK Bank Business",
    desc: "Atuando no desenvolvimento de sistemas .net para Bancos Internacionais (asp.net, c#, db2, sqlserver e oracle).",
    img: "/assets/empresa3.png",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Duralex Sistemas",
    desc: "Desenvolvimnto de sistema para prefeituras, atendendo todas as secretarias (diversas tecnologias)",
    img: "/assets/empresa5.png",
    link: "https://lama.dev",
  },

  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Ferramentas Stanley",
    desc: "Sistema de controle da qualidade ISO 9001, atuando em projetos de melhoria continua",
    img: "/assets/empresa6.png",
    link: "https://lama.dev",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Ituran",
    desc: "Desenvolvimento de sistemas para rastreamento de veiculos (.net, angular, oracle e sqlserver)",
    img: "/assets/empresa7.png",
    link: "https://lama.dev",
  },
  {
    id: 7,
    color: "from-purple-300 to-red-300",
    title: "BSI",
    desc: "Consultoria de sistemas bancarios, atuei em projetos banco Itau com (.net, angular sqlserver)",
    img: "/assets/empresa8.png",
    link: "https://lama.dev",
  },
  
  
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Hermes Pardini",
    desc: "Desenvolvimento de sistemas para rastreamento de veiculos, (.net core, reactjs, Intersystems Cache)",
    img: "/assets/empresa9.png",
    link: "https://lama.dev",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",
    title: "*",
    desc: "Consultoria de sistemas bancarios, atuei em projetos banco Itau",
    img: "/assets/empresa1.png",
    link: "https://lama.dev",
  },
  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-center">
          Meus trabalhos
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="top-10 flex flex-col gap-18 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 flex">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl">Voce tem um projeto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Quero te contratar  
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-48 md:h-48 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
          Contratar!
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

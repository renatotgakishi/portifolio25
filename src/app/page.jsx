"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero2.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Projetando o amanhã.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          "Olá! Seja bem-vindo ao meu espaço digital. Aqui compartilho minha paixão por .NET e desenvolvimento de sistemas, mostrando um pouco do que tenho construído e aprendido ao longo da minha jornada. Espero que goste!"
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">           
                Serviços              
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

};

export default Homepage;

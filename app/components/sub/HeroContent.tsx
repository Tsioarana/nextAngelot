"use client";

import Image from "next/image";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] md:text-base">
            Développeur Web
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Tsiferaniaina
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Angelot </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='tet-bg text-gray-400 my-5 max-w-[600px]'
        >
          &apos;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corporis repudiandae saepe quo laboriosam voluptatem officiis temporibus hic, quasi ullam vel, neque veritatis provident ad consectetur minima! Voluptatibus, dignissimos ex.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Telecharger CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full flex justify-center items-center mt-5 lg:mt-0"
      >
        <Image src='/zah.png' alt='icons' height={300} width={300} className="object-contain lg:h-[550px] lg:w-[550px]" />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;

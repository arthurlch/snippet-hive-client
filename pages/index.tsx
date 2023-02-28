import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from './_layout';
import { Code, CodeBlock, dracula } from "react-code-blocks";


const inter = Inter({ subsets: ['latin'] });


function HeroCodeBlock(props :any) {
  return (
    <CodeBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      theme={dracula}
      codeBlock
    />
  );
}


export default function Home({ code, language, showLineNumbers, startingLineNumber }) {
  return (
    <Layout>
      <main>
        <div className='hero min-h-screen bg-base-200'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <HeroCodeBlock />
            <div>
              <h1 className='text-5xl font-bold'><span className='text-pink-400	
'>Simple</span> & <span className='text-pink-400'>Useful</span> snippet manager</h1>
              <p className='py-6'>
              "Unleash your coding potential with our centralized snippet manager - store, share, and access your code snippets securely from anywhere!"
              </p>
              <button className='btn btn-primary'>Get Started For Free</button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

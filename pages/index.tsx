import Head from 'next/head';
import Layout from './_layout';
import { CodeBlock, dracula } from 'react-code-blocks';
import { FiCode } from 'react-icons/fi';

interface CodeBlock {
  language: string;
  showLineNumbers: boolean;
  text: string;
}

function CodeBlockForHero(props: CodeBlock) {
  const { language, showLineNumbers, text } = props;

  return (
    <CodeBlock
      text={text}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}


function Hero() {
  const blockLanguage = "html"
  const showLineNumbers = false 
  const blockText = "<h1>Your Snippet here<h1>"
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <CodeBlockForHero 
          language={blockLanguage}
          showLineNumbers={showLineNumbers}
          text={blockText}
        />
        <div>
          <h1 className='text-5xl font-bold'><span className='text-pink-400	'>Simple</span> & <span className='text-pink-400'>Useful</span> snippet manager</h1>              <p className='py-6'>
          "Unleash your coding potential with our centralized snippet manager - store, share, and access your code snippets securely from anywhere!"
          </p>
        </div>
      </div>
    </div>
  ) 
}

function FeatureCards() {
  return (
    <div  className='container mx-auto ml-auto' >
      <div className='gap-6 columns-1'>

      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <div>
          <FiCode />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>Any Language</h2>
          <p>You can simply paste any snippet from any common languages.</p>
        </div>
      </div>

      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <div>
          <FiCode />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>Highlight</h2>
          <p>Automaticaly highlight your code.</p>
        </div>
      </div>

      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <div>
          <FiCode />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>Easy Search</h2>
          <p>Search your snippet easily using filter.</p>
        </div>
      </div>

      </div>
    </div>
    
  );
}

export default function Home() {

  return (
    <Layout>
      <main>
        <Hero/>
        <FeatureCards />
      </main>
    </Layout>
  );
}

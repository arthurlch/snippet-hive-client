import Layout from './_layout';
import { CodeBlock, dracula } from 'react-code-blocks';
import { FiCode, FiSearch } from 'react-icons/fi';
import { AiOutlineHighlight } from 'react-icons/ai';

interface CodeBlock {
  language: string;
  showLineNumbers: boolean;
  text: string;
  className?: string;
}

function CodeBlockForHero(props: CodeBlock) {
  const { language, showLineNumbers, text, className } = props;

  return (
    <div>
      <CodeBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
    </div>
  );
}

function Hero() {
  const blockLanguage = 'javascript';
  const showLineNumbers = false;
  const blockText = `console.log("rust >> JavaScript")`;

  return (
    <div className='h-screen columns-1 hero '>
      <div className='hero-content flex-col flex-wrap lg:flex-row-reverse'>
        <div className='py-2 my-2'>
          <h1 className='text-5xl font-bold'>
            <span className='text-primary	'>Simple</span> &{' '}
            <span className='text-accent'>Useful</span> snippet manager
          </h1>
          <p className='py-6'>
            Unleash your coding potential with our centralized snippet manager - store, share, and
            access your code snippets securely from anywhere!
          </p>
        </div>
        <div className='flex justify-center items-center 	'>
          <CodeBlockForHero
            language={blockLanguage}
            showLineNumbers={showLineNumbers}
            text={blockText}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className=' mx-auto ml-auto bg-neutral-focus columns-1'>
      <div className=' flex flex-wrap justify-center items-center gap-6 columns-1 py-28 my-23'>
        <div className=' py-4 card card-compact w-96 bg-base-100 shadow-xl 80 md:h-40 lg:h-40'>
          <div className='flex flex-wrap justify-center items-center'>
            <FiCode style={{ fontSize: '1.5rem' }} />
          </div>
          <div className='card-body'>
            <h2 className='card-title text-secondary'>Any Language</h2>
            <p>You can simply paste any snippet from any common languages.</p>
          </div>
        </div>

        <div className=' py-4 card card-compact w-96 shadow-xl 80 md:h-40 lg:h-40 bg-base-100'>
          <div className='flex flex flex-wrap justify-center items-center '>
            <AiOutlineHighlight style={{ fontSize: '1.5rem' }} />
          </div>
          <div className='card-body'>
            <h2 className='card-title text-accent'>Highlight</h2>
            <p>Automaticaly highlight your code.</p>
          </div>
        </div>

        <div className='py-4 card card-compact w-96  shadow-xl 80 md:h-40 lg:h-40 bg-base-100'>
          <div className='flex flex-wrap justify-center items-center'>
            <FiSearch style={{ fontSize: '1.5rem' }} />
          </div>
          <div className='card-body'>
            <h2 className='card-title text-primary'>Easy Search</h2>
            <p>Search your snippet easily using filter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function CallToAct() {
  return (
    <div className='py-10 flex-col flex-wrap justify-content-center'>
      <div className=' justify-center'>
        <div className='flex py-3 flex-col items-center'>
          <h4 className='text-center text-3xl'>Try for free today</h4>
        </div>
        <div className='flex flex-col items-center pb-5'>
          <p className='text-center'>
            Join thousands of developers who rely on SnippetHive every day.
          </p>
        </div>
        <div className='flex py-8 flex-col items-center'>
          <button className=' flex-col btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
            <a href='/signup'>SIGNUP NOW</a>
          </button>
        </div>
      </div>
      <div className='divider'></div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureCards />
      <CallToAct />
    </Layout>
  );
}

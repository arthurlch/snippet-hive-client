import FeaturesGrid from '@/common/components/Feature/Feature';
import Hero from '@/common/components/Hero/Hero';

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <FeaturesGrid
        title="Streamline your coding with our free, simple snippet manager for developers."
        description="Supercharge your programming journey with our platform. We've got you covered with support for a variety of modern programming languages, and we're continuously adding more. Stay at the forefront of technology as we expand our language offerings, empowering you to bring your ideas to fruition. Embrace a future where your programming potential knows no limits."
      />
    </>
  );
}

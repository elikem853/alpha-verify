import React from 'react';
import FeatureOverview from '~~/components/alpha-verify/FeatureOverview';
import Footer from '~~/components/alpha-verify/Footer';
import HeroSection from '~~/components/alpha-verify/HeroSection';
import HowItWorks from '~~/components/alpha-verify/HowItWorks';
import Navbar from '~~/components/alpha-verify/Navbar';
import ValueProposition from '~~/components/alpha-verify/ValuePreposition';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeatureOverview />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Page;

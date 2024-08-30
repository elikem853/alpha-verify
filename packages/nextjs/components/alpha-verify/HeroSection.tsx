import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, GraduationCap, Shield, Link } from 'lucide-react'

const HeroSection = () => {
  return (
    <div><div className="bg-background container mb-28 pt-16 mx-auto  flex items-center justify-between">
    <div className=" mx-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight lg:text-7xl text-foreground">
            Secure Your Academic Achievements on the Blockchain
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your graduate certificates into verifiable NFTs, ensuring the authenticity and permanence of your academic accomplishments.
          </p>
          {/* <ul className="space-y-2">
            {["Tamper-proof certificates", "Easy verification for employers", "Lifetime access to your credentials"].map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>{feature}</span>
              </li>
            ))}
          </ul> */}
          <div className="flex space-x-4">
            {/* <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            {/* <Button size="lg" variant="outline">
              Learn More
            </Button> */}

            <button className='flex items-center rounded-full hover:border border-blue-400  p-5 bg-black'>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className='flex items-center px-8 rounded-full hover:border border-black  p-5 bg-white text-black'>
                Learn more
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
        <Image
              src="/assets/metaverse.jpg"
              alt="Graduate with blockchain certificate"
              className="relative w-full z-10 rounded-lg shadow-xl"
              width={600}
              height={600}
              
            />
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default HeroSection;
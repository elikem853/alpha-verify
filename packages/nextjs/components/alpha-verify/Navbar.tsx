import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  // { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  // { label: 'Contact', href: '#' },  
];

const Navbar = () => {
  return (
    <div className='container mt-12 flex mx-auto justify-between items-center'>
      <div>

        <Link href={"/home"}>
          <Image src='/assets/Verified-removebg-preview.png' 
            height={50} 
            width={150} 
            alt='logo'
          />
        </Link>
        
      </div>

      <div className="flex">
        <ul className='flex justify-between items-center gap-10 p-4'>
          {navLinks.map(({ label, href }, index) => (
            <li key={index}>
              <Link href={href} className='text-xl'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
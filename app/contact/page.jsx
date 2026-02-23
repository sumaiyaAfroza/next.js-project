


import { BottomCTA } from '@/components/contact/BottomCTA';
import { ContactFormSection } from '@/components/contact/ContactFromSection';
import { FAQSection } from '@/components/contact/FAQSection';
import { HeroSection } from '@/components/contact/HeroSection';
import { InfoCards } from '@/components/contact/InfoCards';
import React from 'react';

const page = () => {
   return (
    <main className="font-sans">
      <HeroSection/>
      <InfoCards/>
      <ContactFormSection/>
      <FAQSection/>
      <BottomCTA/>
    </main>
  );
};

export default page;



import { CTASection } from '@/components/about/CTASection';
import HeroSection from '@/components/about/HeroSection';
import StatesSection from '@/components/about/StatesSection';
import { Story } from '@/components/about/Story';
import { TeamSection } from '@/components/about/TeamSection';
import { TimelineSection } from '@/components/about/TimelineSection';
import { Value } from '@/components/about/Value';


export default function AboutPage() {
  return (
    <main>
     <HeroSection/>
      <StatesSection/>
     <Story/>
      <TimelineSection/>
      <Value/>
     <TeamSection/>
      <CTASection/>
    </main>
  );
}
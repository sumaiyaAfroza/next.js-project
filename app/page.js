'use client'
import React from 'react'
import {Hero} from "@/components/Hero";
import GalleryGrid from '@/components/gallery/Gallery';
import AwardSection, { AwardCard } from '@/components/Awards/AwardSection';

export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <GalleryGrid/>
           
            <AwardSection/>
        </div>
    )
}

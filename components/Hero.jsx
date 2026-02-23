import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = ({
                  badge = "🍴 Delicious Recipes Await",
                  heading = "Discover Culinary Creations",
                  description = "Explore a collection of mouth-watering recipes crafted with love. Copy and share these dishes to elevate your cooking game!",
                  buttons = {
                      primary: {
                          text: "Browse Recipes",
                          url: "#recipes",
                      },
                      secondary: {
                          text: "Share Your Dish",
                          url: "#submit-recipe",
                      },
                  },
                  image = {
                      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
                      alt: "Delicious plate of food showcasing fresh ingredients",
                  },
              }) => {
    return (
        <section className="py-32 bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 mb-4">
                                {badge}
                                <ArrowUpRight className="ml-2 size-4" />
                            </div>
                        )}
                        <h1 className="my-6 text-pretty text-4xl font-bold text-orange-900 lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-orange-700 mb-8 max-w-xl lg:text-xl">
                            {description}
                        </p>

                        {/* Buttons */}
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4 ml-2" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Right Image */}
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-96 w-full rounded-md object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };






// import React from "react";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
//
// // import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
//
// const Hero = ({
//                    badge = "✨ Your Website Builder",
//                    heading = "Blocks Built With Shadcn & Tailwind",
//                    description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
//                    buttons = {
//                        primary: {
//                            text: "Discover all components",
//                            // url: "https://www.shadcnblocks.com",
//                        },
//                        secondary: {
//                            text: "View on GitHub",
//                            // url: "https://www.shadcnblocks.com",
//                        },
//                    },
//                    image = {
//                        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
//                        alt: "Hero section demo image showing interface components",
//                    },
//                }) => {
//     return (
//         <section className="py-32">
//             <div className="container">
//                 <div className="grid items-center gap-8 lg:grid-cols-2">
//                     {/* Left Content */}
//                     <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//                         {/*{badge && (*/}
//                         {/*    <Badge variant="outline">*/}
//                         {/*        {badge}*/}
//                         {/*        <ArrowUpRight className="ml-2 size-4" />*/}
//                         {/*    </Badge>*/}
//                         {/*)}*/}
//                         <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
//                             {heading}
//                         </h1>
//                         <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
//                             {description}
//                         </p>
//
//                         {/* Buttons */}
//                         <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
//                             {buttons.primary && (
//                                 <Button asChild className="w-full sm:w-auto">
//                                     <a href={buttons.primary.url}>{buttons.primary.text}</a>
//                                 </Button>
//                             )}
//                             {buttons.secondary && (
//                                 <Button asChild variant="outline" className="w-full sm:w-auto">
//                                     <a href={buttons.secondary.url}>
//                                         {buttons.secondary.text}
//                                         <ArrowRight className="size-4 ml-2" />
//                                     </a>
//                                 </Button>
//                             )}
//                         </div>
//                     </div>
//
//                     {/* Right Image */}
//                     <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="max-h-96 w-full rounded-md object-cover"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export { Hero };

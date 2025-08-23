import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 bg-gradient-to-t from-orange-900 to-amber-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-orange-300">Taste Haven</h2>
                        <p className="text-orange-200 text-sm">
                            Savor the joy of cooking with our delicious recipes and culinary tips.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-100">Quick Links</h3>
                        <ul className="space-y-2 text-orange-200 text-sm">
                            <li>
                                <a href="#recipes" className="hover:text-orange-400 transition-colors">
                                    Recipes
                                </a>
                            </li>
                            <li>
                                <a href="#categories" className="hover:text-orange-400 transition-colors">
                                    Cuisine Categories
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="hover:text-orange-400 transition-colors">
                                    Food Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-orange-400 transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-100">Resources</h3>
                        <ul className="space-y-2 text-orange-200 text-sm">
                            <li>
                                <a href="#cooking-tips" className="hover:text-orange-400 transition-colors">
                                    Cooking Tips
                                </a>
                            </li>
                            <li>
                                <a href="#meal-plans" className="hover:text-orange-400 transition-colors">
                                    Meal Plans
                                </a>
                            </li>
                            <li>
                                <a href="#community" className="hover:text-orange-400 transition-colors">
                                    Foodie Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-100">Stay Hungry</h3>
                        <p className="text-orange-200 text-sm mb-4">
                            Subscribe for weekly recipes and cooking inspiration.
                        </p>
                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-l-md bg-amber-800 border border-amber-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-orange-800 text-center text-orange-200 text-sm">
                    <p>&copy; {new Date().getFullYear()} Taste Haven. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };


// import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//
// const defaultSections = [
//     {
//         title: "Product",
//         links: [
//             { name: "Overview", href: "#" },
//             { name: "Pricing", href: "#" },
//             { name: "Marketplace", href: "#" },
//             { name: "Features", href: "#" },
//         ],
//     },
//     {
//         title: "Company",
//         links: [
//             { name: "About", href: "#" },
//             { name: "Team", href: "#" },
//             { name: "Blog", href: "#" },
//             { name: "Careers", href: "#" },
//         ],
//     },
//     {
//         title: "Resources",
//         links: [
//             { name: "Help", href: "#" },
//             { name: "Sales", href: "#" },
//             { name: "Advertise", href: "#" },
//             { name: "Privacy", href: "#" },
//         ],
//     },
// ];
//
// const defaultSocialLinks = [
//     { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
//     { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
//     { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
//     { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
// ];
//
// const defaultLegalLinks = [
//     { name: "Terms and Conditions", href: "#" },
//     { name: "Privacy Policy", href: "#" },
// ];
//
// const Footer = ({
//                      logo = {
//                          url: "https://www.shadcnblocks.com",
//                          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
//                          alt: "logo",
//                          title: "Shadcnblocks.com",
//                      },
//                      sections = defaultSections,
//                      description = "A collection of components for your startup business or side project.",
//                      socialLinks = defaultSocialLinks,
//                      copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
//                      legalLinks = defaultLegalLinks,
//                  }) => {
//     return (
//         <section className="py-32">
//             <div className="container">
//                 <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
//                     {/* Left Side */}
//                     <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
//                         {/* Logo */}
//                         <div className="flex items-center gap-2 lg:justify-start">
//                             <a href={logo.url}>
//                                 <img
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     title={logo.title}
//                                     className="h-8"
//                                 />
//                             </a>
//                             <h2 className="text-xl font-semibold">{logo.title}</h2>
//                         </div>
//
//                         {/* Description */}
//                         <p className="text-muted-foreground max-w-[70%] text-sm">
//                             {description}
//                         </p>
//
//                         {/* Social Links */}
//                         <ul className="text-muted-foreground flex items-center space-x-6">
//                             {socialLinks.map((social, idx) => (
//                                 <li key={idx} className="hover:text-primary font-medium">
//                                     <a href={social.href} aria-label={social.label}>
//                                         {social.icon}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//
//                     {/* Right Side Sections */}
//                     <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
//                         {sections.map((section, sectionIdx) => (
//                             <div key={sectionIdx}>
//                                 <h3 className="mb-4 font-bold">{section.title}</h3>
//                                 <ul className="text-muted-foreground space-y-3 text-sm">
//                                     {section.links.map((link, linkIdx) => (
//                                         <li
//                                             key={linkIdx}
//                                             className="hover:text-primary font-medium"
//                                         >
//                                             <a href={link.href}>{link.name}</a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//
//                 {/* Footer Bottom */}
//                 <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
//                     <p className="order-2 lg:order-1">{copyright}</p>
//                     <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
//                         {legalLinks.map((link, idx) => (
//                             <li key={idx} className="hover:text-primary">
//                                 <a href={link.href}> {link.name}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export { Footer };

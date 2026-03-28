// import React from 'react'
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Briefcase, Check, Search, TrendingUp } from "lucide-react";
// import Link from "next/link";
// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-secondary">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-5 py-16 md:py-24 relative">
//         <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
//           {/* Left Content */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
//               <TrendingUp size={16} className="text-blue-600" />
//               <span className="text-sm font-medium">
//                 #1 Job Platform in India
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Find Your Dream Job at{" "}
//               <span className="inline-block">
//                 Hire
//                 <span className="text-red-500">Heaven</span>
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
//               Connect with top employers and discover opportunities that match
//               your skills. Whether you&apos;re a job seeker or recruiter,
//               we&apos;ve got you covered with powerful tools and seamless
//               experience.
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">10k+</p>
//                 <p className="text-sm opacity-70">Active Jobs</p>
//               </div>

//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">5k+</p>
//                 <p className="text-sm opacity-70">Companies</p>
//               </div>

//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">50k+</p>
//                 <p className="text-sm opacity-70">Active Jobs</p>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4 flex-wrap justify-center md:justify-start">
//               <Link href="/jobs">
//                 <Button
//                   size="lg"
//                   className="text-base px-8 h-12 gap-2 group transition-all"
//                 >
//                   <Search size={18} />
//                   Browse Jobs{" "}
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </Button>
//               </Link>

//               <Link href="/about">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="text-base px-8 h-12 gap-2"
//                 >
//                   <Briefcase size={18} />
//                   Learn More
//                 </Button>
//               </Link>
//             </div>
//             <div className="flex items-center gap-3 text-sm opacity-60 pt-4 flex-wrap">
//               <div className="flex items-center gap-1">
//                 <Check size={14} className="text-green-500" />
//                 <span>Free to use</span>
//               </div>

//               <span>•</span>

//               <div className="flex items-center gap-1">
//                 <Check size={14} className="text-green-500" />
//                 <span>Verified employers</span>
//               </div>

//               <span>•</span>

//               <div className="flex items-center gap-1">
//                 <Check size={14} className="text-green-500" />
//                 <span>Secure platform</span>
//               </div>


//               {/* image section */}


              
//             </div>
            
            
            
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Check,
  Search,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background blur */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-5 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
              <TrendingUp size={16} className="text-blue-600" />
              <span className="text-sm font-medium">
                #1 Job Platform in India
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Dream Job at{" "}
              <span className="inline-block">
                Job
                <span className="text-red-500">Sync</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
              Connect with top employers and discover opportunities that match
              your skills. Whether you&apos;re a job seeker or recruiter, we&apos;ve got
              you covered with powerful tools and seamless experience.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-blue-600">10k+</p>
                <p className="text-sm opacity-70">Active Jobs</p>
              </div>

              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-blue-600">5k+</p>
                <p className="text-sm opacity-70">Companies</p>
              </div>

              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-blue-600">50k+</p>
                <p className="text-sm opacity-70">Active Jobs</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Link href="/jobs">
                <Button
                  size="lg"
                  className="text-base px-8 h-12 gap-2 group transition-all"
                >
                  <Search size={18} />
                  Browse Jobs
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-12 gap-2"
                >
                  <Briefcase size={18} />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 text-sm opacity-60 pt-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Check size={14} className="text-green-500" />
                <span>Free to use</span>
              </div>

              <span>•</span>

              <div className="flex items-center gap-1">
                <Check size={14} className="text-green-500" />
                <span>Verified employers</span>
              </div>

              <span>•</span>

              <div className="flex items-center gap-1">
                <Check size={14} className="text-green-500" />
                <span>Secure platform</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative">
            <div className="relative group">

              <div className="absolute -inset-4 bg-blue-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src="/image.png"
                  className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  alt="Hero"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
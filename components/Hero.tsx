import { Button } from "@/components/ui/button";
import { FlipWordsDemo } from "./FlipWordsDemo";
import Link from "next/link";  // Added Link import for internal navigation

export default function HeroSection() {
  return (
    <div
      className="min-h-screen lg:relative bg-cover bg-center"
      style={{ backgroundImage: "url('/wedding3.jpeg')" }}
    >

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-14 lg:pt-32 relative z-10">
        <div className="text-center">
          <p className="text-white text-base md:text-lg mt-20 ">
            Planning For A Dream Party?
          </p>
          <div className="text-xl  flex items-center justify-center text-white">
            <FlipWordsDemo />
          </div>
        </div>

        {/* Image Gallery with hover effects */}
        {/* <div className="relative max-w-5xl mx-auto m-2 h-[300px] md:h-[400px] md:mb-12">
          <div className="absolute left-0 top-0 w-1/2 md:w-1/3 transform -rotate-6 md:-rotate-12 hover:z-20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image
              src="/t2.jpeg"
              alt={"Party tent setup"}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>
          <div className="absolute left-1/4 md:left-1/3 top-0 w-1/2 md:w-1/3 z-10 hover:z-20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image
              src="/t0.jpeg"
              alt="Party tent with balloons"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>
          <div className="absolute right-0 top-0 w-1/2 md:w-1/3 transform rotate-6 md:rotate-12 hover:z-20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image
              src="/t4.jpeg"
              alt="Party tent interior"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>
        </div> */}

        {/* Description and CTAs */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-300 text-base md:text-lg mb-8 mt-8">
            We provide all the essentials for your event – from setup to cleanup. Full-service catering and rentals for weddings and parties in Guwahati, Jorhat, and Dibrugarh.
          </p>
          <div className="lg:flex gap-4 flex lg:flex-row items-center justify-center md:space-y-0 md:space-x-4 pb-6">
            <Link href="/">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white px-7 md:px-8 py-6 md:py-6 text-base md:text-lg lg:w-full md:w-auto transition-all duration-300">
                Explore More
              </Button>
            </Link>
            <Link href="/">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#1a1a1a] px-9 md:px-8 py-6 md:py-6 text-base md:text-lg lg:w-full md:w-auto transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Clock, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image'; // Import Image from Next.js

export default function OfficeSection() {
  return (
    <section className="relative bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-white/80">
            Our Offices
          </h2>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium">
              Come see us for an in-depth,
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic">
              discussion with one of our wedding specialists!
            </p>
          </div>
        </div>

        {/* City Selection */}
        <div className="flex justify-center mb-12">
          <Button 
            variant="outline" 
            className="bg-white text-[#3d2c1f] hover:bg-white/90 hover:text-[#3d2c1f] text-lg px-8 py-6"
          >
            Guwahati
          </Button>
        </div>

        {/* Office Details */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Office Image */}
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/o1.jpg"
              alt="Meragi office interior"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              width={800}  // Adjust width for optimal rendering
              height={400} // Adjust height based on your design needs
            />
          </div>

          {/* Office Information */}
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white/80 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl text-white/80 mb-3">Address</h3>
                  <p className="text-lg leading-relaxed">
                    House No. 123, Near City Center Mall,
                    <br />
                    GS Road, Guwahati,
                    <br />
                    Assam 781005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-white/80 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl text-white/80 mb-3">Timings</h3>
                  <p className="text-lg">10 am–7 pm</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-[#3d2c1f] hover:bg-white/90 hover:text-[#3d2c1f] text-lg px-8"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

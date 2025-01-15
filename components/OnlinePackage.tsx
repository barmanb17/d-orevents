import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from 'next/image';  

export default function OnlinePackage() {
  return (
    <section className="py-20 mx-10 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-purple-600">Online Package</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium italic text-purple-600 font-serif">
                Get a customized package
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
                customized to your design preferences and budget.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Get Started
            </Button>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl p-6 shadow-xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex gap-4 border-b pb-4">
                  <span className="text-[#1a1a1a] font-medium">Haldi</span>
                  <span className="text-gray-500">Reception</span>
                  <span className="text-gray-500">Wedding</span>
                  <span className="text-gray-500">Mehendi</span>
                </div>

                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Wedding decoration package"
                    className="w-full h-64 object-cover"
                    width={500}  
                    height={300} 
                  />
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-2">
                    <Image
                      src="/p3.png"
                      alt="Package thumbnail 1"
                      className="w-full aspect-square object-cover rounded"
                      width={200}  
                      height={200} 
                    />
                    <p className="text-sm text-center mt-2">Catalog 1</p>
                  </Card>
                  <Card className="p-2">
                    <Image
                      src="/p4.png"
                      alt="Package thumbnail 2"
                      className="w-full aspect-square object-cover rounded"
                      width={200}  
                      height={200}
                    />
                    <p className="text-sm text-center mt-2">Catalog 2</p>
                  </Card>
                  <Card className="p-2">
                    <Image
                      src="/p5.png"
                      alt="Package thumbnail 3"
                      className="w-full aspect-square object-cover rounded"
                      width={200}
                      height={200}
                    />
                    <p className="text-sm text-center mt-2">Catalog 3</p>
                  </Card>
                </div>

                {/* Total Package */}
                <div className="bg-purple-600 text-white rounded-xl p-4 flex justify-center items-center font-bold">
                  <span>Enquire Now</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-200 to-purple-100 blur-3xl transform translate-x-8 translate-y-8 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

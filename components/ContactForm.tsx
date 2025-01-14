import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactForm = () => {
  return (
    <form className="w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Your Name" className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
        <Input type="email" placeholder="Your Email" className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
        <Textarea placeholder="Your Message" className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;


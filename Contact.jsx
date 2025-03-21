import React from 'react'

const Contact = () => {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Send Message</button>
              </form>
            </div>
          </div>
        );
      };
export default Contact;
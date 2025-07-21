import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 px-6 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* Left: Form */}
        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question, suggestion, or just want to say hello? Fill out the
            form below and we’ll get back to you soon!
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-gray-100 p-8 sm:p-10 flex flex-col justify-center gap-6">
          <div className="text-lg text-gray-700 flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <span>
              Lagos, Nigeria <br />
              Remote & Global
            </span>
          </div>
          <div className="text-lg text-gray-700 flex items-start gap-4">
            <FaPhoneAlt className="text-blue-600 mt-1" />
            <span>+234 000 000 0000</span>
          </div>
          <div className="text-lg text-gray-700 flex items-start gap-4">
            <FaEnvelope className="text-blue-600 mt-1" />
            <span>contact@yourdomain.com</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

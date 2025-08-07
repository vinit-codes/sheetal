'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: 'Piyush Piroziwala',
    role: 'Founder & CEO',
    img: '/images/team1.jpg', // replace with actual images
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    img: '/images/team2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Operations',
    img: '/images/team3.jpg',
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden text-gray-800 bg-white">
    {/* Hero Section */}
<section className="relative w-full h-[90vh] flex items-center justify-center bg-black text-white">
  <Image
    src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg"
    alt="Background"
    fill
    className="object-cover opacity-40"
    priority
  />
  <div className="relative z-10 text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight"
    >
      About <span className="text-pink-500">Sheetal</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-4 text-lg md:text-2xl"
    >
      Crafting Fashion Excellence Since 2024
    </motion.p>
  </div>
</section>


      {/* Mission */}
      <section className="px-6 md:px-20 lg:px-40 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-semibold">Sheetal</span>, we believe in making high-quality fashion
              accessible to everyone. Our mission is to provide a seamless shopping experience with
              curated collections that blend style, comfort, and affordability — all while staying ahead
              of trends and customer expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Image
    src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg"
    alt="Our Mission"
    width={600}
    height={400}
    className="rounded-xl shadow-lg object-cover"
  />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 lg:px-40">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Quality First',
              desc: 'We maintain the highest standards in our selection, ensuring every piece meets our quality benchmarks.',
              icon: <Sparkles size={36} className="text-pink-500" />,
            },
            {
              title: 'Customer Focus',
              desc: 'Your satisfaction is our priority. From browsing to delivery, we aim to delight at every step.',
              icon: <Sparkles size={36} className="text-pink-500" />,
            },
            {
              title: 'Sustainability',
              desc: 'We practice ethical sourcing and eco-friendly packaging for a better future.',
              icon: <Sparkles size={36} className="text-pink-500" />,
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-start gap-4"
            >
              {val.icon}
              <h3 className="text-xl font-bold">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 lg:px-40 bg-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

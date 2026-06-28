'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Library, BookOpen, Shield, Globe } from 'lucide-react';

const partners = [
  { icon: Library, name: 'FPT Innovation Center' },
  { icon: BookOpen, name: 'EdTech Asia' },
  { icon: Shield, name: 'Vietnam Startup Network' },
  { icon: Globe, name: 'Global Edu Initiative' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Partners() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
        >
          Đồng hành cùng các tổ chức giáo dục hàng đầu
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow border border-slate-100 h-full"
              >
                <Icon className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-blue-900 font-semibold text-center">{partner.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

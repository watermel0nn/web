'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: "10,000+",
    label: "Giờ học & Trải nghiệm",
  },
  {
    value: "03+",
    label: "Dự án EdTech đang ươm tạo",
  },
  {
    value: "50+",
    label: "Đối tác trường học & Chuyên gia",
  },
  {
    value: "100%",
    label: "Cam kết đồng hành cùng gia đình",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-blue-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
                {stat.value}
              </h3>
              <p className="text-blue-100 text-lg md:text-xl font-medium max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

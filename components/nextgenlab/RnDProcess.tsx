'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, FlaskConical, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Khám phá vấn đề",
    description: "Nghiên cứu insight phụ huynh/trẻ em.",
    icon: Search,
  },
  {
    id: 2,
    title: "Xây dựng MVP",
    description: "Sản phẩm khả thi tối thiểu để kiểm chứng ý tưởng nhanh chóng.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Thử nghiệm thực tế",
    description: "Đưa vào môi trường giả lập/người dùng đầu tiên.",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Tinh chỉnh & Triển khai",
    description: "Đo lường dữ liệu và hoàn thiện giải pháp.",
    icon: Rocket,
  },
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
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function RnDProcess() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          >
            Đổi mới liên tục với phương pháp Tinh gọn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Cách chúng tôi biến các nghiên cứu tâm lý học trẻ em thành sản phẩm thực tế.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // Create a slight zig-zag effect on desktop by translating Y
              const translateYClass = index % 2 !== 0 ? "lg:translate-y-6" : "lg:-translate-y-6";

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center transition-transform hover:-translate-y-2 ${translateYClass}`}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 text-emerald-600 shadow-inner">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-emerald-600 font-bold text-sm mb-3 tracking-wider uppercase">
                    Bước 0{step.id}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

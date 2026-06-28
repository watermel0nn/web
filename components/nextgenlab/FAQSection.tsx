'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Tầm nhìn dài hạn của lab là gì?',
    answer: 'Chúng tôi hướng tới việc trở thành tổ chức EdTech tiên phong khu vực, tạo ra hệ sinh thái ứng dụng học tập, phát triển kỹ năng sống toàn diện cho trẻ em.',
  },
  {
    question: 'KidzEconomy áp dụng triết lý giáo dục nào?',
    answer: 'KidzEconomy kết hợp phương pháp Gamification và Learning by Doing, giúp trẻ vừa học vừa chơi thông qua các nhiệm vụ thực tế và hệ thống phần thưởng.',
  },
  {
    question: 'Làm sao để hợp tác với NextGenLab?',
    answer: 'Chúng tôi luôn chào đón các quỹ đầu tư, trường học và chuyên gia tâm lý giáo dục. Vui lòng liên hệ qua email partnership@nextgenlab.vn để trao đổi.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center"
        >
          Câu Hỏi Thường Gặp
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-blue-900 text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-900 w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-5 pt-0 text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

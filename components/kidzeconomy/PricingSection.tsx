'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui';
import { CheckCircle2, XCircle } from 'lucide-react';
import Image from 'next/image';

const PRICING_TIERS = [
  {
    name: 'Free',
    target: 'Trải nghiệm các tính năng cơ bản',
    price: '0đ',
    period: 'Trọn đời',
    limit: 'Quản lý 1 bé',
    features: [
      { name: 'Quản lý 1 trẻ', included: true },
      { name: 'Tạo nhiệm vụ cơ bản', included: true },
      { name: 'Hệ thống điểm thưởng', included: true },
      { name: 'Đổi thưởng cơ bản', included: true },
      { name: 'Báo cáo tiến độ chi tiết', included: false },
      { name: 'Hệ thống huy hiệu thành tích', included: false },
      { name: 'Nhiệm vụ lặp lại tự động', included: false },
      { name: 'Thống kê theo tuần và tháng', included: false },
    ],
    buttonText: 'Bắt đầu miễn phí',
    popular: false,
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    btnClass: 'bg-white text-green-700 border-2 border-green-500 hover:bg-green-50',
  },
  {
    name: 'Premium Family',
    target: 'Đầy đủ tính năng cho gia đình hiện đại',
    price: '99.000đ',
    period: '/ tháng',
    limit: 'Quản lý tối đa 2 bé',
    features: [
      { name: 'Quản lý tối đa 2 trẻ', included: true },
      { name: 'Không giới hạn nhiệm vụ', included: true },
      { name: 'Hệ thống điểm thưởng nâng cao', included: true },
      { name: 'Đổi thưởng đa dạng', included: true },
      { name: 'Báo cáo tiến độ chi tiết', included: true },
      { name: 'Hệ thống huy hiệu thành tích', included: true },
      { name: 'Nhiệm vụ lặp lại tự động', included: true },
      { name: 'Thống kê theo tuần và tháng', included: true },
    ],
    buttonText: 'Nâng cấp ngay',
    popular: true,
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    btnClass: 'bg-orange-500 text-white hover:bg-orange-600',
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GIÁ CẢ"
          title={
            <>
              Chọn gói phù hợp với <br className="hidden md:block" />
              <span className="text-orange-500">gia đình bạn</span>
            </>
          }
          description="Bắt đầu miễn phí và nâng cấp khi bạn cần nhiều tính năng hơn để đồng hành cùng 2 bé."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl border-2 ${tier.borderColor} ${tier.color} p-8 flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    ⭐ Phổ biến nhất
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm">{tier.target}</p>
                <div className="mt-6 mb-2">
                  <span className="text-4xl font-black text-slate-800">{tier.price}</span>
                  <span className="text-slate-500 font-medium"> {tier.period}</span>
                </div>
                <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-sm border border-orange-100">
                  {tier.limit}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${tier.btnClass}`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

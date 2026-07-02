'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui';

const VERSIONS = [
  {
    version: 'Version 2.0',
    status: 'Đang phát triển',
    date: 'Sắp ra mắt',
    icon: '🚀',
    color: 'bg-orange-100 text-orange-600',
    dotColor: 'bg-orange-500',
    items: [
      'AI gợi ý nhiệm vụ phù hợp độ tuổi.',
      'Gợi ý phần thưởng phù hợp sở thích.',
      'Dashboard nâng cao cho phụ huynh.'
    ]
  },
  {
    version: 'Version 1.2',
    status: 'Mới nhất',
    date: '05/2024',
    icon: '🎖️',
    color: 'bg-blue-100 text-blue-600',
    dotColor: 'bg-blue-500',
    items: [
      'Hệ thống huy hiệu thành tích.',
      'Nhiệm vụ lặp lại.',
      'Báo cáo theo tuần.'
    ]
  },
  {
    version: 'Version 1.1',
    status: 'Đã phát hành',
    date: '03/2024',
    icon: '⚡',
    color: 'bg-green-100 text-green-600',
    dotColor: 'bg-green-500',
    items: [
      'Thông báo thời gian thực.',
      'Cải thiện giao diện người dùng.',
      'Tối ưu hiệu năng.'
    ]
  },
  {
    version: 'Version 1.0',
    status: 'Khởi đầu',
    date: '01/2024',
    icon: '🎉',
    color: 'bg-purple-100 text-purple-600',
    dotColor: 'bg-purple-500',
    items: [
      'Hệ thống giao nhiệm vụ.',
      'Điểm thưởng cơ bản.',
      'Đổi quà.'
    ]
  }
];

export default function ChangelogSection() {
  return (
    <section id="changelog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CHANGELOG"
          title={
            <>
              Hành trình cải tiến <br className="hidden md:block" />
              <span className="text-orange-500">vì gia đình bạn</span>
            </>
          }
          description="Chúng tôi luôn lắng nghe phản hồi của ba mẹ và không ngừng hoàn thiện KidzEconomy mỗi ngày."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] md:left-[119px] top-4 bottom-4 w-0.5 bg-orange-100" />

          <div className="space-y-12">
            {VERSIONS.map((v, idx) => (
              <motion.div
                key={v.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-6 md:gap-12"
              >
                {/* Date (Desktop) */}
                <div className="hidden md:block w-20 shrink-0 text-right pt-4">
                  <span className="text-sm font-bold text-slate-400">{v.date}</span>
                </div>

                {/* Timeline Node */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-sm z-10 border-4 border-white ${v.color}`}>
                    {v.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-6">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-slate-800">{v.version}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${v.color}`}>
                        {v.status}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {v.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${v.dotColor}`} />
                          <span className="text-slate-600 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

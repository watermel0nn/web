import HeroSection from '@/components/kidzeconomy/HeroSection';
import PainPoints from '@/components/kidzeconomy/PainPoints';
import FeatureShowcase from '@/components/kidzeconomy/FeatureShowcase';
import HowItWorks from '@/components/kidzeconomy/HowItWorks';
import ParentTrust from '@/components/kidzeconomy/ParentTrust';
import EventSection from '@/components/kidzeconomy/EventSection';
import WaitlistCTA from '@/components/kidzeconomy/WaitlistCTA';
import PricingSection from '@/components/kidzeconomy/PricingSection';
import ChangelogSection from '@/components/kidzeconomy/ChangelogSection';

export default function HomePage() {
  return (
    <main className="relative font-nunito text-slate-800">
      {/* ── Funnel Sections (CRO optimized order) ── */}

      {/* 1. AWARENESS: Hook — headline cảm xúc, paint the dream */}
      <HeroSection />

      {/* 2. PROBLEM: Agitate — khuấy đúng nỗi đau phụ huynh */}
      <PainPoints />

      {/* 3. CORE FEATURES: Giải pháp toàn diện */}
      <FeatureShowcase />

      {/* 4. SOLUTION: Show the way — 3 bước đơn giản */}
      <HowItWorks />

      {/* 5. TRUST: Sự an tâm của phụ huynh */}
      <ParentTrust />

      {/* 6. PRICING: Bảng giá */}
      <PricingSection />

      {/* 7. CHANGELOG: Lịch sử cập nhật */}
      <ChangelogSection />

      {/* 8. CONVERSION: Event CTA — urgency & scarcity */}
      <EventSection />

      {/* 5. CAPTURE: Form đăng ký Waitlist + Workshop */}
      <WaitlistCTA />
    </main>
  );
}

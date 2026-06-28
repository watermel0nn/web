import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPoints from '@/components/PainPoints';
import FeatureShowcase from '@/components/FeatureShowcase';
import HowItWorks from '@/components/HowItWorks';
import ParentTrust from '@/components/ParentTrust';
import EventSection from '@/components/EventSection';
import WaitlistCTA from '@/components/WaitlistCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      {/* ── Navigation ── */}
      <Navbar />

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

      {/* 6. CONVERSION: Event CTA — urgency & scarcity */}
      <EventSection />

      {/* 5. CAPTURE: Form đăng ký Waitlist + Workshop */}
      <WaitlistCTA />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}

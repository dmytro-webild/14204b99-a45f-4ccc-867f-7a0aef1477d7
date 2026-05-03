"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Clock, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",          id: "#services"},
        {
          name: "Process",          id: "#process"},
        {
          name: "Book a Call",          id: "#cta"},
        {
          name: "🇩🇪",          id: "#lang-de"},
      ]}
      brandName="VD"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Get More Customers Through Your Website"
      description="We build high-converting websites for local businesses that turn visitors into paying clients."
      buttons={[
        {
          text: "Book a Free Call",          href: "#cta"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-man-stock-exchange-trader-looking-laptop-screen-night_169016-47424.jpg?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/experienced-florist-standing-with-arms-crossed_23-2148435667.jpg",          alt: "Client representative"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-woman-suit-smiling-camera_23-2148317358.jpg",          alt: "Client representative"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",          alt: "Client representative"},
        {
          src: "http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg",          alt: "Client representative"},
        {
          src: "http://img.b2bpic.net/free-photo/amazing-beautiful-redhead-young-lady-sitting-cafe_171337-15285.jpg",          alt: "Client representative"},
      ]}
      avatarText="Trusted by 50+ local business owners"
      marqueeItems={[
        {
          type: "text",          text: "High Performance"},
        {
          type: "text",          text: "Mobile Optimized"},
        {
          type: "text",          text: "SEO Ready"},
        {
          type: "text",          text: "Automated Leads"},
        {
          type: "text",          text: "Premium Design"},
      ]}
    />
  </div>

  <div id="problem" data-section="problem">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Your Current Site Isn't Working?"
      description="If your website is just a static page that nobody visits, or you're relying entirely on social media that you don't own, you're leaving revenue on the table. We bridge the gap between online presence and actual booked revenue."
      metrics={[
        {
          value: "0",          title: "Lost Leads"},
        {
          value: "100%",          title: "Missed Potential"},
      ]}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-55085.jpg"
    />
  </div>

  <div id="solution" data-section="solution">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          label: "Websites",          title: "Conversion-focused Design",          items: [
            "User journey mapping",            "Mobile-first approach",            "High speed performance"],
        },
        {
          id: "f2",          label: "Security",          title: "Fast & Secure Hosting",          items: [
            "DDoS protection",            "Daily backups",            "SSL included"],
        },
        {
          id: "f3",          label: "System",          title: "Done-For-You Delivery",          items: [
            "SEO optimization",            "Call scheduling integration",            "Analytics setup"],
        },
      ]}
      title="The Veltrix System"
      description="We don't just build websites; we build engines for growth."
    />
  </div>

  <div id="benefits" data-section="benefits">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          icon: Clock,
          title: "Inquiries",          value: "24/7"},
        {
          id: "m2",          icon: Award,
          title: "Credibility",          value: "Premium"},
        {
          id: "m3",          icon: Wrench,
          title: "Your Tech Work",          value: "Zero"},
      ]}
      title="Why You Need Us"
      description="Stop struggling with technical work and focus on running your business."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "p1",          label: "Step 1",          title: "Short Discovery Call",          items: [
            "We assess your needs",            "Audit your current site",            "Define goals"],
        },
        {
          id: "p2",          label: "Step 2",          title: "Website Build",          items: [
            "Design & Development",            "Content implementation",            "Testing"],
        },
        {
          id: "p3",          label: "Step 3",          title: "Get Customers",          items: [
            "Website goes live",            "Leads start coming",            "Business grows"],
        },
      ]}
      title="Simple 3-Step Process"
      description="Getting started is as easy as it gets."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          date: "Jan 2024",          title: "Local Cafe Owner",          quote: "Veltrix transformed my site from a dead page to my main lead source.",          tag: "Conversion",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/business-man-stock-exchange-trader-looking-laptop-screen-night_169016-47424.jpg?_wi=2",          imageAlt: "business owner professional portrait"},
        {
          id: "t2",          name: "Mark D.",          date: "Dec 2023",          title: "Plumbing Services",          quote: "Finally getting calls from my website. Worth every penny.",          tag: "Growth",          avatarSrc: "http://img.b2bpic.net/free-photo/vertical-shot-friendly-asian-girl-smiling-serving-coffee-barista-giving-you-cup-coffee_1258-199251.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-face-protection-standing-with-arms-crossed_23-2148645172.jpg",          imageAlt: "business owner professional portrait"},
        {
          id: "t3",          name: "Elena K.",          date: "Nov 2023",          title: "Interior Design",          quote: "My booking calendar is full thanks to the new site.",          tag: "Efficiency",          avatarSrc: "http://img.b2bpic.net/free-photo/successful-senior-businesswoman-eyeglasses_1262-5856.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2623.jpg",          imageAlt: "business owner professional portrait"},
        {
          id: "t4",          name: "John M.",          date: "Oct 2023",          title: "Gym Owner",          quote: "Fast, sleek, and it actually brings in new members.",          tag: "Lead Gen",          avatarSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/female-advisor-answering-landine-phone-call-office_482257-74573.jpg",          imageAlt: "business owner professional portrait"},
        {
          id: "t5",          name: "Lisa B.",          date: "Sep 2023",          title: "Boutique Owner",          quote: "Professional, easy, and very effective results.",          tag: "Presence",          avatarSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-55085.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-online-learning_53876-97299.jpg",          imageAlt: "business owner professional portrait"},
      ]}
      title="Client Success"
      description="See what businesses say about our work."
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Let's Get Started"
      title="Let’s build a website that actually brings you customers"
      description="Schedule a free consultation call to see how we can grow your local business."
      buttons={[
        {
          text: "Book Your Call Now",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg"
      logoText="VD"
      columns={[
        {
          title: "Agency",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Instagram",              href: "https://instagram.com"},
            {
              label: "Book Call",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
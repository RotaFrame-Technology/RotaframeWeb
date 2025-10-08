import React from "react";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";

const Services = () => {
  const sections = [
    {
      title: "Enterprise",
      paragraphs: [
        "Supabase can now scale comfortably to any workload. Companies such as Password, PCI, and Johnson & Johnson use Supabase to build product-backed applications.",
        "We’ve spent years working with larger organizations to meet their production requirements, including enhanced security, industry-leading practices (SOC2 and HIPAA), round-the-clock support, and SLA.",
        "This week we’ve added support for Supabase Enterprise AWS Marketplace. Enterprise customers can now purchase Supabase as part of their committed AWS spend.",
        "We’re committed to ensuring the Supabase Enterprise offering includes more deployment options, including “Bring your own cloud”. If you’re interested in using Supabase in your organization, get in touch with the Supabase Enterprise team.",
      ],
    },
    {
      title: "Enterprise",
      paragraphs: [
        "Supabase can now scale comfortably to any workload. Companies such as Password, PCI, and Johnson & Johnson use Supabase to build product-backed applications.",
        "We’ve spent years working with larger organizations to meet their production requirements, including enhanced security, industry-leading practices (SOC2 and HIPAA), round-the-clock support, and SLA.",
        "This week we’ve added support for Supabase Enterprise AWS Marketplace. Enterprise customers can now purchase Supabase as part of their committed AWS spend.",
        "We’re committed to ensuring the Supabase Enterprise offering includes more deployment options, including “Bring your own cloud”. If you’re interested in using Supabase in your organization, get in touch with the Supabase Enterprise team.",
      ],
    },
    {
      title: "Build a weekend, scale to millions",
      paragraphs: [
        "Our origin is “Build a weekend, scale to millions”. This isn’t hype—it’s reality. In the past 12 months, Facebook, Microsoft, and Twitter have built apps and services using Supabase, reaching over 1 million users in the past year.",
        "Most of these are AI companies—Uber, Nvidia, Meta, Chewy, Plaid, Quant, Freeform, MimirHQ, and MDN search with Milton.",
        "Portage has been instrumental in scalability and adoption. We’ve built scalability into the core of Supabase by supporting AI and ML workloads. Look for a few more announcements this week.",
      ],
    },
    {
      title: "Enterprise",
      paragraphs: [
        "Supabase can now scale comfortably to any workload. Companies such as Password, PCI, and Johnson & Johnson use Supabase to build product-backed applications.",
        "We’ve spent years working with larger organizations to meet their production requirements, including enhanced security, industry-leading practices (SOC2 and HIPAA), round-the-clock support, and SLA.",
        "This week we’ve added support for Supabase Enterprise AWS Marketplace. Enterprise customers can now purchase Supabase as part of their committed AWS spend.",
        "We’re committed to ensuring the Supabase Enterprise offering includes more deployment options, including “Bring your own cloud”. If you’re interested in using Supabase in your organization, get in touch with the Supabase Enterprise team.",
      ],
    },
  ];

  return (
    <section>
      <Banner />
      <div className="services-container flex flex-col items-center">
        <hr className="w-full border-t mt-14" style={{ color: "#2E2E2E" }} />

        <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 mt-6 mb-4">
          {sections.map((section, index) => (
            <div key={index} className="w-full py-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold lg:w-1/4 text-left">
                  {section.title}
                </h2>
                <div
                  className="lg:w-3/4 text-left space-y-4 leading-relaxed"
                  style={{ color: "#B4B4B4" }}
                >
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <hr
                className="w-full border-t mt-14"
                style={{ color: "#2E2E2E" }}
              />
            </div>
          ))}
        </div>

        <LogoSlider noMargin />

        <hr className="w-full border-t mt-8" style={{ color: "#2E2E2E" }} />
        <ContactUs />
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";

const Services = () => {
  return (
    <section className="services-container">
      <Banner />
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center min-h-screen text-center lg:gap-0 px-4 sm:px-6  lg:px-10">
        <div className=" lg:px-10">
          <section className="enterprise-section flex items-start mb-8 ">
            <h2 className="text-2xl font-bold w-1/4 text-left ">Enterprise</h2>
            <div className="w-3/4 text-left pl-4 ">
              <p>
                Supabase can now scale comfortably to any workload. Companies
                audit us on Password, PCI, and Johnson & Johnson use Supabase to
                build product-backed applications.
              </p>
              <p>
                We’ve spent years working with larger organizations to meet
                their requirements for running Supabase in production. This
                includes enhanced security, industry-leading practices (SOC2 and
                HIPAA), round-the-clock support, and SLA.
              </p>
              <p>
                This week we’ve added support for Supabase Enterprise AWS
                Marketplace. Enterprise customers can now purchase Supabase as
                part of their committed AWS spend.
              </p>
              <p>
                We’re committed to ensuring the Supabase Enterprise offering
                includes more deployment options, including “Bring your own
                cloud”. If you’re interested in using Supabase in your
                organization, get in touch with the Supabase Enterprise team.
              </p>
            </div>
          </section>
          <hr className="w-full border-t border-gray-300 mt-4" />
          <section className="enterprise-section flex items-start mb-8">
            <h2 className="text-2xl font-bold w-1/4 text-left">Enterprise</h2>
            <div className="w-3/4 text-left pl-4">
              <p>
                Supabase can now scale comfortably to any workload. Companies
                audit us on Password, PCI, and Johnson & Johnson use Supabase to
                build product-backed applications.
              </p>
              <p>
                We’ve spent years working with larger organizations to meet
                their requirements for running Supabase in production. This
                includes enhanced security, industry-leading practices (SOC2 and
                HIPAA), round-the-clock support, and SLA.
              </p>
              <p>
                This week we’ve added support for Supabase Enterprise AWS
                Marketplace. Enterprise customers can now purchase Supabase as
                part of their committed AWS spend.
              </p>
              <p>
                We’re committed to ensuring the Supabase Enterprise offering
                includes more deployment options, including “Bring your own
                cloud”. If you’re interested in using Supabase in your
                organization, get in touch with the Supabase Enterprise team.
              </p>
            </div>
          </section>
          <hr className="w-full border-t border-gray-300 mt-4" />
          <section className="build-section flex items-start mb-8">
            <h2 className="text-2xl font-bold w-1/4 text-left">
              Build a weekend, scale to millions
            </h2>
            <div className="w-3/4 text-left pl-4">
              <p>
                Our origin is “Build a weekend, scale to millions”. This isn’t
                hype—it’s reality. In the past 12 months, Facebook, Microsoft,
                and Twitter have built apps and services using Supabase,
                reaching over 1 million users in the past year. We’ve had 12
                companies start with Supabase and grow to over 1 million users.
              </p>
              <p>
                Most of these are AI companies—Uber, Nvidia, Meta, Chewy, Plaid,
                Quant, Freeform, MimirHQ and MDN search with Milton.
              </p>
              <p>
                Portage has been instrumental in scalability and adoption. We’ve
                built scalability into the core of Supabase by supporting AI and
                ML workloads. Look for a few more announcements this week.
              </p>
            </div>
          </section>

          <hr className="w-full border-t border-gray-300 mt-4" />
          <section className="enterprise-section flex items-start mb-8">
            <h2 className="text-2xl font-bold w-1/4 text-left">Enterprise</h2>
            <div className="w-3/4 text-left pl-4">
              <p>
                Supabase can now scale comfortably to any workload. Companies
                audit us on Password, PCI, and Johnson & Johnson use Supabase to
                build product-backed applications.
              </p>
              <p>
                We’ve spent years working with larger organizations to meet
                their requirements for running Supabase in production. This
                includes enhanced security, industry-leading practices (SOC2 and
                HIPAA), round-the-clock support, and SLA.
              </p>
              <p>
                This week we’ve added support for Supabase Enterprise AWS
                Marketplace. Enterprise customers can now purchase Supabase as
                part of their committed AWS spend.
              </p>
              <p>
                We’re committed to ensuring the Supabase Enterprise offering
                includes more deployment options, including “Bring your own
                cloud”. If you’re interested in using Supabase in your
                organization, get in touch with the Supabase Enterprise team.
              </p>
            </div>
          </section>
        </div>
        <hr className="w-full border-t border-gray-300 mt-4" />
      </div>
      <LogoSlider />
      <ContactUs />
    </section>
  );
};

export default Services;

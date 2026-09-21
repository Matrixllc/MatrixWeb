import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Process", href: "/#process" },
      { label: "Pricing", href: "/#pricing" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Open Ticket", href: "/contact" },
      { label: "Project Inquiry", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="mb-12 max-w-[380px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo-3.svg"
                  alt="logo"
                  className="w-full"
                  width={120}
                  height={36}
                />
              </Link>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                Cross-platform development, web platforms, AI workflows, and
                practical support for teams that need dependable software.
              </p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div
              key={group.title}
              className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12"
            >
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
                  {group.title}
                </h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
                Contact
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed">
                Tell us what you are building. We will reply with a practical
                next step.
              </p>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 inline-flex rounded-xs px-5 py-3 text-sm font-semibold text-white transition"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />
        <div className="py-8">
          <p className="text-body-color dark:text-body-color-dark text-center text-base">
            &copy; 2026 Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

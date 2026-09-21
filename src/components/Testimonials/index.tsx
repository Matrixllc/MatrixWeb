import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    designation: "CTO @BridgeHACK",
    content:
      "The system drastically improved our internal workflows. Integration was smooth, and the support from the team has been excellent. Highly recommended!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Product Manager @MedHouston",
    content:
      "A well-thought-out platform that helps us streamline patient communication and payments. Intuitive UI and responsive customer service.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Daniel Wu",
    designation: "Tech Lead @GETech",
    content:
      "We use this solution daily for handling appointment scheduling and transaction modules. It is stable, secure, and scalable for our growing needs.",
    image: "/images/testimonials/author-03.jpeg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="We work with healthcare and technology teams to deliver efficient, secure, and scalable systems. Here is what some of our clients have to say."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

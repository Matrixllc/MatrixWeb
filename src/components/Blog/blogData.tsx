import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI-Driven Customer Support Platform Launch ",
    paragraph:
        "Our AI-powered customer support platform is designed to enhance customer interactions, improve response times, and offer 24/7 assistance. The development phase is nearing completion with initial deployment set for Q3 2025.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "HAOYIN TECH",
      image: "/images/testimonials/auth-02.png",
      designation: "Project Manager",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Improvement of Mobile App User Experience",
    paragraph:
        "We are focused on enhancing the mobile app’s user interface to provide a more intuitive and streamlined experience. The updated design will roll out in stages, starting with the beta version in early Q2 2025.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/testimonials/auth-02.png",
      designation: "Lead Designer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Launch of Cloud-Based Data Analytics Tool",
    paragraph:
        "Our cloud-based analytics platform allows businesses to gain valuable insights into their data. The initial beta testing phase is scheduled to begin in May 2025, with full availability expected in the second half of the year.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Tech Development Team",
      image: "/images/testimonials/auth-02.png",
      designation: "Lead Developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

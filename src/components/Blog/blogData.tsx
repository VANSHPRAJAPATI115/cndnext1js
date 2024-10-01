import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph: "For bloggers, modern UI components play a crucial role in enhancing both the reader’s experience and the blog’s overall design. A clean navigation bar and an eye-catching hero section can draw readers in, while content cards neatly organize blog posts for easy browsing. Interactive elements like comment forms, share buttons, and engaging typography keep readers connected, making your blog more user-friendly and visually appealing across all devices.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:"To improve your design skills, start by practicing consistently, even with small daily projects. Mastering core design principles like alignment, contrast, and balance will help you create more cohesive and effective designs. Actively seek constructive feedback from peers to refine your work and gain new perspectives. Analyzing the work of accomplished designers can provide valuable insights and inspiration. Experiment with different design tools to discover new features and enhance your workflow.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph: "To boost your coding speed, master keyboard shortcuts and use code snippets to speed up repetitive tasks. Practice coding challenges to enhance your problem-solving skills. Deepen your understanding of algorithms and data structures for faster problem resolution. Use code editors and IDEs with features like auto-completion to streamline your workflow. Write clean, organized code to reduce debugging time, and regularly review and refactor your code to eliminate bottlenecks.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;

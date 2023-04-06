export type PostObjType = {
  topic: string;
  title: string;
  summary: string;
  tags?: string[];
  url: string;
};

export const POSTS = [
  {
    topic: "Web Development",
    title: "Tired of slow website speeds? Meet CDN! 💻",
    summary:
      "Have you ever visited a website that took forever to load? We've all been there, and it's frustrating. In today's fast-paced world, people expect websites to load quickly, and if they don't, they're likely to bounce to a competitor's site. This is where Content Delivery Networks (CDNs) come in. CDNs are a network of servers located around the world that work together to deliver content to users quickly and efficiently. In this blog post, we will take a closer look at CDNs, how they work, and how they can benefit your website. ",
    tags: ["Cloud"],
    url: "wd",
  },
  {
    topic: "Dev Ops",
    title: "Docker: Simplifying Application Deployment Like a Pro 🐳 ",
    summary:
      "Docker is a containerization platform that allows developers to package their applications and dependencies into portable, self-contained units, called containers. These containers can then be deployed across different environments, without the need for complex setup or configuration. In this blog post, we will take a closer look at Docker, how it works, and its benefits for developers and organizations. So, get ready to unleash the power of Docker and simplify your application deployment process! 🚀",
    tags: ["Dev Ops", "Cloud"],
      url: "wd",
  },
  {
    topic: "Dev Ops",
    title: "Docker: Simplifying Application Deployment Like a Pro 🐳 ",
    summary:
      "Docker is a containerization platform that allows developers to package their applications and dependencies into portable, self-contained units, called containers. These containers can then be deployed across different environments, without the need for complex setup or configuration. In this blog post, we will take a closer look at Docker, how it works, and its benefits for developers and organizations. So, get ready to unleash the power of Docker and simplify your application deployment process! 🚀",
    tags: ["Dev Ops", "Cloud"],
      url: "wd",
  },
  {
    topic: "Web Development",
    title: "Tired of slow website speeds? Meet CDN! 💻",
    summary:
      "Have you ever visited a website that took forever to load? We've all been there, and it's frustrating. In today's fast-paced world, people expect websites to load quickly, and if they don't, they're likely to bounce to a competitor's site. This is where Content Delivery Networks (CDNs) come in. CDNs are a network of servers located around the world that work together to deliver content to users quickly and efficiently. In this blog post, we will take a closer look at CDNs, how they work, and how they can benefit your website. ",
    tags: ["Cloud"],
      url: "wd",
  },
];

export const HERO_POST = {
  topic: "Web Development",
  title: "Say goodbye to servers and hello to serverless architecture! 🚀",
  summary:
    "In recent years, serverless computing has emerged as a popular paradigm for developing and deploying software applications. Despite the name, serverless does not mean that there are no servers involved in the process; rather, it refers to the fact that developers no longer have to worry about the underlying infrastructure and can focus solely on ",
  tags: ["Serverless", "Solution Architecture"],
    url: "wd",
};

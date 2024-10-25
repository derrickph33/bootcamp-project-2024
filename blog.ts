type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;      
    imageAlt: string;
    slug: string;
    link: string;
};

const blogs: Blog[] = [
    {
      title: "Derrick Phan",
      date: "10-23-24",
      description: "A description of Derrick Phan!",
      image: "./images/akpsi.jpeg",
      imageAlt: "Picture of Derrick Phan",
      slug: "get-to-know-derrick-phan",
      link: "blogs/derrick-phan.html" 
    },
    {
      title: "Top Fantasy Football Players",
      date: "10-16-24",
      description: "Top fantasy football players so far.",
      image: "./images/jj.jpeg",
      imageAlt: "Picture of Justin Jefferson",
      slug: "fantasy-football-top-players-2024",
      link: "blogs/fantasy-football.html" 
    },
    {
      title: "Trip to Tahoe",
      date: "09-14-24",
      description: "A awesome trip to Tahoe!",
      image: "./images/tahoe.jpeg",
      imageAlt: "Picture in Tahoe",
      slug: "tahoe-2024",
      link: "blogs/tahoe.html" 
    },
    {
      title: "Vacation in Cabo",
      date: "09-02-24",
      description: "A splendid trip to Cabo.",
      image: "./images/cabo.jpeg",
      imageAlt: "Picture in Cabo",
      slug: "cabo-2024",
      link: "blogs/cabo.html" 
    },
    {
      title: "Internship at Amazon",
      date: "08-31-24",
      description: "About my Intern experience at Amazon!",
      image: "./images/lit2.jpeg",
      imageAlt: "Picture at Amazon",
      slug: "amazon-intern",
      link: "blogs/amazon.html" 
    },
];

(window as any).blogs = blogs;
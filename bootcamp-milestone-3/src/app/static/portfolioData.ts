export type Project = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
  };
  
  export const projects: Project[] = [
    {
      name: "Derrick Phan's Website",
      description: "Come learn about me and my experiences by viewing my Website!",
      image: "/images/akpsi.jpeg",
      imageAlt: "My Professional Headshot",
      link: "/",
    },
    {
      name: "Transpare.io",
      description: "Transpare.io is an online gaming platform that supports a wide variety of online games and live sports tracking.",
      image: "/images/playtranspare_logo.jpeg",
      imageAlt: "Transpare Logo",
      link: "https://www.linkedin.com/company/playtranspare/posts/?feedView=all",
    },
    {
      name: "Polymaps",
      description: "Polymaps is an app that displays all 400+ clubs at Cal Poly, aimed to help students get integrated with campus life.",
      image: "/images/poly.jpg",
      imageAlt: "Polymaps Picture",
      link: "/"
    },
  ];
  
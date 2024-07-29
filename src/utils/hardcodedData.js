import tour_1 from "../images/tour-1.jpeg";
import tour_2 from "../images/tour-2.jpeg";
import tour_3 from "../images/tour-3.jpeg";
import tour_4 from "../images/tour-4.jpeg";

export const hardcodedServices = [
  {
    serviceId: 1,
    title: "saving money",
    iconClassname: "fa-wallet",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, excepturi!",
  },
  {
    serviceId: 2,
    title: "endless hiking",
    iconClassname: "fa-tree",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil, dicta magni soluta nesciunt consectetur.",
  },
  {
    serviceId: 3,
    title: "amazing comfort",
    iconClassname: "fa-socks",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem saepe ad aut ipsa nulla sed quo. Voluptas illum dicta explicabo!",
  }
];

export const hardcodedTours = [
  {
    tourId: 1,
    tourImg: tour_1,
    tourDate: "august 26th, 2025",
    tourTitle: "Tibet Adventure",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "china",
    tourDuration: "6 days",
    tourPrice: "2100",
  },
  {
    tourId: 2,
    tourImg: tour_2,
    tourDate: "october 1th, 2025",
    tourTitle: "best of java",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "indonesia",
    tourDuration: "11 days",
    tourPrice: "1400",
  },
  {
    tourId: 3,
    tourImg: tour_3,
    tourDate: "september 15th, 2025",
    tourTitle: "explore hong kong",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "hong kong",
    tourDuration: "5 days",
    tourPrice: "5000",
  },
  {
    tourId: 4,
    tourImg: tour_4,
    tourDate: "december 5th, 2025",
    tourTitle: "kenya highlights",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "kenya",
    tourDuration: "20",
    tourPrice: "3300",
  },
];

export const hardcodedSocials = [
  {
    id: 1,
    address: "https://www.facebook.com",
    icon: "fa-facebook",
  },
  {
    id: 2,
    address: "https://accounts.google.com/",
    icon: "fa-google",
  },
  {
    id: 3,
    address: "https://www.github.com/login",
    icon: "fa-github",
  }
];

export const hardcodedNavLinks = [
  {
    id: 1,
    text: "home",
    anchor: "#home",
  },
  {
    id: 2,
    text: "about",
    anchor: "#about",
  },
  {
    id: 3,
    text: "services",
    anchor: "#services",
  },
  {
    id: 4,
    text: "tours",
    anchor: "#tours",
  }
];

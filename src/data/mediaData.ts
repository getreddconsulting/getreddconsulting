import NAGGL1 from "../assets/media/events/Naggl/NAGGL_conference_1.jpg";
import NAGGL2 from "../assets/media/events/Naggl/NAGGL_conference_2.jpg";
import NAGGL3 from "../assets/media/events/Naggl/NAGGL_conference_4.jpg";
import NAGGL4 from "../assets/media/events/Naggl/NAGGL_conference_5.jpg";
import NAGGL5 from "../assets/media/events/Naggl/NAGGL_conference_6.jpg";
import NAGGL6 from "../assets/media/events/Naggl/NAGGL_conference_7.jpg";
import NAGGLVIDEO from "../assets/media/events/video/video1.mp4";
import FLAGGL1 from "../assets/media/events/Flaggl/Flaggl2022_2.jpg";
import FLAGGL2 from "../assets/media/events/Flaggl/Flaggl2022_1.jpg";
import FLAGGL3 from "../assets/media/events/Flaggl/Flaggl2022_3.jpg";
import FLAGGL4 from "../assets/media/events/Flaggl/Flaggl2022_4.jpg";
import FLAGGL5 from "../assets/media/events/Flaggl/Flaggl2022_5.jpg";
import FLAGGL6 from "../assets/media/events/Flaggl/Flaggl2022_6.jpg";
import FLAGGL7 from "../assets/media/events/Flaggl/Flaggl2022_7.jpg";
import FLAGGL8 from "../assets/media/events/Flaggl/Flaggl2022_8.jpg";
import FLAGGLVideo from "../assets/media/events/Flaggl/Flaggl2022_video.mp4";
import NagglAnniversary from "../assets/media/events/NagglAnniversary/NAGGLanniversary_1.jpg";
import NagglAnniversary2 from "../assets/media/events/NagglAnniversary/NAGGLanniversary_2.jpg";
import NagglAnniversary3 from "../assets/media/events/NagglAnniversary/NAGGLanniversary_3.jpg";
import NagglAnniversary4 from "../assets/media/events/NagglAnniversary/NAGGLanniversary_4.mp4";
import NagglAnniversary5 from "../assets/media/events/NagglAnniversary/NAGGLanniversary_5.jpg";
import HHHH from "../assets/media/events/HHHH/hhhh2023_6.jpg";
import HHHH2 from "../assets/media/events/HHHH/hhhh2023_5.jpg";
import HHHH3 from "../assets/media/events/HHHH/hhhh2023_4.jpg";
import HHHH4 from "../assets/media/events/HHHH/hhhh2023_3.jpg";
import HHHH5 from "../assets/media/events/HHHH/hhhh2023_2.jpg";
import HHHH6 from "../assets/media/events/HHHH/hhhh2023_1.jpg";
import NEWSLETTER1 from "../assets/media/Article/article_1.jpg";
import NEWSLETTER2 from "../assets/media/Article/article_2.jpg";


export const mediaData = {
  events: [
    {
      title: "NAGGAL Tehnicial Conference",
      image: NAGGL1,
      category: "NAGGL Conference",
      date: "2022",
      location: "Atlanta",
      media: [NAGGL1, NAGGL2, NAGGL3, NAGGL4, NAGGL5, NAGGL6, NAGGLVIDEO],
    },
    {
      title: "FLAGGL Conference",
      image: FLAGGL1,
      category: "FLAGGL",
      date: "2022",
      location: "JW Marriott Orlando, Grande Lakes",
      media: [
        FLAGGL1,
        FLAGGL2,
        FLAGGL3,
        FLAGGL4,
        FLAGGL5,
        FLAGGL6,
        FLAGGL7,
        FLAGGL8,
        FLAGGLVideo,
      ],
    },
    {
      title: "NAGGL ANNIVERSARY",
      image: NagglAnniversary,
      category: "NAGGL Anniversary",
      date: "2024",
      location: "",
      media: [
        NagglAnniversary,
        NagglAnniversary2,
        NagglAnniversary3,
        NagglAnniversary4,
        NagglAnniversary5,
      ],
    },
    {
      title: "Hard Hats & High Heels",
      image: HHHH,
      category: "Hard Hats & High Heels",
      date: "2023",
      location: "",
      media: [HHHH, HHHH2, HHHH3, HHHH4, HHHH5, HHHH6],
    },
  ],

  articles: [
    {
      title: "FBF MAGAZINE",
      description: " DRIVING VALUE FOR FINANCIAL INSTITUTIONS",
      pdf: NEWSLETTER1,
      cover: NEWSLETTER1,
    },
    {
      title: "FBF MAGAZINE",
      description: " DRIVING VALUE FOR FINANCIAL INSTITUTIONS",
      pdf: NEWSLETTER2,
      cover: NEWSLETTER2,
    },
  ],

  newsletters: [
    {
      title: "NEWSLETTER",
      content: "",
      img: NEWSLETTER1,
    },
    {
      title: "",
      content: "",
      img: NEWSLETTER2,
    },
  ],
};

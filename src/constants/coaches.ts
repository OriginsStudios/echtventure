

// src/constants/coaches.ts

export type Coach = {
  slug: string;
  name: string;
  title: string;
  image: string;
  email?: string;                  
  bio: string[];
  credentials: {
    year: number;
    name: string;
    issuer?: string;
  }[];
  social?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
};

export const coaches: Coach[] = [
  {
    slug: "keith-tay",
    name: "KEITH TAY",
    email: "keith.echtventure@gmail.com",   
    title:
      "Thought Leader | Leadership Coach | Pastor | International Speaker",
    image: "/keithcutout.png",
    bio: [
      "Keith Tay is an ICF Certified Professional Coach to many young entrepreneurs and a dynamic international speaker known for his expertise in Leadership and Purposeful living. He travels actively to over 12 countries, leveraging his experience in corporate management and holistic development to teach the integration of leadership, work, and spirituality.",

      "Keith is also a Pastor at Collective and Co-Founder of Collective Global, overseeing 17 thriving churches across Southeast Asia. Recently, he took on the role of Managing Director at New Orange, an Australian digital solutions company, and lately he Co-Founded Zera International School in Johor Bahru, a school dedicated to holistic student development."
    ],
    credentials: [
      {
        year: 2010,
        name: "Bachelor in Mechanical Engineering",
        issuer: "Monash University"
      },
      {
        year: 2013,
        name: "Masters in Theology",
        issuer: "University of Wales"
      },
      {
        year: 2018,
        name: "People Management with Enneagram",
        issuer: "Relationship Studio"
      },
      {
        year: 2019,
        name: "Certified Associate Coach",
        issuer: "Corporate Coach Academy"
      },
      {
        year: 2020,
        name: "Certified Professional Coach",
        issuer: "Corporate Coach Academy"
      },
      {
        year: 2022,
        name: "Certified Coach Model",
        issuer: "Optimyze Asia PLT"
      },
      {
        year: 2023,
        name: "Design Thinking Practitioner",
        issuer: "eiHub, Monash University"
      },
      {
        year: 2025,
        name: "Certified ScrumMaster",
        issuer: "Scrum Alliance"
      }
    ],
    social: {
      instagram: "https://www.instagram.com/KEITH_TAY",
      facebook: "https://www.facebook.com/keithtay",
      linkedin: "https://www.linkedin.com/in/keithtaywc"
    }
  }
  // Add more coaches here in the future if needed
];

export function getCoachBySlug(slug: string) {
  return coaches.find((coach) => coach.slug === slug);
}
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    python,
    java,
    springBoot,
    mysql,
    postgresql,
    redis,

    ride_booking,
    medappoint,
    movie_streaming,
    expense_tracker,
    weather,
    HiringFit,
    syntech,

    sih,
    leetcode,
    gfg,
    codechef,
    hackerrank,
    winner,
    course
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: springBoot,
    },
    {
      name: "My Sql",
      icon: mysql,
    },
    {
      name: "Postgres Sql",
      icon: postgresql,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "HiringFit",
      icon: HiringFit,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Developed and maintained dynamic web pages and components using React.js, Tailwind CSS,and Node.js.",
        "Collaborated with cross-functional teams to implement reusable components, enhancing development efficiency and code maintainability ",
      ],
    },
    {
      title: "Member - Web&App, SynTech-X",
      company_name: "RD & SH National College",
      icon: syntech,
      iconBg: "#383E56",
      date: "Oct 2023 - Jan 2024",
      points: [
        "Led development of a web application and management system for SynTech-X '23–'24, handling frontend to ensure a seamless user experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const achievements = [
    {
      role:"Finalist, \n SIH 2022",
      description:
        "Grand Finale Participant, Smart India Hackathon (SIH) 2022, Software Edition.",
      company: "Smart India Hackathon",
      image: sih,
    },
    {
      role:"Contest Rating - 1555 ",
      description:
        "Solved more than 350 DSA questions on leetcode with contest rating of 1555.",
      company: "Leetcode",
      image: leetcode,
    },
    {
      role:"Contest Rating - 1925",
      description:
        "4 star coder at GFG with a contest rating of 1925 and solved 450+ problems.",
      company: "Geeksforgeeks",
      image: gfg,
    },
    {
      role:"Contest Rating - 1250",
      description:
        "One star coder at CodeChef with a contest rating of 1250 by solving 3 problems. ",
      company: "CodeChef",
      image: codechef,
    },
    {
      role:"5 star Rating",
      description:
        "Secured a 5 star rating in the Problem Solving category on HackerRank with 850+ points.",
      company: "HackerRank",
      image: hackerrank,
    },
    {
      role:"Springboot Course",
      description:
        "Completed my Springboot fundamental course at Coding Shuttle with real life project.",
      company: "Codingshuttle",
      image: course,
    },
    {
      role:"Contest Winner",
      description:
        "Participated and won 2 coding contest in the inter-college coding competition. ",
      company: "Inter-College Contests",
      image: winner,
    },
  ];
  
  const projects = [
    {
      name: "RideOn - A Ride Booking SpringBoot Application",
      description:
        "The RideOn application provides a seamless ride-booking experience powered by a robust backend architecture built with Spring Boot. The app supports three types of users – Riders, Drivers, and Admins – and offers essential functionalities for ride management, payment processing, and user authentication. With strategically designed features like driver matching and fare calculation, RideOn aims to deliver efficient, safe, and user-friendly transportation options.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "postgres_SQL",
          color: "pink-text-gradient",
        },
      ],
      image: ride_booking,
      source_code_link: "https://github.com/realsohel/Ride-Booking-App-backend-SpringBoot",
    },
    {
      name: "MedAppoint - Doctor's Appointment System",
      description:
        "This online tool acts as a portal, giving patients the ease of making appointments with medical specialists and giving physicians a simplified approach to effectively manage their calendars.The portal contains 2 types of user i.e Doctor and Patient. Stripe Payment Gateway is integrated to perform the payment online.Cloudinary is used to upload the image in the cloud. Made a rating system so that patients can give the rating and feedback about the doctor. JWT, bcrypt are used for the authentication purpose. It is a complete MERN project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        }
      ],
      image: medappoint,
      source_code_link: "https://github.com/realsohel/MedAppoint-PatientDoctorAppointmentSystem",
      live_web_link: "https://med-appoint-patient-doctor-appointment-system.vercel.app/"
    },
    {
      name: "Personal Expense Tracker web App",
      description:
        "This is an online platform that manages your income and expenses over the period of time.\n It also represents the incomes and expenses in the Graphical format. Users can view all their transaction history. Taking the total income and total expense as an input the portal also calculates the total balance of the user internally.  It is a complete MERN project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        }
      ],
      image: expense_tracker,
      source_code_link: "https://github.com/realsohel/Expense-Tracker-backend",
      live_web_link: "https://expense-tracker-mu-lilac-27.vercel.app"
    },
    {
      name: "Netflix clone - Movie Streaming App",
      description:
        "It is a Netflix website Clone, made using React Js and Tailwind CSS. The movie API is used from TMDB movie API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: movie_streaming,
      source_code_link: "https://github.com/realsohel/Netflix-clone",
      live_web_link: "https://netflix-clone-realsohel.vercel.app/"
    },
    {
      name: "Weatherwave - A weather forecasting app",
      description:
        "It is a weather app that forecasts the weather of various cities around the globe. It has a feature of specifying the temperature of a particular city in celsius as well as in fahrenheit. It also specifies about the wind speed, atmospheric pressure, humidity etc about the selected city.The project has a dynamic search feature that allows the user to look for a city by name in the search bar and retrieve information about its weather. Additionally, it features a dynamic background graphic that varies based on the city's temperature.The project uses OpenweatherApi to fetch the data of the weather, and it is built on React.Js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/realsohel/Weather-App",
      live_web_link: "https://weatherwave54.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, achievements, projects };
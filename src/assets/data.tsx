import dipai from "./images/dipai.png";
import axbit from "./images/axbit.png";
import blink from "./images/blink.png";
import { linkdinLogo, mailLogo } from "@/assets/icons";

// SHARED
export const navbarLinks = [
    {
        text: "About",
        url: "#about",
    }, {
        text: "Portfolio",
        url: "#portfolio",
    }, {
        text: "Contact",
        url: "#contact",
    }
];

export const sharedText = {
    firstName: "Hannah",
    fullName: "Hannah Michelle Oen",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    submit: "Submit"
};

export const footerLinks = [
    {
        icon: linkdinLogo,
        url: "https://www.linkedin.com/in/hannah-michelle-oen-233774b3/"
    }, {
        icon: mailLogo,
        url: "mailto:hannahmich@gmail.com"
    }
];

// LANDING SECTION
export const landingText = {
    highlight: "Hello, I'm ",
    intro: "And I'm a front-end web developer."
};

// ABOUT SECTION
export const aboutText = {
    description: "As an experienced front-end developer, I thrive in both independent projects and collaborative development teams. My skill set encompasses various languages and frameworks, including JavaScript, TypeScript, Node.js, Vue.js, and React. In addition to this, I bring strong expertise in HTML and CSS, allowing me to seamlessly transform design sketches from Figma into polished and functional interfaces.",
    experiences: "Experiences",
    education: "Education"
};

export const personalInfo = [
    {
        label: "Location",
        info: "Ålesund, Norway"
    }, {
        label: "Languages",
        info: "Norwegian (native), English, Cebuano"
    }
];

export const education = {
    years: "June 2010 - March 2014",
    university: "University of San Jose - Recoletos",
    url: "https://usjr.edu.ph",
    degree: "Bachelor of Science in Information Technology",
    additionInfo: "Major in Web Applications Development"
};

export const experiences = [
    {
        years: "November 2020 - present",
        company: "Axbit AS",
        url: "https://axbit.com/en",
        position: "Software Engineer",
        additionInfo: "Front-end developer: React, Typescript, Git, Figma, Strapi, Umbraco, Wordpress"
    },
    {
        years: "September 2018 - November 2020",
        company: "Zegeba AS",
        url: "https://zegeba.com",
        position: "Software Developer",
        additionInfo: "Full stack developer: Javascript, jQuery, VueJS, NodeJs, Bootstrap, Git"
    },
    {
        years: "December 2016 - April 2018",
        company: "Wise Consulting AS",
        url: "https://www.wise.no/en/",
        position: "IT Konsulent",
        additionInfo: "Full stack developer: .NET, Javascript, SQL, Bootstrap, TortoiseSVN"
    },
    {
        years: "April 2014 - April 2016",
        company: "Alliance Software Inc.",
        url: "https://www.alliance.com.ph/index.html",
        position: "Associate Technical Specialist",
        additionInfo: `Developer: PHP/LAMP, AWS, Wordpress, Javascript, Bootstrap, TortoiseSVN \n Team Lead & Project Liaison`
    }
];

// PORTFOLIO SECTION
export const projects = [
    {
        title: "Website Redesign & maintenance",
        company: "Dipai AS",
        url: "https://dipai.no",
        image: dipai,
        description: "Revamp Dipai's website through the development of a WordPress theme tailored to integrate with their current CMS. Integrated with design elements from Figma sketches provided by a UX designer. I handle tasks such as adding new content and updating existing content as needed, ensuring the website remains dynamic and up-to-date.",
        techStack: "Wordpress, PHP, Javascript, Bootstrap, Figma"

    }, {
        title: "Website Redesign",
        company: "Axbit AS",
        url: "https://axbit.no",
        image: axbit,
        description: "Completely overhaul Axbit's website by building it from the ground up, employing the Umbraco headless CMS and React Typescript for enhanced functionality and dynamic user experiences. Integrated with design elements from Figma sketches provided by a UX designer.",
        techStack: "React, TypeScript, Umbraco, Figma"

    }, {
        title: "Visual design / graphic design",
        company: "Blink Trafikkskole Ålesund AS",
        url: "https://blinkskole.no",
        image: blink,
        description: "Designing custom posters for marketing, as well as creating professional office materials. I have also created interactive educational material specifically aimed for driving instructors, emphasizing engagement and pedagogical value.",
        techStack: "Figma, Photoshop"

    }
];

// CONTACT SECTION
export const contactText = {
    submitMsg: "Thanks for contacting! I will get back to you as soon as possible 👩‍💻",
    something: "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
}

// Import organization logos
import COMPFEST from '../assets/orgs/compfest.webp';
import RISTEK from '../assets/orgs/ristek.svg';
import Fasilkom from '../assets/orgs/fasilkom.svg';
import DDP0 from '../assets/orgs/ddp0.svg';
import BETIS from '../assets/orgs/betis.svg';
import GDG from '../assets/orgs/gdg.svg';
import CO80 from '../assets/orgs/80co.webp';

const experienceData = [
    {
        title: "Front-End Developer",
        org: "80&Company",
        url: "https://80and.co/en/company/",
        logo: CO80,
        date: "01/2025 - Present",
        desc: "Working on a front-end interface using Next.js, while also developing a BaaS AI chat service powered by Dify AI and OpenAI's 4o-mini model, seamlessly integrated with Python to efficiently gather customer insights."
    },
    {
        title: "Software Engineering",
        org: "GDGoC Universitas Indonesia",
        url: "https://gdg.community.dev/gdg-on-campus-universitas-indonesia-jakarta-indonesia/",
        logo: GDG,
        date: "11/2024 - Present",
        desc: "Organizing 2 main work programs: GDG Study Jams and WebDev Mini Competition. Study Jams is a series of workshops for students to learn about Google technologies, e.g. Flutter and Firebase. WebDev Mini Competition is a competition for students to create a website based on a given theme.",
        previousTitles: ["Member"],
        previousDates: ["09/2023 - 08/2024"]
    },
    {
        title: "VPIC & Expert Web Infra. Staff",
        org: "COMPFEST17",
        url: "https://compfest.id/",
        logo: COMPFEST,
        date: "03/2024 - 11/2024",
        desc: "Designed and maintained a CTF platform for COMPFEST16 using Flask, Node.js, and Bootstrap on GCP, serving 384 teams and 600+ participants. For COMPFEST17, deployed a Jeopardy-format CTF on DigitalOcean with Docker for staff recruitment and created bash automation scripts to streamline operations.",
        previousTitles: ["Web Infra. Staff"],
        previousDates: ["03/2024 - 11/2024"]
    },
    {
        title: "Lead of NetSOS SIG",
        org: "RISTEK Fasilkom UI",
        url: "https://www.ristek.cs.ui.ac.id/",
        logo: RISTEK,
        date: "02/2025 - Present",
        desc: "Participated in the development of an Attack and Defense (AnD) CTF platform with Next.js and Flask backend. Contributed to RISTEK Capstone Project as a front-end developer. Organized NetSOS Open Class for 100+ participants covering Web Penetration and Cryptography, while actively participating in regular internal training sessions.",
        previousTitles: ["Member of NetSOS SIG", "PIC of Open Class", "Mentee of Open Class"],
        previousDates: ["03/2024 - 02/2025", "09/2024 - 11/2024", "10/2023 - 10/2023"]
    },
    {
        title: "TA for Linear Algebra",
        org: "Fasilkom UI",
        url: "https://cs.ui.ac.id/",
        logo: Fasilkom,
        date: "01/2025 - Present",
        desc: "Designs assignment questions while also grading them, hosts a weekly forum discussion, and teaching in assistance sessions before quizzes and exams.",
        previousTitles: ["TA for Discrete Math 1"],
        previousDates: ["07/2024 - 12/2024"]
    },
    {
        title: "Student Mentor",
        org: "Dasar-Dasar Pemrograman 0",
        url: "https://www.linkedin.com/company/ddp-0/mycompany/",
        logo: DDP0,
        date: "06/2024 - 09/2024",
        desc: "Teaching a group of Fasilkom UI freshmen about Python Language as a provision for DDP-1 course. The materials revolve around the basics of Python plus Python Turtle library."
    },
    {
        title: "Academician & Lecturer",
        org: "BETIS Fasilkom UI",
        url: "https://www.instagram.com/betisfasilkomui/",
        logo: BETIS,
        date: "12/2023 - 05/2024",
        desc: "Conducted interviews to select prospective tutors, created learning materials including modules, quizzes, try-outs, and PowerPoint presentations, and stepped in to teach the class when tutors are unable to teach."
    }
];

export default experienceData; 
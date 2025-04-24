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
        title: "Full-Stack Engineer",
        org: "80&Company",
        url: "https://80and.co/en/company/",
        logo: CO80,
        date: "01/2025 - Present",
        desc: "Developed a BaaS AI voice-call powered by Dify AI and OpenAI's 4o-mini model with Python integration for customer insights. Crafted an intuitive blockchain project frontend using Next.js with optimized SSR for a sleek user experience. Implemented a fully responsive UI for a beauty acupuncture salon's reservation management system."
    },
    {
        title: "Software Engineering Team",
        org: "Google Developer Group (GDG) on Campus UI",
        url: "https://gdg.community.dev/gdg-on-campus-universitas-indonesia-jakarta-indonesia/",
        logo: GDG,
        date: "11/2024 - Present",
        desc: "Teaching and mentoring members across multiple batches about Google Technologies including Firebase, Flutter, and Google Cloud. Developing learning modules and live web apps for hands-on demo during Study Jam sessions using Google Technologies and React.js. Co-organizing the GDGoC UI National Hackathon as a guidebook author and judge alongside invited industry professionals.",
        previousTitles: ["Member"],
        previousDates: ["09/2023 - 08/2024"]
    },
    {
        title: "VPIC & Expert Web Infra. Staff",
        org: "COMPFEST",
        url: "https://compfest.id/",
        logo: COMPFEST,
        date: "03/2024 - Present",
        desc: "Deployed Jeopardy-format CTF using Docker on DigitalOcean infrastructure for open staff recruitment with custom bash script automation. Led the design and maintenance of the CTF web platform using Flask, Node.js, and Bootstrap, deployed via Docker within Google Cloud Platform. Successfully managed high-traffic competition servers with efficient resource utilization, attracting participants from universities across Indonesia.",
        previousTitles: ["Web Infra. Staff"],
        previousDates: ["03/2024 - 11/2024"]
    },
    {
        title: "Lead of NetSOS SIG",
        org: "RISTEK Fasilkom UI",
        url: "https://www.ristek.cs.ui.ac.id/",
        logo: RISTEK,
        date: "03/2024 - Present",
        desc: "Selected from a competitive batch for RISTEK membership and later promoted to lead position. Developed and deployed an Attack and Defense CTF for internal members with Next.js frontend and a Flask, RabbitMQ, Redis, and Wireguard backend, deployed via Docker with Ansible. Participated in cross-SIG RISTEK Capstone Project as a Next.js Frontend Developer while serving as Person in Charge for Open Classes in Web Penetration and Cryptography.",
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
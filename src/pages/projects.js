import drawberry from "../images/drawberry.png";
import agileberry from "../images/agileberry.png";
import mello from "../images/mello.jpg";
import coinshack from "../images/coinshack.png";
import whoosh from "../images/whoosh.png";
import liberry from "../images/LiBerry.png";
import attendance_bot from "../images/attendance_bot.jpeg";
import ProjectList from "../components/projectList/projectList";

const allProjects = [
    {
        name: "Mello",
        img: mello,
        desc: "Mello is an all in one family management app that brings families closer and makes family organization a breeze! It is available on the App Store and Play Store.",
        link: "https://mello-family.netlify.app/",
        languages: ["react-native"],
    },
    {
        name: "Drawberry",
        img: drawberry,
        desc: "DrawBerry is a competitive multiplayer drawing game designed for the iPad.",
        link: "https://github.com/hoholyin/DrawBerry",
        languages: ["swift"],
    },
    {
        name: "AgileBerry",
        img: agileberry,
        desc: "AgileBerry is a project task tracker and management web application.",
        link: "https://agileberry.netlify.app/",
        languages: ["react"],
    },
    {
        name: "CoinShack",
        img: coinshack,
        desc: "CoinShack - A risk-free simulator for anyone to learn to trade cryptocurrencies!",
        link: "https://github.com/teamcoinshack/CoinShack",
        languages: ["react-native"],
    },
    {
        name: "Whoosh",
        img: whoosh,
        desc: "Whoosh is a digital queueing application that helps restaurants manage queues virtually.",
        link: "https://github.com/hoholyin/whoosh",
        languages: ["dart"],
    },
    {
        name: "LiBerry",
        img: liberry,
        desc: "LiBerry is a desktop library management application which enables librarians from neighborhood libraries to manage tens of thousands of books and borrowers.",
        link: "https://github.com/hoholyin/main",
        languages: ["java"],
    },
    {
        name: "AttendanceBot",
        img: attendance_bot,
        desc: "A functioning Telegram bot to allow students to take their own attendance during lessons",
        link: "https://github.com/hoholyin/AttendanceBot",
        languages: ["javascript"],
    },
]

const Projects = (props) => {
    return (
        <div className="page-container">
            <div className="header-container">
                <span>Projects</span>
            </div>
            <ProjectList isMobile={props.isMobile} projects={allProjects} />
        </div>
    )
}

export default Projects;

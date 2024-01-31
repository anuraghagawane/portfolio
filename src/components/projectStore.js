import WeChat from "../images/WeChat.png";
import searchicon from "../images/big_search.png";
import ID3 from "../images/logo.png";
import WeChatSC from "../images/Wechat-sc.png";
import search from "../images/search.png";
import ID3_sc from "../images/ID3_sc.png";
import neflix_sc from "../images/netflix_sc.png";
import netflix from "../images/netflix.jpg";
import todo from "../images/todo.png";
import todo_sc from "../images/todo_sc.png";
import pomo from "../images/pomo.png";
import pomo_sc from "../images/pomo_sc.png";

const projectStore = [
    {
        _id: 0,
        name: "WeChat",
        description: "Built a web app that can solve the problems that persists of present drives. Impacting all users using centralized drive by serving better security, transparency and authority to manage their files without entrusting any third-party provider.",
        technology: "WebSocket, mongoDb, Express, React.js, Node.js.",
        imageLink: WeChat,
        sc: WeChatSC,
        github: "https://github.com/anuraghagawane/ChatApp",
        link: ""
    },
    {
        _id: 1,
        name: "Big Search",
        description: "Built a software that can help Madhya Pradesh Police Department increase their Searching in their Database with improvised and fast searching to quickly get all related documents of their search",
        technology: "HTML, CSS, JavaScript, MySQL, Node.js, Python, Tessaract, numpy, Pandas, ejs.",
        imageLink: searchicon,
        sc: search,
        github: "https://github.com/anuraghagawane/sih_project",
        link: ""
    },
    {
        _id: 2,
        name: "ID3",
        description: "Built a web app that can solve the problems that persists of present drives. Impacting all users using centralized drive by serving better security, transparency and authority to manage their files without entrusting any third-party provider.",
        technology: "React.js, Solidity, IPFS, Metamask, Hardhat.",
        imageLink: ID3,
        sc: ID3_sc,
        github: "https://github.com/anuraghagawane/Idrive3.0",
        link: ""
    },
    {
        _id: 3,
        name: "Neflix Clone",
        description: "Built a web application that replicates the user interface and functionality of the popular streaming platform Netflix serving the functionality of featuring latest Movies and Web Series, Showing the trailer of Movies using APIs.",
        technology: "React.js, Axios, Cors, APIs.",
        imageLink: netflix,
        sc: neflix_sc,
        github: "https://github.com/anuraghagawane/netflix-clone",
        link: "https://netflix-clone-c9f9e.web.app/"
    },
    {
        _id: 4,
        name: "To-do-list",
        description: "Created a robust Todo List application using the MERN stack—MongoDB for data storage, Express for server-side logic, React for an intuitive user interface, and Node.js for server development. Implemented features for task management, real-time updates, ensuring a dynamic and efficient user experience.",
        technology: "React.js, MongoDB, Express.js, Node.js.",
        imageLink: todo,
        sc: todo_sc,
        github: "https://github.com/anuraghagawane/todolist_using_react",
        link: ""
    },
    {
        _id: 5,
        name: "Pomodora Timer",
        description: "Crafted a Pomodoro Timer app with React.js, allowing users to efficiently manage work intervals and breaks. Features a clean interface, customizable timer durations, audio alerts, and session tracking for enhanced productivity management.",
        technology: "React.js, HTML, CSS, JavaScript.",
        imageLink: pomo,
        sc: pomo_sc,
        github: "https://github.com/anuraghagawane/pomodoro",
        link: ""
    },
];

export default projectStore;
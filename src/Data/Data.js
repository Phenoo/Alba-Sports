// Sidebar imports
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { FiClipboard } from "@react-icons/all-files/fi/FiClipboard";
import { FiPackage } from "@react-icons/all-files/fi/FiPackage";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";


// Analytics Cards imports
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
import { IoLogoUsd } from "@react-icons/all-files/io/IoLogoUsd";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [{
        icon: MdDashboard,
        heading: "Dashboard",
    },
    {
        icon: FiClipboard,
        heading: "Orders",
    },
    {
        icon: FaUserAlt,
        heading: "Customers",
    },
    {
        icon: FiPackage,
        heading: 'Products'
    },
    {
        icon: FaChartLine,
        heading: 'Analytics'
    },
];

// Analytics Cards Data
export const cardsData = [{
        title: "weekly tasks",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: IoLogoUsd,
        series: [{
            name: "weekly tasks",
            data: [31, 40, 28, 51, 42, 109, 100],
        }, ],
    },
    {
        title: "monthly tasks",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: FaMoneyCheckAlt,
        series: [{
            name: "monthly tasks",
            data: [10, 100, 50, 70, 80, 30, 40],
        }, ],
    },
    // {
    //     title: "Expenses",
    //     color: {
    //         backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
    //         boxShadow: "0px 10px 20px 0px #F9D59B",
    //     },
    //     barValue: 60,
    //     value: "4,270",
    //     png: FiClipboard,
    //     series: [{
    //         name: "Expenses",
    //         data: [10, 25, 15, 30, 12, 15, 20],
    //     }, ],
    // },
];

// Recent Update Card Data
export const UpdatesData = [{
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];
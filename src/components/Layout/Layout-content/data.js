import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const dataList = [
    { 
        id: 1,
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "New Leds",
        point: "205"
    },
    { 
        id: 2,
        icon: <FontAwesomeIcon icon={faHandHoldingWater} color="#C5DBFF"/>,
        title: "Sales",
        point: "$4021"
    },
    { 
        id: 3,
        icon: "lol",
        title: "Orders",
        point: "80"
    },
    { 
        id: 4,
        icon: "lol",
        title: "Expense",
        point: "$1200"
    },
]
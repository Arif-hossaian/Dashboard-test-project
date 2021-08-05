import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingWater,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";

export const dataList = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "New Leds",
    point: <span style={{ color: "#663399" }}>205</span>,
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faHandHoldingWater} />,
    title: "Sales",
    point: <span style={{ color: "#5DAE49" }}>80</span>,
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faClock} />,
    title: "Orders",
    point: <span style={{ color: "#3981F7" }}>$4021</span>,
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
    title: "Expense",
    point: <span style={{ color: "#FFC620" }}>$4021</span>,
  },
];

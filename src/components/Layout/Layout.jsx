import { useState } from "react";
import { styled, alpha } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faTv,
  faMouse,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Navbar from "../Navbar/Navbar";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import DashboardContent from "./Layout-content/DashboardContent";

const Header = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(3),
  fontSize: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));
const TabsIconWrapper = styled("div")(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  "&:hover": {
    borderColor: "blue",
  },
}));
const TabsWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#7D48B1",
  },
}));
const TabsPanelWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "0px",
  backgroundColor: "#F1F3F4",
}));
const TabIconWrapper = styled("div")(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  margin: "15px 0px 15px 0px",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Layout({ children }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "2069px",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          background: "#663399",
          color: "white",
          width: "120px",
        }}
      >
        <Header>Gull</Header>
        <Tab
          label={
            <TabsWrapper>
              <TabsIconWrapper>
                <FontAwesomeIcon icon={faChartLine} color="white" size="2x" />
                <p>Dashboard</p>
              </TabsIconWrapper>
            </TabsWrapper>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <TabsWrapper>
              <TabIconWrapper>
                <FontAwesomeIcon icon={faClipboard} color="white" size="2x" />
                <p>Notes</p>
              </TabIconWrapper>
            </TabsWrapper>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <TabsWrapper>
              <TabIconWrapper>
                <FontAwesomeIcon icon={faTv} color="white" size="2x" />
                <p>Monitor</p>
              </TabIconWrapper>
            </TabsWrapper>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <TabsWrapper>
              <TabIconWrapper>
                <FontAwesomeIcon icon={faMouse} color="white" size="2x" />
                <p>Click me</p>
              </TabIconWrapper>
            </TabsWrapper>
          }
          {...a11yProps(3)}
        />
        <Tab
          label={
            <TabsWrapper>
              <TabIconWrapper>
                <FontAwesomeIcon icon={faMale} color="white" size="2x" />
                <p>Human</p>
              </TabIconWrapper>
            </TabsWrapper>
          }
          {...a11yProps(4)}
        />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />  */}
      </Tabs>
      <TabsPanelWrapper>
        <Navbar />
        <TabPanel value={value} index={0} style={{ marginTop: "20px" }}>
          <DashboardContent />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ marginTop: "20px" }}>
          <DashboardContent />
        </TabPanel>
        <TabPanel value={value} index={2} style={{ marginTop: "20px" }}>
          This is table page dummy content 2
        </TabPanel>
        <TabPanel value={value} index={3} style={{ marginTop: "20px" }}>
          This is table page dummy content 3
        </TabPanel>
        <TabPanel value={value} index={4} style={{ marginTop: "20px" }}>
          This is table page dummy content 4
        </TabPanel>
        <TabPanel value={value} index={5} style={{ marginTop: "20px" }}>
          This is table page dummy content 5
        </TabPanel>
      </TabsPanelWrapper>
    </Box>
  );
}

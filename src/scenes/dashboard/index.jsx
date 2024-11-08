import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CalendarComponent from "../../components/CalendarComponent";
import useFetch from "../../hooks/useFetch";
import Icon from "../../components/Icon";
import DashboardIcon from '@mui/icons-material/Dashboard'; // Example icon for numbers
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Torch icon
import ErrorIcon from '@mui/icons-material/Error'; // Error icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import GlobalSalesByTopLocations from "../../components/GlobalSales";
import ProjectStatus from "../../components/ProjectStatus";
import { useMediaQuery } from 'react-responsive';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [increase, setIncrease] = useState("+0%");
  const [percentageChange, setPercentageChange] = useState("+0%");
  // const [movies, setMovies] = useState([])
  const [logo , setLogo] = "";
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
    // Responsive styling values
    const boxWidth = isDesktop ? "738px" : isTablet ? "600px" : "300px";
    const boxHeight = isDesktop ? "170px" : isTablet ? "140px" : "100px";
    const marginLeftValue = isDesktop ? "-780px" : isTablet ? "-400px" : "0px";
    const marginTopValue = isMobile ? "0px" : "-5px";
  {/*const { data : followers, loading, error } = useFetch('https://freetestapi.com/api/v1/movies')
  const { data : revenue, loading : revenueLoading, error: revenueError } = useFetch('https://freetestapi.com/api/v1/movies')
  const { data : numbers, loading : numbersLoading, error: numbersError } = useFetch('https://freetestapi.com/api/v1/movies')
  const { data : Emails, loading : EmailsLoading, error: EmailsError } = useFetch('https://freetestapi.com/api/v1/movies')
console.log('Movies',followers);*/}

  return (
    <Box m="20px" >
      {/* HEADER 
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box >
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box> */}
      {/* FollowStatBox Component */}
      {/* <FollowersStatBox setFollowersData={setFollowers} setIncreaseData={setIncrease} /> */}
      {/* <RevenueStatBox setRevenueData={setRevenue} setIncreaseData={setPercentageChange} />  */}
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        
      >
        {/* ROW 1 */}
       {/* <Box
          
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px' , outline : '#DFDFDF solid 1px'  }}
          height="141px"
          width= "257px"
          display="flex"
          alignItems="center"
          justifyContent="center"

        >
          <StatBox
            Emails={Emails}
            subtitle="Numbers"
            progress="0.75"
            increase="Update Now"
            icon={
              <DashboardIcon sx={{ color: 'green', fontSize: '48px'  }} />
            }
          />

        </Box>
        <Box
          
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px' ,outline : '#DFDFDF solid 1px'  }}
          height="141px"
          width= "257px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            revenue={revenue}
            subtitle="Revenue"
            increase="Last Day"
            icon={
              <WhatshotIcon sx={{ color: 'green', fontSize: '48px' }} />
            }
            logo = {
              <CalendarComponent />
            }
          />
        </Box>
        <Box
          
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px' , outline : '#DFDFDF solid 1px' }}
          height="141px"
          width= "257px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
           followers={followers}
            subtitle="Followers"
            increase= "In the last hour"
            icon={
              <FavoriteIcon sx={{ color: 'green', fontSize: '48px' }} />
        
            }
          />
  
          </Box>
        <Box
          
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px', outline : '#DFDFDF solid 1px'  }}
          height="141px"
          width= "257px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            numbers = {numbers}
            subtitle="Errors"
            progress="0.80"
            increase="Update Now"
            icon={
              <ErrorIcon sx={{ color: 'green', fontSize: '48px' }} />
            }
          />
        </Box>
       
        {/* ROW 2 */}
        <Box
        position="absolute"
        marginTop = {isDesktop ? "180px" : isTablet ? "180px" : "550px"}
marginLeft= {isDesktop ? "370px" : isTablet ? "240px" : "-10px"}
sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px', outline : '#DFDFDF solid 1px'  }}
width= {isDesktop ? "740px" : isTablet ? "730px" : "290px"}
height={isDesktop ? "393px" : isTablet ? "393px" : "700px"}

>       
        <ProjectStatus/>
        

   {/*     
        <Box
gridColumn="span 4"
gridRow="span 2"
backgroundColor={colors.primary[400]}
height="250px"
mt="28px"
overflow="auto"
>
<Box

  display="flex"
  justifyContent="space-between"
  alignItems="center"
  borderBottom={`4px solid ${colors.primary[500]}`}
  colors={colors.grey[100]}
  p="15px"
>
  <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
    Recent Transactions
  </Typography>
</Box>
{mockTransactions.map((transaction, i) => (
  <Box
    key={`${transaction.txId}-${i}`}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`4px solid ${colors.primary[500]}`}
    p="15px"
  >
    <Box>
      <Typography
        color={colors.greenAccent[500]}
        variant="h5"
        fontWeight="600"
      >
        {transaction.txId}
      </Typography>
      <Typography color={colors.grey[100]}>
        {transaction.user}
      </Typography>
    </Box>
    <Box color={colors.grey[100]}>{transaction.date}</Box>
    <Box
      backgroundColor={colors.greenAccent[500]}
      p="5px 10px"
      borderRadius="4px"
    >
      ${transaction.cost}
    </Box>
  </Box>
))}
</Box> */}
<Box 
        >
          <Box 
          marginLeft= {isDesktop ? "380px" : isTablet ? "380px" : "5px"}
          mt = {isDesktop ? "-550px" : isTablet ? "-550px" : "-250px"}
          height="1000px"   width={isDesktop ? "350px" : isTablet ? "350px" : "280px"}>
            <GeographyChart isDashboard />
          </Box>
        </Box>
        </Box>

        
        {/* ROW 3 */}
     
        <Box
        position="absolute"
          width = {isDesktop ? "353px" : isTablet ? "353px" : "290px"}
          height= "350px"
          marginTop = {isDesktop ? "-5px" : isTablet ? "-5px" : "180px"}
          marginLeft = {isDesktop ? "5px" : isTablet ? "-120px" : "-10px"}
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px', outline : '#DFDFDF solid 1px'  }}
          p="10px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
          </Box>
        
        </Box>
       
        <Box
          position="absolute"
          width = {isDesktop ? "738px" : isTablet ? "730px" : "290px"}
          height= "170px"
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px', outline : '#DFDFDF solid 1px'  }}
          marginLeft = {isDesktop ? "370px" : isTablet ? "240px" : "-10px"}
          mt = "-5px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Milestone Status
          </Typography>
          <Box height="250px" mt="20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
        position="absolute"
        width = {isDesktop ? "353px" : isTablet ? "353px" : "290px"}
        height= {isDesktop ? "499px" : isTablet ? "499px" : "600px"}
        marginTop = {isDesktop ? "350px" : isTablet ? "350px" : "1260px"}
        marginLeft = {isDesktop ? "5px" : isTablet ? "-120px" : "-10px"}
        sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px', outline : '#DFDFDF solid 1px'  }}
          
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Users Behaviour
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
               24 Hours performance
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="220px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;

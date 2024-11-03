import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useEffect, useState } from "react"; 
import CalendarComponent from "./CalendarComponent";

const StatBox = ({ subtitle, icon , increase, followers, revenue , numbers, Emails,logo }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" height="150px">
      <Box display="flex" justifyContent="space-between" >
        <Box> 
          <Box position= "absolute" marginTop= "20px" marginLeft= "20px"  >
          {icon}
          </Box>
          <Typography  mt = "20px" marginLeft= "170px"
            variant="h4"
            fontSize="14px"
            fontWeight= "500"
            sx={{ color: "#9a9a9a" }}
          >
           {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" marginLeft= "200px">
        <Typography  variant="h5" sx={{ color: "#333333" }} fontSize="22px">
          {followers ? followers.length : revenue ? revenue.length : numbers ? numbers.length : Emails ? Emails.length : "0"}
        </Typography>
      </Box>
      <hr style={{ marginTop: '40px', fontSize : "1px" , color : "#DFDFDF"}}  /> {/* Horizontal rule */}
      <Typography
          marginLeft= "40px"
          marginTop = "5px"
          variant="h5"
        
          sx={{ color: colors.greenAccent[600] }}
         
        >
          {increase}
        </Typography>
        <Typography       
        >
          {logo}
        </Typography>
    </Box>
  );
};

export default StatBox;

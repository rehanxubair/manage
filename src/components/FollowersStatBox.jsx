// FollowersStatBox.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FollowersStatBox = ({ setFollowersData, setIncreaseData }) => {
  const [previousFollowers, setPreviousFollowers] = useState(0); // Initial value

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get('/api/followers'); // Update with your API endpoint
        const newCount = response.data.followers;

        // Update followers data
        setFollowersData(newCount);

        // Calculate increase percentage
        const percentageIncrease = previousFollowers === 0
          ? 0
          : ((newCount - previousFollowers) / previousFollowers) * 100;
        setIncreaseData(`${percentageIncrease.toFixed(2)}%`);

        // Update previousFollowers for next calculation
        setPreviousFollowers(newCount);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers();

    // Optionally, set an interval to fetch updates every minute
    const intervalId = setInterval(fetchFollowers, 60000);
    
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [previousFollowers, setFollowersData, setIncreaseData]);

  return null; // This component doesn't render anything
};

export default FollowersStatBox;

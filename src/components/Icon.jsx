import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Example icon for numbers
import TorchIcon from '@mui/icons-material/Whatshot'; // Torch icon
import ErrorIcon from '@mui/icons-material/Error'; // Error icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Heart icon for followers

const iconsData = [
  { icon: DashboardIcon, label: "Numbers" },
  { icon: TorchIcon, label: "Torch" },
  { icon: ErrorIcon, label: "Errors" },
  { icon: FavoriteIcon, label: "Followers" },
];

const IconBox = ({ icon: Icon, label }) => {
  return (
    <div style={styles.box}>
      <Icon style={styles.icon} />
      <span style={styles.text}>{label}</span>
    </div>
  );
};

const IconComponent = () => {
  return (
    <div style={styles.container}>
      {iconsData.map((item, index) => (
        <IconBox key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',

  },
  icon: {
    fontSize: '48px',
    marginBottom: '8px',
    color: '#ffcc00',
  },
  text: {
    fontSize: '48px',
  },
};

export default IconComponent;

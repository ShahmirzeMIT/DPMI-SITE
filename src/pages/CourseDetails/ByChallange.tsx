import { useState } from 'react';
import { Box } from '@mui/material';
import { Avatar, Typography, Button } from 'antd';
import Logo from '../../assets/images/whatLearn.png';
import PointText from '../../componets/PointText';

interface WhatLearnSpfProps {
  data: { Id: string; ChallengeName: string }[];
}

export default function ByChallange({ data }: WhatLearnSpfProps) {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    if (visibleCount < data.length) {
      setVisibleCount((prev) => Math.min(prev + 8, data.length));
    }
  };

  const handleShowLess = () => {
    setVisibleCount(8); // Reset to show only the first 8 items
  };

  return (
    <Box sx={{ width: '100%', margin: '90px auto' }}>
      <Typography
        style={{
          color: 'black',
          fontSize: '36px',
          fontWeight: '400',
          textAlign: 'start',
          marginLeft: '10px',
          textTransform: 'uppercase',
          marginBottom: '50px',
        }}
      >
        <Avatar
          src={Logo}
          style={{ width: '70px', height: '70px', marginRight: '20px' }}
          shape="square"
        />
        CHALLENGES YOU WILL OVERCOME
      </Typography>
      <ul style={{ width: '100%', marginTop: '20px' }}>
        {data.slice(0, visibleCount).map((item, _index) => (
          <li
            key={item.Id}
            style={{
              color: 'black',
              fontSize: '18px',
              fontWeight: '200',
              textAlign: 'start',
              marginLeft: '40px',
              lineHeight: '30px',
              marginTop: '20px',
              listStyle: 'none',
            }}
          >
            <PointText />
            <span style={{ fontSize: '24px' }}>{item.ChallengeName}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', marginLeft: '40px' }}>
      {visibleCount < data.length && (
          <span
            onClick={handleShowMore}
            style={{
              cursor: 'pointer',
              color: '#2A73B3',
              fontSize: '18px',
              textDecoration: 'underline',
              marginRight: '10px',
            }}
          >
            Show More
          </span>
        )}
        {visibleCount > 8 && (
          <span
            onClick={handleShowLess}
            style={{
              cursor: 'pointer',
              color: 'red',
              fontSize: '18px',
              textDecoration: 'underline',
            }}
          >
            Show Less
          </span>
        )}
      </div>
    </Box>
  );
}

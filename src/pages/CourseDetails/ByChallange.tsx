import { useState } from 'react';
import { Box } from '@mui/material';
import { Avatar, Typography } from 'antd';
import Logo from '../../assets/images/challenges.png';
import PointText from '../../componets/PointText';

interface WhatLearnSpfProps {
  data: { Id: string; ChallengeName: string,GroupName:string }[];
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

  if (data.length == 0) {
    return (
      <Box sx={{ width: '100%', margin: '90px auto' }}>
        <Typography
          style={{
            color: 'red',
            fontSize: '36px',
            fontWeight: '400',
            marginLeft: '10px',
            textTransform: 'uppercase',
            marginBottom: '50px',
            textAlign:'center'
          }}
        >
        {"Records Not Founded"}
        </Typography>
          </Box>
          )
          }

  return (
    <Box sx={{ width: '100%', margin: '90px auto' }}>
      <Typography
        style={{
          color: 'black',
          fontSize: '28px',
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
        {data.length>0 ? data.slice(0, visibleCount).map((item, _index) => (
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
            <span style={{ fontSize: '18px' }}>{item.ChallengeName}</span>
            <span style={{fontSize:'16px',color:'black', opacity: '0.7'}}>{` [${item.GroupName}]`}</span>
          </li>
        )): <Typography style={{textAlign:'center',color:'red'}}>{"Records Not Founded"}</Typography>}
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

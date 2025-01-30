import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'
import PointText from '../../componets/PointText'

interface WhatLearnSpfProps {
  data: { title: string; desc: string }[]
}

export default function WhatLearnSpf({ data }: WhatLearnSpfProps) {
  return (
    <Box sx={{ width: '90%', margin: '90px auto' }}>
      <Typography
        style={{
          color: 'black',
          fontSize: '28px',
          fontWeight: '400',
          textAlign: 'start',
          marginLeft: '10px',
          textTransform: 'uppercase',
          marginBottom:'40px'
        }}
      >
        <Avatar
          src={Logo}
          style={{ width: '70px', height: '70px', marginRight: '20px' }}
          shape="square"
        />
        What you will learn
      </Typography>
      <ul
        style={{
          width: '100%',
          marginTop: '20px',
          whiteSpace: 'normal',
          padding: 0,
        }}
      >
        {data.map((item, _index) => (
          <li
            key={_index}
            style={{
              color: 'black',
              fontSize: '18px',
              fontWeight: '200',
              textAlign: 'start',
              marginLeft: '40px',
              lineHeight: '30px',
              marginTop: '20px',
              listStyle: 'none',
              whiteSpace: 'normal',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                flexDirection: 'column',
              }}
            >

              <span
                style={{
                  fontSize: '18px',
                  whiteSpace: 'normal',
                  maxWidth: '100%',
                  display: 'block',
                }}
              >
            <PointText />
            {item.title}
              </span>
              <div
                style={{
                  marginLeft: '30px',
                  whiteSpace: 'normal',
                  maxWidth: '100%',
                  fontSize: '16px',
                }}
              >
                {item.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  )
}

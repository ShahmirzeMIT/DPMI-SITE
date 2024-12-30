import { useEffect, useState } from 'react';
import MyNeeds from './MyNeeds';
import { callApi } from '../../utils/callApi';
import { Box } from '@mui/material';

interface Challenge {
  Id: string;
  ChallengeName: string;
  FkChallengesGroupId: string;
  LongDesc: string;
  ShortDesc: string;
}

interface Group {
  Id: string;
  GroupName: string;
  ShortDesc: string;
  ImgUrl: string;
  Challenges: Challenge[];
}

export default function MyNeedsDetail() {
  const [groupedData, setGroupedData] = useState<{ 
    GroupName: string
    ShortDesc: string
    Id: string
    ImgUrl: string  
    Challenges: {
      Id: string
      ChallengeName: string;
      FkChallengesGroupId: string;
      LongDesc: string
      ShortDesc: string
    }[]
   }[]>([]);

  const getData = async () => {
      const challenges: Challenge[] = await callApi('/lms/main/myneeds/challenges/list');
      const groups: Omit<Group, 'Challenges'>[] = await callApi('/lms/main/myneeds/group/list');

      const grouped = groups.map(group => ({
        ...group,
        Challenges: challenges.filter(challenge => challenge.FkChallengesGroupId === group.Id),
      }));

      setGroupedData(grouped as any);
   
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ marginTop: '120px' }}>
      {
        groupedData.map((item, _index) => (
          <Box sx={{marginBottom:'40px'}}>
            <MyNeeds data={item} key={item.Id} />

          </Box>
        ))
      }
    </div>
  );
}

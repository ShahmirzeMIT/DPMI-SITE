import { useEffect, useState } from 'react';
import MyNeeds from './MyNeeds';
import { callApi } from '../../utils/callApi';
import { Box } from '@mui/material';
import MyNeedsSearch from './MyNeedsSearch';
import MyNeedsIntroduce from './MyNeedsIntroduce';

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
  const [groupedData, setGroupedData] = useState<Group[]>([]);
  const [filteredData, setFilteredData] = useState<Group[]>([]); // Filtrlənmiş datanı saxlamaq üçün

  const getData = async () => {
    
    const challenges: Challenge[] = await callApi('/lms/main/myneeds/challenges/list');
    const groups: Omit<Group, 'Challenges'>[] = await callApi('/lms/main/myneeds/group/list');

    const grouped = groups.map(group => ({
      ...group,
      Challenges: challenges.filter(challenge => challenge.FkChallengesGroupId === group.Id),
    }));

    setGroupedData(grouped);
    setFilteredData(grouped);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearchData = (value: string) => {
    if (value.trim() === '') {
      setFilteredData(groupedData);
      return;
    }

    // Filtrləmə prosesi
    const filtered = groupedData.map(group => ({
      ...group,
      Challenges: group.Challenges.filter(challenge =>
        challenge.ChallengeName.toLowerCase().includes(value.toLowerCase())
      ),
    })).filter(group => group.Challenges.length > 0); // Boş Challenge qruplarını göstərmə

    setFilteredData(filtered); // Filtrlənmiş nəticəni saxla
  };


  
  return (
    <div style={{ marginTop: '120px' }}>
      {/* Axtarış komponenti */}
      <MyNeedsIntroduce/>
      <MyNeedsSearch onSearchData={onSearchData} />

      {/* Filtrlənmiş datanı göstər */}
      {filteredData.map((item, _index) => (
        <Box sx={{ marginBottom: '40px' }} key={item.Id}>
          <MyNeeds data={item} />
        </Box>
      ))}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { callApi } from '../../utils/callApi';
import { Box } from '@mui/material';
import MySkillsIntroduce from './MySkillsIntroduce';
import MyNeedsSearch from '../MyNeeds/MyNeedsSearch';
import MySkills from './MySkills';

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

export default function MySkillsDetail() {
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
    setFilteredData(grouped); // İlk olaraq groupedData-nı filteredData-ya kopyala
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearchData = (value: string) => {
    if (value.trim() === '') {
      // Əgər input boşdursa, groupedData-nı ilkin vəziyyətinə qaytar
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
      <MySkillsIntroduce/>
      <MyNeedsSearch onSearchData={onSearchData} />

      {/* Filtrlənmiş datanı göstər */}
      {filteredData.map((item, _index) => (
        <Box sx={{ marginBottom: '40px' }} key={item.Id}>
          <MySkills data={item} />
        </Box>
      ))}
    </div>
  );
}

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxLink, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Introduction to Cloud Computing'},
  { number: 2, text: 'Introduction to Web Development with HTML, CSS, JavaScript', },
  { number: 3, text: 'Developing Cloud Native Applications', },
  { number: 4, text: 'Developing Cloud Apps with Node.js and React', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Certificates</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            {/* <BoxNum>
              {`${card.number}`}
            </BoxNum> */}
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

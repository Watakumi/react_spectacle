import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Progress,
} from 'spectacle';
import { customTheme } from './theme/main-theme';

function App() {
  return (
    <Deck theme={customTheme} template={template}>
      <Slide backgroundColor='primary'>
        <CustomHeading headerText='Spectacle使ってみた' />
        <FlexBox justifyContent='center'>
          <img
            src='https://formidable.com/open-source/spectacle/static/logo_spectacle.7afbf241.png'
            width='40%'
            alt='spectacle'
          />
        </FlexBox>
      </Slide>
      <Slide backgroundColor='white'>
        <SlideTitle slideTitleText='1. 概要' />
      </Slide>
    </Deck>
  );
}

const CustomHeading = ({ headerText }) => {
  return <Heading color='white'>{headerText}</Heading>;
};

const SlideTitle = ({ slideTitleText }) => {
  return (
    <Heading textAlign='left' fontSize='slideTitle' padding='0px'>
      {slideTitleText}
    </Heading>
  );
};

const template = ({ hedearText }) => {
  return (
    <FlexBox
      justifyContent='space-between'
      position='absolute'
      bottom={0}
      width={1}>
      <Box padding='0 1em'>
        <FullScreen color='black' />
      </Box>
      <Box padding='1em'>
        <Progress color='black' />
      </Box>
    </FlexBox>
  );
};
export default App;

import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import media from '@theme/MediaQueries';
import { zIndex } from '@theme/Variables';

export const StyledMain = styled.main`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CardBox = styled(Box)`
  margin: 24px 0 32px;
  padding: 32px 34px;
  width: 100%;
  max-height: 400px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  z-index: ${zIndex.upper};

  ${media.max.md`
     margin: 16px 0;
     padding: 26px 28px;
     max-height: 390px;
  `}

  ${media.max.sm`
     width: 100%;
     padding: 26px 20px;
  `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: ${zIndex.low};
  }
`;

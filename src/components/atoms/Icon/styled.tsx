import { defaultColorIcon } from '@theme/Colors';
import styled, { css } from 'styled-components';

export const StyledIcon = styled.i`
    color: ${(props:any) => (!!props.color ? props.color : defaultColorIcon)} !important;
`;

const iconStyles = {
    StyledIcon,
};

export default iconStyles;

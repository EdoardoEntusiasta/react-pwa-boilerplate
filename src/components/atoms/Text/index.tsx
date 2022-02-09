
import { TextWrapper, StyledText } from './styled';
import { IText } from './interfaces';
import { Typography } from '@mui/material';

const Text = ({ tag, strong, type, gradient, color, align, text }: IText) => {

    return (
        <Typography>
            { text }
        </Typography>
    );
};

Text.defaultProps = {
    tag: 'p',
    type: 'body_regular',
};

export default Text;

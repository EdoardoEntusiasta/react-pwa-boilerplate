import { StyledButton } from './styled';
import IButton from './interfaces';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  variant,
  ...props
}: IButton) => {
  return (
    <StyledButton {...props} variant={variant ? variant : 'contained'}>{label}</StyledButton>
  );
};

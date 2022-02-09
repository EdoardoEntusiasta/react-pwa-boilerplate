import { IGradient } from '@utils/GlobalInterfaces';

export interface IIcon extends IGradient {
    icon: string;
    on_click?: (event: React.MouseEvent<HTMLElement>) => void;
}

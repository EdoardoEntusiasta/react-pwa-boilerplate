import { IBase } from '@utils/GlobalInterfaces';
import { ReactNode } from 'react';

export interface IModal extends IBase {
    open: boolean;
    on_click?: (a: any) => void;
    set_open?: (b: boolean) => void;
    footer?: ReactNode | null;
    dismiss_click_out?: boolean;
}

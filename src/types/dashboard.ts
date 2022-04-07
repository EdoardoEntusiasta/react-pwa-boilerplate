import { ReactElement, SVGProps } from 'react';
import { DashboardService } from '@appTypes/services';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type IconType = OverridableComponent<SvgIconTypeMap> & { muiName: string };

export type DashboardServiceColorType = 'blue' | 'red';

export interface IDashboardRowItem {
  id: string;
  name: string;
  color: DashboardServiceColorType;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  services: IDashboardServiceItem[];
}

export interface IDashboardServiceItem {
  id: string;
  url: string;
  descrizione: DashboardService | 'unknown';
  subtitle: string;
  Icon: IconType;
  isActive: boolean;
}

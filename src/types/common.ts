import { USER_ROLES } from '@/constants/role';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type TMeta = {
	page: number;
	limit: number;
	total: number;
};

export type TUserRole = keyof typeof USER_ROLES;

export interface TDrawerItem {
	title: string;
	path: string;
	parentPath?: string;
	icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
	child?: TDrawerItem[];
}

export type TResponseSuccess = {
	success: boolean;
	data: any;
	meta?: TMeta;
};

export type TGenericErrorResponse = {
	success: boolean;
	statusCode: number;
	message: string;
	errorMassages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
	path: string | number;
	message: string;
};

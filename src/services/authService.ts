import { state } from '../store';
import { capilogApiInstance as service, updateToken } from './instanceManager';

export const authService = {
	login: (data: { dni: string; password: string }) => service.post(`auth/login`, data).then((response => {
		if (response.data.errors) return;
		state.user = response.data.data[0].data.user;
		updateToken(response.data.data[0].data.accessToken);
	})),
};

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
        data: {},
        token: null,
        isAuthenticated: false
	}),
	actions: {
		eraseUserData() {
            this.data = {};
            this.token = null;
            this.isAuthenticated= false
		},
	},
	persist: true,
});

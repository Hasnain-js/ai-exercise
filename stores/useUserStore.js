import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: {
        data: {},
        token: null,
    },
    actions: {
        eraseUserData() {
            this.data = {};
            this.token = null;
        }
    },
    preset: true
})

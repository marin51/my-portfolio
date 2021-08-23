import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import axios from 'axios';
import {Project, RootState} from "@/store/types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        projects: [
            {
                name: '',
                description: ''
            }
        ]
    },
    mutations: {
        setProjects: (state, payload: Project[]) => {
            state.projects = payload;
        },
        deleteProject: (state, payload: number) => {
            if (payload >= 0) {
                state.projects.splice(payload, 1);
            }
        },
        addProject: (state, payload: Project) => {
            state.projects.unshift(payload);
        }
    },
    getters: {
        getProjects: (state): Project[] => {
            return state.projects;
        }
    },
    actions: {
        fetchProjects: ({commit}): void => {
            axios.get('../projects.json').then((result: any) => {
                const payload: Project[] = result.data;
                commit('setProjects', payload);
            })
        },
        deleteProject: (context, payload: number): void => {
            context.commit('deleteProject', payload);
        },
        addProject: (context, payload: Project): void => {
            context.commit('addProject', payload);
        },
    }
};
export default new Vuex.Store<RootState>(store);

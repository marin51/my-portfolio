import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import axios from 'axios';
import {IProject, IAbout, RootState} from "@/store/types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        projects: [
            {
                name: '',
                description: ''
            }
        ],
        about: {
            title: '',
            subTitle: '',
            description: ''
        }
    },
    mutations: {
        setProjects: (state, payload: IProject[]) => {
            state.projects = payload;
        },
        setAbout: (state, payload: IAbout) => {
            state.about = payload;
        },
        deleteProject: (state, payload: number) => {
            if (payload >= 0) {
                state.projects.splice(payload, 1);
            }
        },
        addProject: (state, payload: IProject) => {
            state.projects.unshift(payload);
        }
    },
    getters: {
        getProjects: (state): IProject[] => {
            return state.projects;
        },
        getDescription: (state): string => {
            return state.about.description;
        },
        getAppTitle: (state): string => {
            return state.about.title;
        },
        getAppSubTitle: (state): string => {
            return state.about.subTitle;
        }
    },
    actions: {
        fetchProjects: ({commit}): void => {
            axios.get('../projects.json').then((result: any) => {
                const payload: IProject[] = result.data;
                commit('setProjects', payload);
            })
        },
        fetchAbout: ({commit}): void => {
            axios.get('../about.json').then((result: any) => {
                const payload: IProject[] = result.data;
                commit('setAbout', payload);
            })
        },
        deleteProject: (context, payload: number): void => {
            context.commit('deleteProject', payload);
        },
        addProject: (context, payload: IProject): void => {
            context.commit('addProject', payload);
        },
    }
};
export default new Vuex.Store<RootState>(store);

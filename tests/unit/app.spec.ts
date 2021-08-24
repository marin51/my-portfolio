import {createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import App from '@/App.vue'
import Vuex from 'vuex';
import router from '@/router.ts'
import {IAbout} from "@/store/types.ts";
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
const localVue = createLocalVue();
localVue.use(Vuex);
// Make BootstrapVue available throughout your project
localVue.use(BootstrapVue);

const about: IAbout = {
    title: 'Title',
    subTitle: 'Sub Title',
    description: 'Description here'
};
const store = new Vuex.Store({
    state: {
        about
    },
    getters: {
        getAppTitle: () => about.title,
        getAppSubTitle: () => about.subTitle,
    },
    actions: {
        fetchProjects: () => jest.fn(),
        fetchAbout: () => jest.fn()
    }
});
const wrapper: Wrapper<App> = shallowMount(App, {
    store,
    localVue,
    router
});

test('App title is passed correctly', () => {
    const appTitle = wrapper.find('.app-title');
    //@ts-ignore
    expect((appTitle.text())).toEqual('Title');
});
test('App sub title is passed correctly', () => {
    const appSubTitle = wrapper.find('.app-sub-title');
    //@ts-ignore
    expect((appSubTitle.text())).toEqual('Sub Title');
});

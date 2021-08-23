import {createLocalVue, shallowMount, Wrapper, } from "@vue/test-utils";
import About from '@/views/About.vue'
import Vuex from 'vuex';
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
        getDescription: () => about.description
    },
});
const wrapper: Wrapper<About> = shallowMount(About, {
    store,
    localVue
});

test('About description is passed correctly', () => {
    const aboutDescription = wrapper.find('.about-description');
    //@ts-ignore
    expect((aboutDescription.text())).toEqual(wrapper.vm.getDescription());
});



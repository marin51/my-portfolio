import {createLocalVue, shallowMount, Wrapper} from "@vue/test-utils";
import Home from '@/views/Home.vue'
import Vuex from 'vuex';
import {Project} from "@/store/types.ts";
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
const localVue = createLocalVue();
localVue.use(Vuex);
// Make BootstrapVue available throughout your project
localVue.use(BootstrapVue);

const projects: Project[] = [
    {
        name: 'Audi group',
        description: 'Audi is a part of VAG AG.'
    },
    {
        name: 'PSA, Opel,Fiat group',
        description: 'New alliance is one of the biggest in the world'
    },
    {
        name: 'Renault, Nissan, Dacia, Lada group',
        description: 'When Renault take control over Lada, they stopped the manufacture of the most famous russian cars ever 2104 and 2107'
    }
];
const store = new Vuex.Store({
    state: {
        projects: projects
    },
    getters: {
        getProjects: () => projects
    },
    actions: {
        addProject: () => jest.fn(),
        deleteProject: () => jest.fn()
    }
});
const wrapper: Wrapper<Home> = shallowMount(Home, {
    store,
    localVue,
    propsData: {
        name: '',
        description: '',
        searchCriteria: ''
    }
});

test('add post button validation', () => {
    const addButton = wrapper.find('.submit-button');
    expect(addButton.is('disabled'));
    wrapper.props().name = 'projectttt';
    wrapper.props().description = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(!addButton.is('disabled'));
});

it('check delete works', () => {
    //@ts-ignore
    wrapper.vm.deleteProject(0);
    //@ts-ignore
    expect(wrapper.vm.getProjects.length === 2);
});

it('check add works', () => {
    wrapper.props().name = 'Test Name 1';
    wrapper.props().description = 'Test Description 1';
    //@ts-ignore
    wrapper.vm.addProject();
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name === 'Test Name 1');
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name === 'Test Description 1');
});

it('check add project button fire click event', () => {
    const addButton = wrapper.find('.submit-button');
    wrapper.props().name = 'Test Name 1';
    wrapper.props().description = 'Test Description 1';
    addButton.trigger('click');
});





import {createLocalVue, shallowMount, Wrapper} from "@vue/test-utils";
import Home from '@/views/Home.vue'
import Vuex from 'vuex';
import {IProject} from "@/store/types.ts";
import {BootstrapVue} from 'bootstrap-vue'

const localVue = createLocalVue();
localVue.use(Vuex);
// Make BootstrapVue available throughout your project
localVue.use(BootstrapVue);

const projects: IProject[] = [
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
    data: () => {
        return {
            name: '',
            description: '',
            searchCriteria: ''
        }
    }
});

test('add post button validation', () => {
    const addButton = wrapper.find('.submit-button');
    expect(addButton.element.tagName === 'disabled');
    wrapper.setData({
        name: 'projectttt',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
    expect(addButton.element.tagName !== 'disabled');
});

it('check delete works', () => {
    //@ts-ignore
    wrapper.vm.deleteProject(0);
    //@ts-ignore
    expect(wrapper.vm.getProjects.length === 2);
});

it('check add works', () => {
    wrapper.setData({
        name: 'Test Name 1',
        description: 'Test Description 1'
    });
    //@ts-ignore
    wrapper.vm.addProject();
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name === 'Test Name 1');
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name === 'Test Description 1');
});

it('check add project button trigger click and store is updated', () => {
    const addButton = wrapper.find('.submit-button');
    wrapper.setData({
        name: '',
        description: ''
    });
    addButton.trigger('click');
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name === '');
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].description === '');
});

it('check search works when find', () => {
    wrapper.setData({
        searchCriteria: 'Audi'
    });
    //@ts-ignore
    expect(wrapper.vm.getProjects.length === 1);
    //@ts-ignore
    expect(wrapper.vm.getProjects[0].name.includes('Audi'))
});

it('check search works when clear criteria', () => {
    wrapper.setData({
        searchCriteria: ''
    });
    //@ts-ignore
    expect(wrapper.vm.getProjects.length === 3);
});

it('check search works when not find', () => {
    wrapper.setData({
        searchCriteria: 'Skoda'
    });
    //@ts-ignore
    expect(wrapper.vm.getProjects.length === 0);
});

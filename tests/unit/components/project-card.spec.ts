import {createLocalVue, shallowMount, Wrapper} from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue'
import ProjectCard from '@/components/ProjectCard.vue';
const localVue = createLocalVue();
// Make BootstrapVue available throughout your project
localVue.use(BootstrapVue);

const wrapper: Wrapper<ProjectCard> = shallowMount(ProjectCard, {
    localVue,
    propsData: {
        project: {
            index: 3,
            name: 'Mercedes-Benz group',
            description: 'Mercedes-Benz includes many manufacturers'
        }
    }
});

it('check if name is passed', () => {
    expect(wrapper.text()).toContain(wrapper.props().name);
});

it('check if description is passed', () => {
    expect(wrapper.text()).toContain(wrapper.props().description);
});
it('emit event with payload to the parent element', () => {
    const deleteButton = wrapper.find('.delete-button');
    deleteButton.trigger('click');
    expect(wrapper.emitted().delete).toEqual( [[wrapper.props().index]]);
});

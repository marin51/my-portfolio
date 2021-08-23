import {shallowMount, Wrapper} from '@vue/test-utils';
import ProjectCard from '@/components/ProjectCard.vue';

const wrapper: Wrapper<ProjectCard> = shallowMount(ProjectCard, {
    propsData: {
        project: {
            index: 3,
            name: 'Mercedes-Benz group',
            description: 'Mercedes-Benz includes many manufacturers'
        }
    }
});

it('check if name and description are passed', () => {
    expect(wrapper.text()).toContain(wrapper.props().name);
    expect(wrapper.text()).toContain(wrapper.props().description);
});

it('emit event with payload to the parent element', () => {
    const deleteButton = wrapper.find('.delete-button');
    deleteButton.trigger('click');
    expect(wrapper.emitted().delete).toEqual( [[wrapper.props().index]]);
});

// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import About from "@/views/About.vue";

test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(About, {
        propsData: {
            description: 'About author'
        }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('About author')
});

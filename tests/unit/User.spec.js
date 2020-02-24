import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import User from '@/components/User.vue';

describe('User component: specified avatar src', () => {
  const wrapper = shallowMount(User, {
    propsData: {
      data: {
        picture: null,
        title: 'ms',
        firstname: 'tester',
        lastname: 'testson',
      },
    },
  });

  it('shows default picture if no avatar loaded', () => {
    const defaulted = wrapper.vm.defaultAvatar.src;
    expect(wrapper.vm.avatarSrc).to.equal(defaulted);
  });
  it('shows default alternative text for avatar if no avatar loaded', () => {
    const defaulted = wrapper.vm.defaultAvatar.description;
    expect(wrapper.vm.avatarDescription).to.equal(defaulted);
  });

  it('capitalize name parts', () => {
    expect(wrapper.vm.fullName).to.equal('Ms Tester Testson');
  });
});

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import UsersList from '@/components/UsersList.vue';

describe('UsersList component: ', () => {
  const wrapper = shallowMount(UsersList, {
    propsData: {
      users: [],
    },
  });

  it('not visible when "users" prop is an empty array', () => {
    expect(wrapper.vm.wrapperClass).to.not.include('visible');
  });
});

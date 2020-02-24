import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import UsersRequestParser from '@/components/UsersRequestParser.vue';

describe('UsersRequestParser component', () => {
  const wrapper = shallowMount(UsersRequestParser, {
    propsData: {
      url: '/api/testtakers.json',
    },
  });

  /*
    TODO: find a proper moch for testing acyns data
  */
  it('handles ajax errors ', () => {
    /* eslint-disable no-unused-expressions */
    expect(wrapper.vm.loadingFailed).to.be.false;
    /* eslint-enable no-unused-expressions */
  });
});

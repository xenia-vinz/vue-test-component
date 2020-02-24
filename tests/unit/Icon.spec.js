import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import Icon from '@/components/Icon.vue';

describe('Icon component', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      type: 'has spaces',
      extraClass: 'nospaces',
    },
  });

  it('doesn`t have spaces in class names', () => {
    expect(wrapper.vm.iconClass.join()).to.not.include(' ');
  });
});

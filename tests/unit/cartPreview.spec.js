import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

test('deneme', () => {
  const wrapper = mount(App)
  expect(wrapper).toBeDefined()
})

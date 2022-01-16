import { mount } from '@vue/test-utils'
import CartPreview from '../../src/components/CartPreview.vue'
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'

describe('CartPreview', () => {
  it('Cart preview renderlanıyor', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(CartPreview, {
      global: {
        plugins: [router, store]
      }
    })
    expect(wrapper.findComponent(CartPreview).exists()).toBe(true)
  })

  it('İmleç üstüne geldiğinde gösterilip, ayrıldığında gizleniyor', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(CartPreview, {
      global: {
        plugins: [router, store]
      }
    })

    const cartPreview = wrapper.get('#preview')
    // İmleç üstüne gelmeden önce 'current-dropdown' classına sahip olmamalı
    expect(cartPreview.classes()).not.toContain('current-dropdown')

    // İmleç üstüne getirildi
    await cartPreview.trigger('mouseenter')

    // İmleç üstünde iken 'current-dropdown' classına sahip olmalı
    expect(cartPreview.classes()).toContain('current-dropdown')

    // İmleç üzerinden ayrıldı
    await cartPreview.trigger('mouseleave')

    // İmleç üstünden ayrıldıktan sonra 'current-dropdown' classına sahip olmamalı
    expect(cartPreview.classes()).not.toContain('current-dropdown')
  })
})

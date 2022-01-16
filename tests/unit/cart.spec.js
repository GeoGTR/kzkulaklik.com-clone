import { mount } from '@vue/test-utils'
import Cart from '../../src/components/Cart.vue'
import ProductView from '../../src/components/ProductView.vue'
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'

describe('Cart', () => {
  it('Cart renderlanıyor', async () => {
    router.push('/cart')
    await router.isReady()
    const wrapper = mount(Cart, {
      global: {
        plugins: [router, store]
      }
    })
    // Componenet renderlanmalı
    expect(wrapper.findComponent(Cart).exists()).not.toBeFalsy()
  })

  it('Ürün kaldırma çalışıyor', async () => {
    await store.dispatch('fetchData')
    router.push('/product/1')
    await router.isReady()
    const wrapper1 = mount(ProductView, {
      global: {
        plugins: [router, store]
      }
    })
    const addButton = wrapper1.get('#addToCart')
    await addButton.trigger('click')

    // --------- //
    router.push('/cart')
    await router.isReady()
    const wrapper = mount(Cart, {
      global: {
        plugins: [router, store]
      }
    })
    const removeButton = wrapper.get('#removeProduct')
    await removeButton.trigger('click')

    const cart = wrapper.vm.$store.getters.productsInCart
    var ids = []
    cart.forEach(element => {
      ids.push(element.product.id)
    })
    expect(ids).not.toEqual(expect.arrayContaining([1]))
  })
})

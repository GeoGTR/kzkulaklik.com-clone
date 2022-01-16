import { mount } from '@vue/test-utils'
import ProductView from '../../src/components/ProductView.vue'
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'

describe('ProductView', () => {
  it('Ürün sayfası doğru şekilde açılıyor', async () => {
    await store.dispatch('fetchData')
    router.push('/product/1')
    await router.isReady()
    const wrapper = mount(ProductView, {
      global: {
        plugins: [router, store]
      }
    })
    // Component renderlanmalı
    expect(wrapper.findComponent(ProductView).exists()).toBeTruthy()

    // Doğru ürün seçilmiş olmalı
    const selectedProduct = store.getters.selectedProduct
    expect(selectedProduct.id).toEqual(1)

    // Sayfada doğru ürün yazmalı
    const productNameOnPage = wrapper.get('#productName').text()
    expect(productNameOnPage).toEqual(selectedProduct.productName)
  })

  it('Sepete ekleme çalışıyor', async () => {
    await store.dispatch('fetchData')
    router.push('/product/1')
    await router.isReady()
    const wrapper = mount(ProductView, {
      global: {
        plugins: [router, store]
      }
    })

    const addButton = wrapper.get('#addToCart')
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    // Sepete ekle butonuna tıklandı
    await addButton.trigger('click')

    // Dispatch fonksiyonu bir kez çağırılmış olmalı
    expect(spy).toHaveBeenCalledTimes(1)

    // Sepette eklenen ürün bulunmalı
    const productsInCart = wrapper.vm.$store.getters.productsInCart
    const filteredCart = productsInCart.find(p => p.product.id === 1)
    expect(filteredCart).toBeDefined()
  })
})

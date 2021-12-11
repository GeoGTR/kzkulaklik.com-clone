import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    comments: [],
    cart: [],
    selectedProduct: 0,
    selectedPage: 'home',
    products: [
      {
        id: 1,
        imgSrc: require('@/assets/products/main.jpg'),
        altimgSrc: require('@/assets/products/alt.jpg'),
        productName: 'ürün 1',
        originalPrice: '100',
        discountedPrice: '90'
      },
      {
        id: 2,
        imgSrc: require('@/assets/products/alt.jpg'),
        altimgSrc: require('@/assets/products/main.jpg'),
        productName: 'ürün 2',
        originalPrice: '200',
        discountedPrice: '180'
      }
    ]
  },
  mutations: {
    setSelectedProduct (state, id) {
      state.selectedProduct = id
    },

    setSelectedPage (state, page) {
      state.selectedPage = page
    }
  },
  actions: {
    addToCart (context, product) {},

    removeFromCart (context, product) {},

    selectProduct (context, id) {
      context.commit('setSelectedProduct', id)
    },

    selectPage (context, page) {
      context.commit('setSelectedPage', page)
    }
  },
  modules: {
  }
})

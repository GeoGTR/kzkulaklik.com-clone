
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    comments: [],
    descriptions: [],
    selectedProduct: 0,
    selectedTab: 'description',
    selectedPage: 'home',
    filteredProducts: [],
    cart: [],
    products: []
    /* {
        id: 0,
        imgSrc: require('@/assets/products/main.jpg'),
        altimgSrc: require('@/assets/products/alt.jpg'),
        productName: 'ürün 1',
        description: 'KZ ZSN Pro 1BA+1DD Dengeli Armatür ve Dinamik Sürücü Hibrit, HD Mikrofonlu, Gürültü Azaltıcı Kulak İçi Kulaklık',
        category: 'kulaklik',
        stars: 5,
        originalPrice: 100,
        discountedPrice: 90
      },
      {
        id: 1,
        imgSrc: require('@/assets/products/alt.jpg'),
        altimgSrc: require('@/assets/products/main.jpg'),
        productName: 'ürün 2',
        description: '*2 KZ ZSN Pro 1BA+1DD Dengeli Armatür ve Dinamik Sürücü Hibrit, HD Mikrofonlu, Gürültü Azaltıcı Kulak İçi Kulaklık',
        category: 'kablo',
        stars: 2.5,
        originalPrice: 200,
        discountedPrice: 180
      } */
  },
  mutations: {
    setSelectedProduct (state, id) {
      state.selectedProduct = id
    },

    setSelectedPage (state, page) {
      state.selectedPage = page
    },

    setSelectedTab (state, tab) {
      state.selectedTab = tab
    },

    setCart (state, filteredCart) {
      state.cart = filteredCart
    },

    increaseCount (state, id) {
      state.cart[id].count++
    },

    decreaseCount (state, id) {
      state.cart[id].count--
    },

    setFilteredProducts (state, products) {
      state.filteredProducts = products
    },

    setProducts (state, data) {
      state.products = data
    },

    setComments (state, data) {
      state.comments = data
    },

    setDescriptions (state, data) {
      state.descriptions = data
    }
  },
  actions: {
    addToCart (context, iCount) {
      var cart = context.state.cart
      var selectedProduct = context.state.selectedProduct
      var productInCart = cart.filter(listing => listing.id === selectedProduct)
      console.log(productInCart.length)
      if (productInCart.length === 0) {
        cart.push({ id: selectedProduct, count: iCount })
      } else {
        var index = cart.findIndex(listing => listing.id === selectedProduct)
        cart[index].count += iCount
      }
    },

    removeFromCart (context, id) {
      var cart = context.state.cart
      var filteredCart = cart.filter(c => c.id !== id)
      context.commit('setCart', filteredCart)
    },

    selectProduct (context, id) {
      context.commit('setSelectedProduct', id)
    },

    selectPage (context, page) {
      context.commit('setSelectedPage', page)
    },

    selectTab (context, tab) {
      context.commit('setSelectedTab', tab)
    },

    increaseCount (context, id) {
      context.commit('increaseCount', id)
    },

    decreaseCount (context, id) {
      context.commit('decreaseCount', id)
    },

    filterProducts (context, category) {
      var temp = []
      if (category === 'all') {
        temp = context.state.products
      } else {
        temp = context.state.products.filter(p => p.category === category)
      }
      context.commit('setFilteredProducts', temp)
    },

    async fetchData (context) {
      var products = await axios.get('http://localhost:3000/products')
      var comments = await axios.get('http://localhost:3000/comments')
      var descriptions = await axios.get('http://localhost:3000/descriptions')
      context.commit('setProducts', products.data)
      context.commit('setComments', comments.data)
      context.commit('setDescriptions', descriptions.data)
    }
  },
  getters: {
    listingTotal: (state) => (id) => {
      if (id < state.cart.length) {
        // return state.cart.filter(c => c.id === id)[0].count * state.products.filter(p => p.id === id)[0].discountedPrice
        return state.cart.find(c => c.id === id).count * state.products.find(p => p.id === id).discountedPrice
      }
      return -1
    },
    cartTotal: state => {
      var total = 0
      state.cart.forEach(listing => {
        total += listing.count * state.products.find(p => p.id === listing.id).discountedPrice
      })
      return total
    },

    returnProductName: (state) => (id) => {
      return state.products.find(p => p.id === id).productName
    },

    selectedProduct: state => {
      return state.products.find(p => p.id === state.selectedProduct)
    },

    reviewCount: state => {
      return state.comments.filter(c => c.id === state.selectedProduct).length
    },

    currentReviews: state => {
      return state.comments.filter(c => c.id === state.selectedProduct)
    },

    currentDescription: state => {
      return state.descriptions.find(d => d.id === state.selectedProduct)
    }
  },
  modules: {
  }
})

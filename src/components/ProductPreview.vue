<script>
export default {
  name: 'ProductPreview',
  props: {
    id: Number,
    imgSrc: String,
    altimgSrc: String,
    productName: String,
    originalPrice: String,
    discountedPrice: String
  }
}
</script>

<template>
    <div
        class="product-small col has-hover product type-product post-160 status-publish first instock product_cat-kz-kulaklik product_tag-kulaklik product_tag-kz-kulaklik has-post-thumbnail sale featured shipping-taxable purchasable product-type-variable"
        v-for="p in $store.state.products" :key="p.id"
    >
        <div class="col-inner">
            <div class="badge-container absolute left top z-1"></div>
            <div class="product-small box">
                <div class="box-image">
                    <div class="image-fade_in_back">
                        <!--<a href="./product">-->
                            <router-link to="/product" @click="$store.dispatch('selectProduct',p.id)">
                            <!--ana resim-->
                            <img
                                width="247"
                                height="247"
                                :src= "p.imgSrc"
                                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                :alt= "p.productName"
                                loading="lazy"
                              sizes="(max-width: 247px) 100vw, 247px"
                            />
                            <!--alternatif resim-->
                            <img
                                width="247"
                                height="247"
                                :src= "p.altimgSrc"
                                class="show-on-hover absolute fill hide-for-small back-image lazy-load-active"
                                :alt= "p.productName"
                                loading="lazy"
                               sizes="(max-width: 247px) 100vw, 247px"
                            />
                        <!--</a>-->
                        </router-link>
                    </div>
                    <div class="image-tools is-small top right show-on-hover"></div>
                    <div class="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                    <div
                        class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"
                    ></div>
                </div>
                <div class="box-text box-text-products text-center grid-style-2">
                    <div class="title-wrapper">
                        <p class="name product-title woocommerce-loop-product__title">
                            <!--<a
                                href="https://www.kzkulaklik.com/urun/kz-zsn-1ba1dd-hibrit-kulaklik/"
                                class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >KZ ZSN Pro 1BA+1DD Hibrit Kulaklık</a> -->
                            <router-link to="/product">
                                {{p.productName}}
                            </router-link>
                        </p>
                    </div>
                    <div class="price-wrapper">
                        <span class="price">
                            <del aria-hidden="true">
                                <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                        {{p.originalPrice}}&nbsp;
                                        <span class="woocommerce-Price-currencySymbol">TL</span>
                                    </bdi>
                                </span>
                            </del>
                            <ins>
                                <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                        {{p.discountedPrice}}&nbsp;
                                        <span class="woocommerce-Price-currencySymbol">TL</span>
                                    </bdi>
                                </span>
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

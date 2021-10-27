<template>
  <div id="content" class="content-area page-wrapper" role="main">
    <div class="row row-main">
      <div class="large-12 col">
        <div class="col-inner">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <div class="account-container lightbox-inner">
              <div
                class="col2-set row row-divided row-large"
                id="customer_login"
              >
                <div class="col-1 large-6 col pb-0">
                  <div class="account-login-inner">
                    <h3 class="uppercase">Giriş Yap</h3>

                    <form
                      class="woocommerce-form woocommerce-form-login login"
                      method="post"
                    >
                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="username">
                          Kullanıcı adı veya e-posta adresi&nbsp;
                          <span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          class="
                            woocommerce-Input woocommerce-Input--text
                            input-text
                          "
                          name="username"
                          id="username"
                          autocomplete="username"
                          value
                        />
                      </p>
                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="password">
                          Parola&nbsp;
                          <span class="required">*</span>
                        </label>
                        <span class="password-input">
                          <input
                            class="
                              woocommerce-Input woocommerce-Input--text
                              input-text
                            "
                            type="password"
                            name="password"
                            id="password"
                            autocomplete="current-password"
                          />
                          <span class="show-password-input"></span>
                        </span>
                      </p>

                      <p class="form-row">
                        <label
                          class="
                            woocommerce-form__label
                            woocommerce-form__label-for-checkbox
                            woocommerce-form-login__rememberme
                          "
                        >
                          <input
                            class="
                              woocommerce-form__input
                              woocommerce-form__input-checkbox
                            "
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            value="forever"
                          />
                          <span>Beni hatırla</span>
                        </label>
                        <input
                          type="hidden"
                          id="woocommerce-login-nonce"
                          name="woocommerce-login-nonce"
                          value="2cb4dd1a34"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/hesabim/"
                        />
                        <button
                          type="submit"
                          class="
                            woocommerce-button
                            button
                            woocommerce-form-login__submit
                          "
                          name="login"
                          value="Giriş Yap"
                        >
                          Giriş Yap
                        </button>
                      </p>
                      <p class="woocommerce-LostPassword lost_password">
                        <a
                          href="https://www.kzkulaklik.com/hesabim/lost-password/"
                          >Parolanızı mı unuttunuz?</a
                        >
                      </p>
                    </form>
                  </div>
                </div>

                <div class="col-2 large-6 col pb-0">
                  <div class="account-register-inner">
                    <h3 class="uppercase">Üye Ol</h3>

                    <form
                      method="post"
                      class="
                        woocommerce-form woocommerce-form-register
                        register
                      "
                    >
                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="reg_email">
                          E-posta adresi&nbsp;
                          <span class="required">*</span>
                        </label>
                        <input
                          type="email"
                          class="
                            woocommerce-Input woocommerce-Input--text
                            input-text
                          "
                          name="email"
                          id="reg_email"
                          autocomplete="email"
                          value
                        />
                      </p>

                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="reg_password">
                          Parola&nbsp;
                          <span class="required">*</span>
                        </label>
                        <span class="password-input">
                          <input
                            type="password"
                            class="
                              woocommerce-Input woocommerce-Input--text
                              input-text
                            "
                            name="password"
                            id="reg_password"
                            autocomplete="new-password"
                          />
                          <span class="show-password-input"></span>
                        </span>
                      </p>

                      <div class="woocommerce-privacy-policy-text">
                        <p>
                          Kişisel verileriniz, gizlilik ilkeleri gereği koruma
                          altındadır ve hiçbir şekilde paylaşılmaz.
                        </p>
                      </div>
                      <p class="woocommerce-form-row form-row">
                        <input
                          type="hidden"
                          id="woocommerce-register-nonce"
                          name="woocommerce-register-nonce"
                          value="6610eff930"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/hesabim/"
                        />
                        <button
                          type="submit"
                          class="
                            woocommerce-Button woocommerce-button
                            button
                            woocommerce-form-register__submit
                          "
                          name="register"
                          value="Üye Ol"
                        >
                          Üye Ol
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
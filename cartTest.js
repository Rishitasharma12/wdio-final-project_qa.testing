
const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('E-Commerce Add to Cart Test', () => {
    it('should add product to cart successfully and place order', async () => {
      await browser.maximizeWindow();
        await browser.url('https://rahulshettyacademy.com/client');

        await LoginPage.login('rishusharmanoida@gmail.com', '@Rishu8481');
        await browser.pause(2000);
        await ProductPage.addProductToCart('ADIDAS ORIGINAL');
        await ProductPage.cartButton.click();
        await browser.pause(2000);

        const isProductInCart = await ProductPage.verifyProductInCart('ADIDAS ORIGINAL');
        expect(isProductInCart).toBe(true);

        await $('(//li//button[@class="btn btn-primary"])[2]').click(); // move to final checkout
        await browser.waitUntil(
          async () => (await $("input[placeholder='Select Country']").isDisplayed()),
          {
            timeout: 30000,
            timeoutMsg: "Country input field not visible even after 15s"
          }
        );

        await CheckoutPage.placeOrder();

        const confirmationText = await CheckoutPage.getOrderConfirmation();
        expect(confirmationText).toContain('THANKYOU FOR THE ORDER.');
    });
});
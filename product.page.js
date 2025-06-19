
class ProductPage {
    get products() { return $$("div.card-body b"); }
    get addToCartButtons() { return $$("div.card-body button.w-10"); }
    get cartButton() { return $("button[routerlink='/dashboard/cart']"); }

    async addProductToCart(productName) {
    const cards = await $$("div.card-body");
    for (const card of cards) {
        const name = await card.$("b").getText();
        if (name === productName) {
            await card.$("button.w-10").click();
            await browser.waitUntil(
                async () => !(await $(".ngx-spinner-overlay").isDisplayed()),
                {
                    timeout: 5000,
                    timeoutMsg: "Spinner did not disappear after adding to cart",
                }
            );
            console.log(`🛒 Added to cart: ${productName}`);
            break;
        }
    }
}

    async verifyProductInCart(expectedProductName) {
    const cartItems = await $$("div.cartSection h3");

    console.log("📦 Cart Items Count:", cartItems.length);

    for (let item of cartItems) {
        const name = await item.getText();
        console.log("🛒 Cart Product:", name);
        if (name.trim().toLowerCase() === expectedProductName.trim().toLowerCase()) {
            return true;
        }
    }
    await ProductPage.cartButton.click();
    await browser.pause(2000);

    return false;
}

get checkoutButton() { return $("button[class*='btn-primary']"); }

async proceedToCheckout() {
    await this.checkoutButton.waitForDisplayed({ timeout: 5000 });
    await this.checkoutButton.click();
}

}

module.exports = new ProductPage();
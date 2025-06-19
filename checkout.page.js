class CheckoutPage {
    get countryInput() { return $("input[placeholder='Select Country']"); }
    get countryDropdown() { return $(".ta-results"); }
    get countryOption() { return $("button.ta-item*=India"); }
    get placeOrderButton() { return $("a.btnn"); }
    get orderMessage() { return $(".hero-primary"); }

    async placeOrder() {
        await this.countryInput.waitForDisplayed({ timeout: 10000 });

        // Click and type slowly to trigger suggestions
        await this.countryInput.click();
        await this.countryInput.setValue("ind");
        await browser.pause(1000); // allow dropdown to populate

        // Wait until dropdown suggestions appear
        await browser.waitUntil(
            async () => (await this.countryDropdown.isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: "Country dropdown did not appear"
            }
        );

        // Corrected selector for "India"
        const indiaOption = await $("button.ta-item*=India");
        await indiaOption.waitForExist({ timeout: 10000 });
        await indiaOption.click();

        await this.placeOrderButton.waitForClickable({ timeout: 5000 });
        await this.placeOrderButton.click();
    }

    async getOrderConfirmation() {
        await this.orderMessage.waitForDisplayed({ timeout: 10000 });
        return await this.orderMessage.getText();
    }
}

module.exports = new CheckoutPage();

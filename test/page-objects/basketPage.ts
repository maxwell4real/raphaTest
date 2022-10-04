class BasketPageClass{

    async verifyProductInBasket(noOfProduct){
    await (await $(`//span[contains(@class,'t-h4 basket-total ajax-mount--basket-count mini-basket-count')][normalize-space()='${noOfProduct}']`)).waitForDisplayed();   
    }

}

export const basketpage = new BasketPageClass();



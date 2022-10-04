class ProductPageClass {

    get enterUsername(){
        return $ ('#username');
    }

    get enterPassword(){
        return $('#password');
    }

    get loginBtn(){
        return $('button[type="submit"]')
    }

    get addToBasketBtn(){
        return $(`//button[@class='scroll-target optionitem purchase action sc-caSCKo czoaii sc-kAzzGY kiHYeC']`);
    }

    get productTitlePo(){
        return $(`.sc-bxivhb.gtCaPF`);
    }

    get miniBasketModal(){
        return $(`.mini-basket.mini-basket--open`);
    }

    get basketBtnInMiniModal(){
        return $(`input[value='Go To Basket']`);
    }

    async selectColour(index = 1){
       await  (await $(`//div[@class='sc-hzDkRC hZoVsb']//label[${index}]`)).click();
    }

    async selectSize(value){
        await (await $(`//span[normalize-space()='${value}']`)).click();
    }

   async scrollToBottom(){
        await (await $(".swatches.sc-jhAzac.fVuNMe")).scrollIntoView({behavior:"smooth"});

    }

    async clickOnAddToBasketBtn(){
        await (await this.addToBasketBtn).click();
    }

    async getProductNameText(){
        return await this.productTitlePo.getText();
    }

    async clickOnBasketBtnInMiniModal(){
        await (await this.miniBasketModal).waitForDisplayed();
        await (await this.basketBtnInMiniModal).click();
    }
   

}

export const productpage = new ProductPageClass()
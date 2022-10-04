import {Given, When, Then} from '@cucumber/cucumber'
import {productpage} from "../../page-objects/productPage";
import {basketpage} from "../../page-objects/basketPage";


Given(/^I navigate to PDP page$/, async function() {
    await browser.url('/shop/classic-shoes/product/CLS01XXINK430');
});

Given(/^I scroll down to the buttom of the page$/, async function() {
   await productpage.scrollToBottom();
});

Given(/^I choose product colour$/, async function() {
   await productpage.selectColour(1);
});

Given(/^I select product size "([^"]*)"$/, async function (value) {
    await productpage.selectSize(value);
});

Given(/^I add item to basket$/, async function() {
    await productpage.clickOnAddToBasketBtn();
});

Given(/^I verify items added to basket on checkout page$/, async function() {
    await productpage.clickOnBasketBtnInMiniModal();
    await basketpage.verifyProductInBasket(1);
});
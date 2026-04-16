import { Locator, Page } from "@playwright/test";

class selectPriceOption{

    page:Page;
    selectPriceOption:Locator;
    priceTabNext:Locator;

    constructor(page:Page) {
        this.page=page;
        this.selectPriceOption=page.locator('#selectultimate')
        this.priceTabNext=page.locator('#nextsendquote')
    }

    async getPriceOption(){

        await this.selectPriceOption.check({force:true});
        await this.priceTabNext.click();
    }
}
export {selectPriceOption}
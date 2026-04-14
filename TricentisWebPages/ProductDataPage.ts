import { Locator, Page } from "@playwright/test";

class productDataPage{
    page:Page;
    startDate:Locator
    InsuranceSum:Locator;
    damageInsurance:Locator;
    optionalProducts:Locator;
    productdataNext:Locator;

    constructor(page:Page){
        this.page=page;
        this.startDate=page.locator('#startdate')
        this.InsuranceSum=page.locator('#insurancesum')
        this.damageInsurance=page.locator('#damageinsurance')
        this.optionalProducts=page.locator('#EuroProtection')
        this.productdataNext=page.locator('#nextselectpriceoption')

    }

    async getproductData(){
        await this.startDate.fill('10/10/2026');
        // Press TAB to move to next field
        await this.page.keyboard.press('Tab');
        await this.InsuranceSum.selectOption('5000000');
        await this.damageInsurance.selectOption('Partial Coverage');
        await this.optionalProducts.check({force:true});
        await this.productdataNext.click();

    }


}

export {productDataPage}
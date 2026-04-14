import { Locator, Page } from "@playwright/test";

class LoginPage{

    page:Page;
    vehicletype:Locator;

    constructor(page:Page){
        this.page=page;
        this.vehicletype= page.locator('#nav_truck');
    }
    async getLaunchURL(){
        await this.page.goto("https://sampleapp.tricentis.com/101/index.php");
    }
    async vehicleInsurance(){
        await this.vehicletype.first().click();
        //await this.page.waitForLoadState();
    }

}

export {LoginPage};
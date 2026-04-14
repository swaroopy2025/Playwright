import { Locator, Page,expect } from "@playwright/test";
import path from 'node:path';

class insuranceDataPage{
    page:Page;
    firstName:Locator;
    lastName:Locator;
    birthDate:Locator;
    gender:Locator;
    Address:Locator;
    country:Locator;
    zipCode:Locator;
    city:Locator;
    occupation:Locator;
    hobbies:Locator;
    webSite:Locator;
    focusOnloadimage:Locator;
    loadImage:Locator;
    insurNext:Locator;

    constructor(page:Page){
        this.page=page;
        this.firstName=page.locator('#firstname')
       this.lastName =page.locator('#lastname')
        this.birthDate=page.locator('#birthdate')
        this.gender=page.locator('#gendermale')
        this.Address=page.locator('#streetaddress')
        this.country=page.locator('#country')
        this.zipCode=page.locator('#zipcode')
        this.city=page.locator('#city')
        this.occupation=page.locator('#occupation')
        this.hobbies=page.locator('#cliffdiving')
        this.webSite=page.locator('#website')
       this.focusOnloadimage =page.locator('#picture')
        this.loadImage=page.locator('input[type="file"]')
        this.insurNext=page.locator('#nextenterproductdata')

    }
    async getInsuranceData(){
        await this.firstName.fill('Swaroop');
        await this.lastName.fill('Reddy');
        await this.birthDate.fill('09/09/1987');
        await this.gender.check({force:true});
        await this.Address.fill('FREMONT,HYD');
        await this.country.selectOption('India');
        await this.zipCode.fill('123456');
        await this.city.fill('HYDERABAD');
        await this.occupation.selectOption('Farmer');
        await this.hobbies.check({force:true});
        await this.webSite.fill("https://sampleapp.tricentis.com/101/app.php");
        //File upload
        // Path to your image
        const filepath = path.resolve('tests/VechileInsurance/1.png');
        // Upload file
        await this.focusOnloadimage.focus();
        await this.loadImage.setInputFiles(filepath);
        // Optional: verify file name appears in UI
        await expect(this.loadImage).toHaveValue(/1.png/);
        //await expect(page.locator('input[type="file"]')).toHaveValue(/1\.jpg/);
        await this.insurNext.click();
    }
}
export {insuranceDataPage}

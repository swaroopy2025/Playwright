import { Locator, Page } from "@playwright/test";    



class vehicleDataPage{
    page:Page;
    make:Locator;
    enginePerformance:Locator;
    dateofmnf:Locator;
    numOfSeats:Locator;
    fuel:Locator;
    paylod:Locator;
    totalWeight:Locator;
    listPrice:Locator;
    licenseNumber:Locator;
    annualMileage:Locator;
    nextButton:Locator;

    constructor(page:Page){

        this.page=page;
        this.make=page.locator('#make')
        this.enginePerformance=page.locator('#engineperformance')
        this.dateofmnf=page.locator('#dateofmanufacture')
        this.numOfSeats=page.locator('#numberofseats')
        this.fuel=page.locator('#fuel')
        this.paylod=page.locator('#payload')
        this.totalWeight=page.locator('#totalweight')
        this.listPrice=page.locator('#listprice')
        this.licenseNumber =page.locator('#licenseplatenumber')
        this.annualMileage=page.locator('#annualmileage')
        this.nextButton=page.locator('#nextenterinsurantdata')

    }

    async getvehicleData(){
        await this.make.selectOption('BMW');
        await this.enginePerformance.fill('1234');
        await this.dateofmnf.fill('10/10/2025');
        await this.numOfSeats.selectOption('7');
        await this.fuel.selectOption('Diesel');
        await this.paylod.fill('999');
        await this.totalWeight.fill('22222');
        await this.listPrice.fill('23222');
        await this.licenseNumber.fill('1234567890');
        await this.annualMileage.fill('4343');
        await this.nextButton.click();
    }
}

export {vehicleDataPage}
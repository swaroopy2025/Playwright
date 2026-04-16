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

    async getvehicleData(enginePerformance:string,
                        dateofmnf:string,
                        paylod:string,
                        totalWeight:string,
                        listPrice:string,
                        licenseNumber:string,
                        annualMileage:string){
        await this.make.selectOption('BMW');
        await this.enginePerformance.fill(enginePerformance);
        await this.dateofmnf.fill(dateofmnf);
        await this.numOfSeats.selectOption('7');
        await this.fuel.selectOption('Diesel');
        await this.paylod.fill(paylod);
        await this.totalWeight.fill(totalWeight);
        await this.listPrice.fill(listPrice);
        await this.licenseNumber.fill(licenseNumber);
        await this.annualMileage.fill(annualMileage);
        await this.nextButton.click();
    }
}

export {vehicleDataPage}
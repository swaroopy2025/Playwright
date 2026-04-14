import {test} from '@playwright/test';
import { PageManager } from '../TricentisWebPages/PageManager';

test.describe("Vechile Insurance",()=>{
    test("Truck Insurance Quote", async({page})=>{

        const pagemanager=new PageManager(page);
        const login =pagemanager.get_login_page();
        const vehicle = pagemanager.get_vehicle_data_page();
        const insurance = pagemanager.get_insurance_data_page();
        const product = pagemanager.get_product_data_page();
        const price = pagemanager.get_select_price_option();
        const submitQuotation = pagemanager.get_send_quote_page();



         // Enter Login data
         await login.getLaunchURL();
         await login.vehicleInsurance();
         await page.waitForLoadState();

        //Enter Vehicle Data
        await vehicle.getvehicleData();
        
        //Enter is=nsurance Data
        await insurance.getInsuranceData();
        //Enter Product Data
        await product.getproductData();
        //Select Price Option
        await price.getPriceOption();
       
        //Send Quote
        await submitQuotation.getsendQuote();
        
        //Alternative - Navigate to main page
        //await page.getByText('Main page').click();
    });

});
import {test} from '@playwright/test';
import { PageManager } from '../TricentisWebPages/PageManager';
import VehicleData from '../TricentisTestData/VehicleData.json';
import InsuranceData from '../TricentisTestData/InsuranceData.json';
import ProductData from '../TricentisTestData/ProductData.json';
import SendQuoteData from '../TricentisTestData/SendQuoteData.json';



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
        await vehicle.getvehicleData(VehicleData.enginePerformance,
                                        VehicleData.dateofmnf,
                                        VehicleData.paylod,
                                        VehicleData.totalWeight,
                                        VehicleData.listPrice,
                                        VehicleData.licenseNumber,
                                        VehicleData.annualMileage);
        
        //Enter insurance Data
        await insurance.getInsuranceData(InsuranceData.firstName,
                                        InsuranceData.lastName,
                                        InsuranceData.birthDate,
                                        InsuranceData.Address,
                                        InsuranceData.zipCode,
                                        InsuranceData.city,
                                        InsuranceData.webSite);
        //Enter Product Data
        await product.getproductData(ProductData.startDate);
        //Select Price Option
        await price.getPriceOption();
       
        //Send Quote
        await submitQuotation.getsendQuote(SendQuoteData.email,
                                            SendQuoteData.phonenum,
                                            SendQuoteData.userName,
                                            SendQuoteData.passWord,
                                            SendQuoteData.comments);
        
        //Alternative - Navigate to main page
        //await page.getByText('Main page').click();
    });

});
import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { vehicleDataPage } from "./VehicleDataPage";
import { insuranceDataPage } from "./InsuranceDataPage";
import { productDataPage } from "./ProductDataPage";
import {selectPriceOption} from './PriceOptionPage';
import { sendQuotePage } from "./SendQuotePage";

class PageManager{
    page:Page;
    loginPage:LoginPage
    vehicledatapage:vehicleDataPage
    insurancedatapage:insuranceDataPage
    productdatapage:productDataPage
    selectpriceoption:selectPriceOption
    sendquotepage:sendQuotePage



    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.vehicledatapage=new vehicleDataPage(this.page);
        this.insurancedatapage=new insuranceDataPage(this.page);
        this.productdatapage=new productDataPage(this.page);
        this.selectpriceoption =new selectPriceOption(this.page);
        this.sendquotepage=new sendQuotePage(this.page);
    }
    get_login_page(){
        return this.loginPage;
    }
    get_vehicle_data_page(){
        return this.vehicledatapage;
    }
    get_insurance_data_page(){
        return this.insurancedatapage;
    }
    get_product_data_page(){
        return this.productdatapage;
    }
    get_select_price_option(){
        return this.selectpriceoption;
    }
    get_send_quote_page(){
        return this.sendquotepage;
    }

}
export {PageManager}
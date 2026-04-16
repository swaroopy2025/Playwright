import { Locator, Page,expect } from "@playwright/test";

class sendQuotePage {
    page:Page;
    email:Locator;
    phonenum:Locator;
    userName:Locator;
    passWord:Locator;
    confirmpassword:Locator;
    comments:Locator;
    SendForQuote:Locator;
    verifyAlert:Locator;
    ClickOnOkButton:Locator;
    navigateToMainmenu:Locator;

    constructor(page:Page) {
        this.page=page;
        this.email=page.locator('#email')
        this.phonenum=page.locator('#phone')
        this.userName=page.locator('#username')
        this.passWord=page.locator('#password')
        this.confirmpassword=page.locator('#confirmpassword')
        this.comments=page.locator('#Comments')
        this.SendForQuote=page.locator('#sendemail')
        this.verifyAlert=page.locator('.showSweetAlert')
        this.ClickOnOkButton=page.locator('.confirm')
        this.navigateToMainmenu=page.locator("text='Main page'")
    }

   async getsendQuote(email:string,
                    phonenum:string,
                    userName:string,
                    passWord:string,
                    comments:string){

        await this.email.fill(email);
        await this.phonenum.fill(phonenum);
        await this.userName.fill(userName);
        await this.passWord.fill(passWord);
        await this.confirmpassword.fill(passWord);
        await this.comments.fill(comments)
        await this.SendForQuote.click();
        //Printing message in Console
        console.log(await this.verifyAlert.textContent());
        //Verifying the success message
        await expect(this.verifyAlert).toContainText('Sending e-mail success!');
        //Click on OK button in 
        await this.ClickOnOkButton.click();
        //Navigate to main page
        await this.navigateToMainmenu.click();
    }
}
export {sendQuotePage}
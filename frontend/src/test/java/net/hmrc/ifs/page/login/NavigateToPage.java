package net.hmrc.ifs.page.login;

import net.hmrc.ifs.page.upload.FileUpload;
import net.hmrc.ifs.page.upload.VerifyMetaData;
import net.thucydides.core.annotations.Step;

/**
 * Created by Ajay on 10/11/2016.
 */
public class NavigateToPage {

    public LoginPage loginPage;
    public FileUpload fileUpload;
    public VerifyMetaData verifyMetaData;



    public NavigateToPage(){
        loginPage=new LoginPage();
        fileUpload=new FileUpload();
        verifyMetaData= new VerifyMetaData();
    }

    @Step
    public LoginPage verifyLoginMessage(String type,String message){
        if ("valid".equals(type)){
            loginPage.verifyValidLogin(message);
        }else if("invalid".equals(type)){
            loginPage.verifyInvalidLogin(message);
            return loginPage;
        }
        return null;
    }

    @Step
    public void userLogin(){
        loginPage.enterUserDetails();
    }
}

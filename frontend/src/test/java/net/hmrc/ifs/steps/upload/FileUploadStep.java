package net.hmrc.ifs.steps.upload;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.hmrc.ifs.page.login.NavigateToPage;

/**
 * Created by Ajay on 18/11/2016.
 */
public class FileUploadStep {

    NavigateToPage loginVerification;


    public FileUploadStep(){
        loginVerification=new NavigateToPage();
    }


    @When("I upload a file (.*) of (.*) GB")
    public void upload(String fileName,String size){
        loginVerification.fileUpload.selectFile(fileName,size);
        loginVerification.fileUpload.uploadFile();
           }

    @Then("I should see upload confirmation message as (.*)")
    public void uploadConfirmationForUpload(String message){
        loginVerification.fileUpload.verifyUploadConfirmationMessage(message);
        loginVerification.loginPage.logout();
    }
}

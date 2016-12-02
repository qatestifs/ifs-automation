package net.hmrc.ccs.steps.upload;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.hmrc.ccs.config.NavigatePage;

import static net.hmrc.ccs.config.BaseUrl.setUp;

/**
 * Created by Ajay on 21/11/2016.
 */
public class UploadConfirmationStep {

    NavigatePage navigatePage;

    private UploadConfirmationStep(){
        navigatePage=new NavigatePage();
    }

    @Given("I want to upload a file in DocM-(.*)")
    public void fileUpload(String endPoint){
      setUp(endPoint);
    }

    @When("I Upload a File (.*) of (.*) GB")
    public void upload(String fileName, String size){
        navigatePage.uploadFile.postFile(fileName,size);
    }
    @Then("the file should be available in DocM")
    public void confirmUpload(){
       navigatePage.uploadFile.confirmUpload();
    }
}

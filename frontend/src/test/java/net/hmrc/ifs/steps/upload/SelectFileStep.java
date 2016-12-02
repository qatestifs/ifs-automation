package net.hmrc.ifs.steps.upload;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.hmrc.ifs.config.MetaData;
import net.hmrc.ifs.config.NavigateToPage;

import java.util.List;

/**
 * Created by Ajay on 17/11/2016.
 */
public class SelectFileStep {

   NavigateToPage navigateToPage;

    public SelectFileStep(){
        navigateToPage =new NavigateToPage();
    }

    @When("I select a file (.*) of (.*) GB")
    public void selectFile(String fileName,String size){
        navigateToPage.fileUpload.selectFile(fileName,size);
    }

    @Then("the file (.*) should be available for upload")
    public void fileShouldBeAvailable(String fileName){
        navigateToPage.fileUpload.verifyFileSelected(fileName);

    }

    @Then("I should see the following metadata details")
    public void getMetaDataDetails(List<MetaData> metaDatas){
        navigateToPage.verifyMetaData.verifyMetaData(metaDatas.get(0));
        navigateToPage.loginPage.logout();

    }

    @Then("the file should get uploaded")
    public void uploadAFile(){
//        navigateToPage.fileUpload.uploadFile();
        navigateToPage.loginPage.logout();
    }
}

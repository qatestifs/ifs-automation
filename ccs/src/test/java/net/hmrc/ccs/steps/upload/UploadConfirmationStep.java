package net.hmrc.ccs.steps.upload;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.hamcrest.core.Is;

import java.io.File;

import static net.common.utils.filegenerator.FileGenerator.file;
import static net.common.utils.filegenerator.FileGenerator.generateFile;
import static net.serenitybdd.rest.SerenityRest.given;

/**
 * Created by Ajay on 21/11/2016.
 */
public class UploadConfirmationStep {

    @Given("I want to upload a file in DocM-(.*)")
    public void fileUpload(String endPoint){
//setUp();
    }

    @When("I Upload a File")
    public void upload(){
        generateFile("postFile.jpg",".05");
        given()
                .content("multipart/form-data")
               .auth().basic("dmadmin", "password")
                .formParam("customerId","customer1","sourceSystem","12345","receivedDate",
                        "2012-03-31T18:25:43.511Z","uploadDate","2012-11-14T09:30:12.345Z")
                .multiPart(new File(String.valueOf(file.getAbsoluteFile()))).
                expect().
                body("fileUploadResult", Is.is("200")).
                when().
                post("http://172.19.32.45:8080/ingestion-service-web/igs/document/upload");
//        post("http://localhost:8080/ingestion-service-web/igs/document/upload");
    }


    @Then("the file should be available in DocM")
    public void confirmUpload(){

    }
}

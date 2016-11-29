package net.hmrc.ccs.steps.authentication;

import com.google.common.collect.Lists;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.hmrc.ccs.config.GetUserDetails;

import java.util.List;
import java.util.Random;

import static net.serenitybdd.rest.SerenityRest.rest;
import static org.hamcrest.Matchers.equalTo;

/**
 * Created by Ajay on 17/11/2016.
 */
public class LoginAuthenticationStep {

    List<GetUserDetails> userDetails;

    @Given("I have the following user details")
    public void getUser(List<GetUserDetails> userDetails){
        this.userDetails = Lists.newArrayList(userDetails);
    }

    @When("I login as a user")
    public void verifyUser(){
        for(GetUserDetails userDetail : userDetails ) {
            int id = Math.abs(new Random().nextInt());
            String userLogin = "{\"id\": " + id + " , \"name\": \""
                    + userDetail.getUser() + "\", \"photoUrls\": [], \"status\": \""
                    + userDetail.getPassword() + "\"}";

            rest().given().contentType("application/json")
                    .content(userLogin).post("http://localhost:4200/login/");

            userDetail.setStatus(id);
        }    }

    @Then("my details should be authenticated")
    public void userVerified(){
        for(GetUserDetails userDetail : userDetails ) {
            rest().get("http://petstore.swagger.io/v2/pet/{id}", userDetail.getStatus())
                    .then().statusCode(200)
                    .and().body("name", equalTo(userDetail.getUser()));
        }

    }


}

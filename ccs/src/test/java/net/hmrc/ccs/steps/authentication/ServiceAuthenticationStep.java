package net.hmrc.ccs.steps.authentication;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static net.hmrc.ccs.config.BaseUrl.setUp;
import static net.serenitybdd.rest.SerenityRest.given;


public class ServiceAuthenticationStep {

  @When("I send a get request to-(.*)")
    public void sendGetRequest(String url){
      setUp(url);
    given().when().get(url);
  }

  @Then("I should see the response status as (.*)")
    public void verifyResponse(int status){
      given().then().statusCode(status);
  }
}
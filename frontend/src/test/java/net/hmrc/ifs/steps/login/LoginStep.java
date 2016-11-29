package net.hmrc.ifs.steps.login;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.hmrc.ifs.page.login.NavigateToPage;

import static net.common.utils.helper.SeleniumWrapper.getUrl;
import static net.common.utils.helper.SeleniumWrapper.visit;


public class LoginStep {

    NavigateToPage loginVerification;

    public LoginStep() {
        loginVerification = new NavigateToPage();
    }

    @Given("I visit frontend login page- (.*)")
    public void visitPage(String url) {
        visit(url);
    }

   @Given("I want to upload a file")
    public void getPage(){
        getUrl();
        loginVerification.userLogin();
    }

    @When("I submit my user name as (.*) and password as (.*)")
    public void submitLoginDetaisl(String user_id, String password) {
        loginVerification.loginPage.submitLoginDetails(user_id, password);
    }

    @Then("I should see the following (.*) login message- (.*)")
    public void loginPage(String type, String message) {
        loginVerification.verifyLoginMessage(type, message);
        }

}

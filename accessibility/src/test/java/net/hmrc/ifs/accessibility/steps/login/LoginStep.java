package net.hmrc.ifs.accessibility.steps.login;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import net.hmrc.ifs.accessibility.page.login.LoginPageAccessibility;

import static net.common.utils.helper.SeleniumWrapper.openAccessibilityDriver;
import static net.hmrc.ifs.accessibility.common.TestAccessibility.testAccessibility;

public class LoginStep {

    LoginPageAccessibility loginPageAccessibility;

    public LoginStep() {
        loginPageAccessibility = new LoginPageAccessibility();
    }

    @Given("I navigate to login page (.*)")
    public void visitPage(String url) {
        openAccessibilityDriver(url);
    }

    @Given("I navigate to upload page (.*)")
    public void visitUploadPage(String url){
        openAccessibilityDriver(url);
        loginPageAccessibility.enterUserDetails();
    }

    @Then("I want to capture the accessibility issues on the page")
    public void loginPage() throws Exception {
        testAccessibility();
    }

}

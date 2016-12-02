package net.hmrc.ifs.page.login;


import net.thucydides.core.annotations.Step;

import java.util.concurrent.TimeUnit;

import static net.common.utils.Interface.ElementLocator.*;
import static net.common.utils.actions.ClickOnElement.clickOnElement;
import static net.common.utils.actions.TypeText.type;
import static net.common.utils.config.GetProperties.GET_PASSWORD;
import static net.common.utils.config.GetProperties.GET_USERNAME;
import static net.common.utils.config.PropertiesLoader.getValueFromPropertiesFile;
import static net.common.utils.config.PropertyFile.USER_DETAILS;
import static net.common.utils.helper.Log.info;
import static net.common.utils.helper.SeleniumWrapper.getDriver;
import static net.common.utils.locator.LocateElement.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


public class LoginPage {

    private void setUserName(String user_name) {
        type((ById(userId_id)), user_name);
    }

    private void setPassword(String pasword) {
        type(ById(password_id), pasword);
    }

    @Step
//    @Screenshots(forEachStep=true)
//    @Screenshots(disabled=true)
    public void submitLoginDetails(String user_id, String password) {
        setUserName(user_id);
        setPassword(password);
        submitLoginDetails();
        }
    @Step
    private void submitLoginDetails(){
        clickOnElement(submitButton_name, "NAME");
        info("User submits the login details");
    }

    @Step
//    @Screenshots(forEachAction=true)
    public void verifyInvalidLogin(String loginUnSuccess) {
        getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        System.out.println(ById(loginErrorMessage_id).getText());
        assertThat(ById(loginErrorMessage_id).getText(), is(loginUnSuccess));
        info("user is unable to login: errorMessage-" + loginUnSuccess);

    }

    @Step
    public void verifyValidLogin(String loginSuccess) {
            System.out.println(ById(logOutButton_id).getText());
        assertThat(ById(dashBoard_id).getText(),is(loginSuccess));
        info("user is successfully logs in-" + loginSuccess);
        logout();
    }

    @Step
    public void logout(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        clickOnElement(logOutButton_id,"ID");
        info("User Logs out of the");
    }

    @Step
    public void enterUserDetails(){
        type((ById(userId_id)),getValueFromPropertiesFile(USER_DETAILS, GET_USERNAME));
        type((ById(password_id)),getValueFromPropertiesFile(USER_DETAILS, GET_PASSWORD));
        info("user enters the login credentials to submit");
        submitLoginDetails();

    }




}

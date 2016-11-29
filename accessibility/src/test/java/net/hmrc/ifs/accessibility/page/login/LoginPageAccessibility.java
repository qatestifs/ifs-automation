package net.hmrc.ifs.accessibility.page.login;


import net.thucydides.core.annotations.Step;

import static net.common.utils.Interface.ElementLocator.*;
import static net.common.utils.actions.TypeText.type;
import static net.common.utils.config.GetProperties.GET_PASSWORD;
import static net.common.utils.config.GetProperties.GET_USERNAME;
import static net.common.utils.config.PropertiesLoader.getValueFromPropertiesFile;
import static net.common.utils.config.PropertyFile.USER_DETAILS;
import static net.common.utils.helper.Log.info;
import static net.hmrc.ifs.accessibility.common.ClickOnAccessibilityElement.clickOnAccessibilityElement;
import static net.hmrc.ifs.accessibility.common.LocateAccessibilityElement.ById;


/**
 * Created by Ajay on 10/11/2016.
 */
public class LoginPageAccessibility {

    @Step
    public void enterUserDetails(){
        type(ById(userId_id),getValueFromPropertiesFile(USER_DETAILS, GET_USERNAME));
        type(ById(password_id),getValueFromPropertiesFile(USER_DETAILS, GET_PASSWORD));
        info("user enters the login credentials to submit");
        clickOnAccessibilityElement(submitButton_name,"NAME");
        info("User submits the login details");
    }

}

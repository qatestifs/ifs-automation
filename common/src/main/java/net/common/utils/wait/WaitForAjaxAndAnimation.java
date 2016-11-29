package net.common.utils.wait;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.FluentWait;

import static net.common.utils.wait.FluentWaitFor.getWait;


/**
 * Created by Ajay on 07/11/2016.
 */
public class WaitForAjaxAndAnimation {

    public static FluentWait<WebDriver> wait;



    public static void waitForAjaxAndAnimation() {
        if (wait == null) {
            wait = getWait();
        }

        wait.until(waitForAjax());
        wait.until(waitForAnimation());
    }


    public static ExpectedCondition<Boolean> waitForAjax() {
        return new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return (Boolean) ((JavascriptExecutor) driver).executeScript("return (window.jQuery != null) && (jQuery.active === 0);");
            }
        };
    }


    public static ExpectedCondition<Boolean> waitForAnimation() {
        return new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return (Boolean) ((JavascriptExecutor) driver).executeScript("return (window.jQuery != null) && (jQuery(':animated').length === 0) && (jQuery('#loader').length === 0);");
            }
        };
    }
}

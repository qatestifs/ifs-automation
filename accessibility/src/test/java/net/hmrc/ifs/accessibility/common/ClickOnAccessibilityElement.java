package net.hmrc.ifs.accessibility.common;



import net.common.utils.config.Locators;
import net.common.utils.helper.Log;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;

import static net.common.utils.helper.SeleniumWrapper.getAccessibilityDriver;
import static net.common.utils.wait.WaitForAjaxAndAnimation.waitForAjax;


public class ClickOnAccessibilityElement {


    public static void clickOnAccessibilityElement(String element, String locator) {
        try {
            getAccessibilityDriver().findElement(Locators.valueOf(locator.toUpperCase()).getLocator(element)).click();
            waitForAjax();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to click on '" + element + "' has failed");
        }
    }

    public static void clickToNavigate(String element, String locator) {
        try {
            getAccessibilityDriver().findElement(Locators.valueOf(locator.toUpperCase()).getLocator(element)).click();
//            waitForAjaxAndAnimation();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to click on '" + element + "' has failed");
        }
    }

    public static void click(WebElement element) {
        try {
            element.click();
            waitForAjax();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to click on '" + element.toString() + "' has failed");
        }
    }

    public static void KeysEnter(WebElement element) {
        try {
            element.sendKeys(Keys.ENTER);
            waitForAjax();
        } catch (NoSuchElementException e) {
            System.out.println(("Attempt to click on '" + element.toString() + "' has failed"));
        }
    }

    public static void submit(WebElement element) {
        try {
            element.submit();
            waitForAjax();
        } catch (NoSuchElementException e) {
            System.out.println(("Attempt to click on '" + element.toString() + "' has failed"));
        }
    }
}

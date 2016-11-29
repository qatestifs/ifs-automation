package net.common.utils.wait;

import com.google.common.base.Predicate;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import net.common.utils.config.Locators;

import java.util.List;

import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOfElementLocated;
import static net.common.utils.wait.FluentWaitFor.wait;


public class WaitForElement {

    public static void waitForElement(String element, String locator) {
        waitForElementToBePresent(element, locator);
        waitForElementToBeVisible(element, locator);
    }

    private static void waitForElementToBeVisible(String element, String locator) {
        wait.until(visibilityOfElementLocated(Locators.valueOf(locator.toUpperCase()).getLocator(element)));
    }

    // predicate waiting for the element to present on the screen
    private static void waitForElementToBePresent(String element, String locator) {
        wait.until(
                new Predicate<WebDriver>() {
                    public boolean apply(WebDriver driver) {
                        List<WebElement> webElements = driver.findElements(Locators.valueOf(locator.toUpperCase()).getLocator(element));

                        return webElements.size() > 0;
                    }
                }
        );

    }
}

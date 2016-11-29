package net.common.utils.actions;


import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import net.common.utils.helper.Log;

import static net.common.utils.wait.WaitForAjaxAndAnimation.waitForAjaxAndAnimation;


public class SelectOption {

    public static void select(WebElement element, String text) {
        try {
            Select select = new Select(element);
            select.selectByVisibleText(text);
            waitForAjaxAndAnimation();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to select on '" + element.toString() + "' has failed");
        }
    }
}

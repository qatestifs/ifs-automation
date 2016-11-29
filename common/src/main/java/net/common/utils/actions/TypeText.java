package net.common.utils.actions;


import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import net.common.utils.helper.Log;


public class TypeText {

    public static void type(WebElement element, String text) {
        try {
            element.clear();
            element.sendKeys(text);
//            waitForAjaxAndAnimation();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to type '" + text + "' into '" + element.toString());
        }
    }

    public static void upload(WebElement element, String text){
        try {
             element.sendKeys(text);
//            waitForAjaxAndAnimation();
        } catch (NoSuchElementException e) {
            Log.severe("Attempt to type '" + text + "' into '" + element.toString());
        }
    }


}

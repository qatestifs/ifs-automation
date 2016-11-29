package net.common.utils.locator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static net.common.utils.helper.SeleniumWrapper.getDriver;


public class LocateElement {

    private LocateElement() {

    }

    public static WebElement ById(String id) {
        return getDriver().findElement(By.id(id));
    }

    public static WebElement ByName(String name) {
        return getDriver().findElement(By.name(name));
    }

    public static WebElement ByXPath(String xpath) {
        return getDriver().findElement(By.xpath(xpath));
    }

    public static WebElement ByCss(String Css) {
        return getDriver().findElement(By.cssSelector(Css));
    }

    public static WebElement ByLink(String Link) {
        return getDriver().findElement(By.linkText(Link));
    }

    public static List<WebElement> ByCssTable(String Css) {
        return getDriver().findElements((By.cssSelector(Css)));
    }

    public static List<WebElement> ByXpathTable(String Xpath) {
        return getDriver().findElements((By.xpath(Xpath)));
    }


}



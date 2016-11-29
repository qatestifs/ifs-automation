package net.hmrc.ifs.accessibility.common;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static net.common.utils.helper.SeleniumWrapper.getAccessibilityDriver;


public class LocateAccessibilityElement {

    private LocateAccessibilityElement() {

    }

    public static WebElement ById(String id) {
        return getAccessibilityDriver().findElement(By.id(id));
    }

    public static WebElement ByName(String name) {
        return getAccessibilityDriver().findElement(By.name(name));
    }

    public static WebElement ByXPath(String xpath) {
        return getAccessibilityDriver().findElement(By.xpath(xpath));
    }

    public static WebElement ByCss(String Css) {
        return getAccessibilityDriver().findElement(By.cssSelector(Css));
    }

    public static WebElement ByLink(String Link) {
        return getAccessibilityDriver().findElement(By.linkText(Link));
    }

    public static List<WebElement> ByCssTable(String Css) {
        return getAccessibilityDriver().findElements((By.cssSelector(Css)));
    }

    public static List<WebElement> ByXpathTable(String Xpath) {
        return getAccessibilityDriver().findElements((By.xpath(Xpath)));
    }


}



package net.common.utils.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import static net.common.utils.config.GetProperties.GET_BROWSER;
import static net.common.utils.config.GetProperties.GET_URL;
import static net.common.utils.config.PropertiesLoader.getValueFromPropertiesFile;
import static net.common.utils.config.PropertyFile.BROWSER;
import static net.common.utils.config.PropertyFile.URL;


/**
 * Created by Ajay on 09/11/2016.
 */
public class SeleniumWrapper {

    private static WebDriver webDriver;
    private static FirefoxDriver firefoxDriver;


    public static WebDriver getDriver() {
        if (webDriver == null) {
            if (getValueFromPropertiesFile(BROWSER, GET_BROWSER).equals("firefox")) {
//                System.out.println("Starting test " + new Object() {
//                }.getClass().getEnclosingMethod().getName());
                System.setProperty("webdriver.gecko.driver", "..\\common\\src\\main\\resources\\utils\\drivers\\geckodriver.exe");
                webDriver = new FirefoxDriver();
            } else if (getValueFromPropertiesFile(BROWSER, GET_BROWSER).equals("ie")) {
                System.setProperty("webdriver.edge.driver", "..\\common\\src\\main\\resources\\utils\\drivers\\MicrosoftWebDriver.exe");
                webDriver = new EdgeDriver();
            } else if (getValueFromPropertiesFile(BROWSER, GET_BROWSER).equals("chrome")) {
                System.setProperty("webdriver.chrome.driver", "..\\common\\src\\main\\resources\\utils\\drivers\\chromedriver.exe");
                webDriver = new ChromeDriver();
            } else if (getValueFromPropertiesFile(BROWSER, GET_BROWSER).equals("html")) {
                webDriver = new HtmlUnitDriver(true);
            }
// else if (getValueFromPropertiesFile(BROWSER, GET_BROWSER).equals("phantomJS"))
//                System.setProperty("phantomjs.binary.path", "..\\common\\src\\main\\resources\\utils\\drivers\\phantomjs.exe");
//            webDriver = new PhantomJSDriver();
        }

        return webDriver;

    }

    public static FirefoxDriver getAccessibilityDriver() {
        if (firefoxDriver == null) {
            System.out.println("Starting test " + new Object() {
            }.getClass().getEnclosingMethod().getName());
            System.setProperty("webdriver.gecko.driver", "..\\common\\src\\main\\resources\\utils\\drivers\\geckodriver.exe");
            firefoxDriver = new FirefoxDriver();
        }
        return firefoxDriver;
    }

    //    use this driver for accessibility test
    public static void openAccessibilityDriver(String url) {
        getAccessibilityDriver().get(url);
    }

    //use this driver for UI functional test
//    @Step
//    @Screenshots(onlyOnFailures=true)
//    @Screenshots(forEachAction = true)
    public static void visit(String url) {
        getDriver().get(url);
     }

    public static void getUrl(){
        System.out.println("Starting test " + new Object() {
        }.getClass().getEnclosingMethod().getName());
        getDriver().get(getValueFromPropertiesFile(URL, GET_URL));
    }
}

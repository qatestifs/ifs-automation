package net.hmrc.ifs;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import static net.common.utils.helper.SeleniumWrapper.getDriver;


//@RunWith(Cucumber.class)
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features/",
        tags = {"@Regression"},
         plugin = {"pretty", "html:src/test/resources/test-reports"})
public class RunFrontendAT {

    @BeforeTest
    public void deleteAllCookies() {
        getDriver().manage().deleteAllCookies();
    }
    @AfterTest
    public void tearDown() {
        getDriver().quit();
    }
}

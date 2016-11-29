package net.hmrc.ccs;

import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

import static net.hmrc.ccs.config.BaseUrl.setUp;


//@RunWith(Cucumber.class)
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features",
        tags = {"@Component"},
        plugin = {"pretty", "html:src/test/resources/test-reports"})
public class RunCcsAT {


    @Before
    public void GetBaseURL() {
        setUp();
    }
}

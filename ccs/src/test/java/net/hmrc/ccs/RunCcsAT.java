package net.hmrc.ccs;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;


//@RunWith(Cucumber.class)
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features",
        tags = {"@Component"},
        plugin = {"pretty", "html:src/test/resources/test-reports"})
public class RunCcsAT {


//    @Before
//    public void GetBaseURL(String endPoint) {
//        setUp(endPoint);
//    }
}

package net.hmrc.ifs.accessibility;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

/**
 * Created by Ajay on 10/11/2016.
 */

//@RunWith(Cucumber.class)
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features",
        tags = {"@Accessibility"},
        plugin = {"pretty", "html:src/test/resources/test-reports"})
public class AccessibilityAT {

}

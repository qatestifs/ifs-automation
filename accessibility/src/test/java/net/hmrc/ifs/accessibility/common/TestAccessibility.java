package net.hmrc.ifs.accessibility.common;

import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import static net.common.utils.helper.Log.info;
import static net.common.utils.helper.SeleniumWrapper.getAccessibilityDriver;

/**
 * Created by Ajay on 23/11/2016.
 */
public class TestAccessibility {

    private static final String url = "https://raw.githubusercontent.com/GoogleChrome/accessibility-developer-tools/stable/dist/js/axs_testing.js";

    public static void testAccessibility() {
        try {
            InputStream in = new URL(url)
                    .openStream();
            String adtScript = null;
            adtScript = IOUtils.toString(in, "UTF-8");
            Object report = getAccessibilityDriver()
                    .executeScript(adtScript + " var results = axs.Audit.run();return axs.Audit.createReport(results);");

            info(String.valueOf(report));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}

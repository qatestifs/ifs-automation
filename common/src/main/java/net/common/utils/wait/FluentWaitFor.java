package net.common.utils.wait;


import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.FluentWait;

import java.util.concurrent.TimeUnit;

import static net.common.utils.helper.SeleniumWrapper.getDriver;


/**
 * Created by Ajay on 07/11/2016.
 */
public class FluentWaitFor {

    private static final int EXPLICIT_WAIT_POOLING = 200,EXPLICIT_WAIT_TIMEOUT = 60;
    public static FluentWait<WebDriver> wait;

    public static FluentWait<WebDriver> getWait() {
        FluentWait<WebDriver> wait = new FluentWait<WebDriver>(getDriver())
                .withTimeout(EXPLICIT_WAIT_TIMEOUT, TimeUnit.SECONDS)
                .pollingEvery(EXPLICIT_WAIT_POOLING, TimeUnit.MILLISECONDS)
                .ignoring(NoSuchElementException.class)
                .withMessage("TimeoutException- :)-Cant Find The Element");

        return wait;
    }
}

package net.common.utils.actions;

import org.openqa.selenium.Alert;

import static net.common.utils.helper.SeleniumWrapper.getDriver;


public class AlertPopup {

    private static Alert alt;

    private AlertPopup() {

    }

    public static Alert alert() {
        alt = getDriver().switchTo().alert();
        alt.accept();

        return alt;
    }

}

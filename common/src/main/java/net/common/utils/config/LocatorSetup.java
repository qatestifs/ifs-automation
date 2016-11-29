package net.common.utils.config;

import org.openqa.selenium.By;

public interface LocatorSetup {

    By getLocator(String element);

}

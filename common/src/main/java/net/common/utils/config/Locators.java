package net.common.utils.config;

import org.openqa.selenium.By;


public enum Locators implements LocatorSetup {
    
    XPATH {
        public By getLocator(String element) {
            return By.xpath(element);
        }
    },
    CSS {
        public By getLocator(String element) {
            return By.cssSelector(element);
        }
    },
    ID {
        public By getLocator(String element) {
            return By.id(element);
        }
    },
    NAME {
        public By getLocator(String element) {
            return By.name(element);
        }
    },
    LINKTEXT {
        public By getLocator(String element) {
            return By.linkText(element);
        }
    }
}

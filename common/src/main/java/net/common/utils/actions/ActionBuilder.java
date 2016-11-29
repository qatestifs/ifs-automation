package net.common.utils.actions;


import org.openqa.selenium.interactions.Actions;

import static net.common.utils.helper.SeleniumWrapper.getDriver;


public class ActionBuilder {

    private static Actions builder;


    private ActionBuilder(){
        }

    public static Actions actionBuilder() {
        if (builder == null) {
            builder = new Actions(getDriver());

        }
        return builder;


    }
}

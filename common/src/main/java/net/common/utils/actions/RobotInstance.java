package net.common.utils.actions;

import java.awt.*;

public class RobotInstance {

    private static Robot robot;

    private RobotInstance(){
        if (robot==null)
        try {
            robot = new Robot();
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }
}

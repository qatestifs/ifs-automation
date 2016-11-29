package net.common.utils.helper;


import java.util.logging.Logger;

public class Log {

    private static Logger log = Logger.getLogger(SeleniumWrapper.class.getName());

    public static Logger getLog() {
        return log;
    }

    public static void info(String msg) {
        log.info(msg);
    }

    public static void severe(String msg) {
        log.severe(msg);
    }

    public static void warning(String msg) {
        log.warning(msg);
    }
}

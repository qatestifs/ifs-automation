package net.common.utils.config;

public enum  PropertyFile {

    BROWSER("browser.properties"),
    URL("url.properties"),
    USER_DETAILS("user_details.properties");


    private String type;

    private PropertyFile(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

}

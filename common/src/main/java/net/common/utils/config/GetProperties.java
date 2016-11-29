package net.common.utils.config;

/**
 * Created by Ajay on 05/04/2016.
 */
public enum  GetProperties {

   GET_BROWSER("browser"),
    GET_URL("url"),
    GET_USERNAME("user_id"),
    GET_PASSWORD("password");




    private String value;

    GetProperties(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

package net.hmrc.ifs.config;

/**
 * Created by Ajay on 10/11/2016.
 */
public class Login {

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    String type;
    String message;



}

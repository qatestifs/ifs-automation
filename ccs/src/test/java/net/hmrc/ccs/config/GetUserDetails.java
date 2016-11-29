package net.hmrc.ccs.config;

/**
 * Created by Ajay on 20/11/2016.
 */
public class GetUserDetails {

    private String user;
    private String password;
    private int status;

    public GetUserDetails(String user, String password,int status) {
        this.status = status;
        this.user = user;
        this.password=password;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

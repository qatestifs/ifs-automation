package net.hmrc.ccs.config;

import static io.restassured.RestAssured.baseURI;

/**
 * Created by Ajay on 21/11/2016.
 */
public class BaseUrl {

     public static void setUp(){
        String port = System.getProperty("server.port");
        if (port == null) {
            io.restassured.RestAssured.port = Integer.valueOf(4200);
        }else{
            io.restassured.RestAssured.port = Integer.valueOf(port);
        }

        String basePath = System.getProperty("server.base");
        if(basePath==null){
            basePath = "/login/";
        }
        io.restassured.RestAssured.basePath = basePath;

        String baseHost = System.getProperty("server.host");
        if(baseHost==null){
            baseHost = "http://localhost";
        }
        baseURI = baseHost;
    }


}

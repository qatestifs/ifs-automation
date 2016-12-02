package net.hmrc.ccs.config;

import static io.restassured.RestAssured.baseURI;

/**
 * Created by Ajay on 21/11/2016.
 */
public class BaseUrl {

     public static void setUp(String url){
        String port = System.getProperty("server.port");
        if (port == null) {
            io.restassured.RestAssured.port = Integer.valueOf(8080);
        }else{
            io.restassured.RestAssured.port = Integer.valueOf(port);
        }

        String basePath = System.getProperty("server.base");
        if(basePath==null){
            basePath = "/ingestion-service-web//igs/"+url;
        }
        io.restassured.RestAssured.basePath = basePath;

        String baseHost = System.getProperty("server.host");
        if(baseHost==null){
//            baseHost = "http://localhost";
            baseHost = "http://172.19.32.45";
        }
        baseURI = baseHost;
    }


}

//package net.hmrc.ccs.page.authentication;
//
//import io.restassured.RestAssured;
//import org.junit.Before;
//import org.junit.Test;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import static io.restassured.RestAssured.*;
//import static org.hamcrest.Matchers.containsString;
//import static org.hamcrest.Matchers.is;
//
///**
// * Created by Ajay on 25/11/2016.
// */
//public class SampleTest {
//
//    @Before
//    public void setUp(){
//        String port = System.getProperty("server.port");
//        if (port == null) {
//            RestAssured.port = Integer.valueOf(4200);
//        }else{
//         RestAssured.port = Integer.valueOf(port);
//        }
//
//        String basePath = System.getProperty("server.base");
//        if(basePath==null){
//            basePath = "/login/";
//        }
//        RestAssured.basePath = basePath;
//
//        String baseHost = System.getProperty("server.host");
//        if(baseHost==null){
//            baseHost = "http://localhost";
//        }
//        baseURI = baseHost;
//       }
//
//    @Test
//    public void serviceStatus() {
//        given().when().get("").then().statusCode(200);
//             }
//    @Test
//    public void BodyContentStatus() {
//        given().when().get("").then().body(containsString("IfsPoc"));
//    }
//    @Test
//    public void login(){
//        Map<String,String> login = new HashMap<>();
//        login.put("username","mj.qa.com");
//        login.put("password","m");
//        given().contentType("application/json")
//                .body(login)
//                .when().post("")
//                .then().statusCode(200);
//    }
//    @Test
//    public void customerId(){
//        get("").
//                then().
//                assertThat().body("customer",is("12212"));
////                and().
////                assertThat().body("customer.firstName", equalTo("John")).
//
//    }}
//

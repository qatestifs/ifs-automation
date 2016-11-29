package net.hmrc.docm.config;

import com.jayway.restassured.http.ContentType;
import org.junit.Test;

import static com.jayway.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.is;

/**
 * Created by Ajay on 29/11/2016.
 */
public class SampleDocMTest {

    private final String URL="http://172.19.32.69:8080/dctm-rest/repositories/MyRepo/documents/090007c28002b503";

    @Test
    public void test() {
        given().accept(ContentType.JSON).auth().basic("dmadmin", "password").when().get(URL).then().statusCode(200).
                body("type", equalTo("dm_document")).
                body("properties.object_name", equalTo("TestDoc3.pdf"))
                .body("properties.r_content_size", is(greaterThan(0)));
}}

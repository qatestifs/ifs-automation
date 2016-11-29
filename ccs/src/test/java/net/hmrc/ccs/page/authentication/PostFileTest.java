package net.hmrc.ccs.page.authentication;

import org.hamcrest.core.Is;
import java.io.File;

import static net.common.utils.filegenerator.FileGenerator.file;
import static net.common.utils.filegenerator.FileGenerator.generateFile;
import static net.serenitybdd.rest.SerenityRest.given;

/**
 * Created by Ajay on 25/11/2016.
 */
public class PostFileTest {
    public static void main(String args[]){
        post("postFile.pdf",".05");
    }

    public static void post(String fileName,String size){
        generateFile(fileName,size);

           given()
                .contentType("multipart/form-data")
                .formParam("customerId","customer1","sourceSystem","12345","receivedDate",
                        "2012-03-31T18:25:43.511Z","uploadDate","2012-11-14T09:30:12.345Z")
                .multiPart(new File(String.valueOf(file.getAbsoluteFile()))).
                expect().
                body("fileUploadResult", Is.is(200)).
                when().
                post("http://172.19.32.45:8080/ingestion-service-web/igs/document");
//        post("http://localhost:8080/ingestion-service-web/igs/document/upload");
}}

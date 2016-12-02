package net.hmrc.ccs.fileupload;


import net.thucydides.core.annotations.Step;
import org.hamcrest.core.Is;
import java.io.File;
import static net.common.utils.filegenerator.FileGenerator.file;
import static net.common.utils.filegenerator.FileGenerator.generateFile;
import static net.serenitybdd.rest.SerenityRest.given;

/**
 * Created by Ajay on 30/11/2016.
 */
public class UploadFile {

    @Step
    public void postFile(String fileName, String size) {
        generateFile(fileName, size);
        given()
                .contentType("multipart/form-data")
                .multiPart("file", new File(String.valueOf(file.getAbsoluteFile())))
                .multiPart("metaData", "{\"customerId\":\"customer1\"," +
                        "\"sourceSystem\":\"12345\",\"receivedDate\":\"2012-03-31T18:25:43.511Z\"," +
                        "\"uploadDate\":\"2012-11-14T09:30:12.345Z\" }")
                .expect()
                .when()
                .post("");
    }

    @Step
    public void confirmUpload(){
        given().expect()
                .body("fileUploadResult", Is.is(200));
    }
}

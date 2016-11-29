package net.hmrc.ifs.page.upload;

import net.thucydides.core.annotations.Step;

import java.util.concurrent.TimeUnit;

import static net.common.utils.Interface.ElementLocator.*;
import static net.common.utils.actions.ClickOnElement.clickToNavigate;
import static net.common.utils.actions.TypeText.upload;
import static net.common.utils.filegenerator.FileGenerator.file;
import static net.common.utils.filegenerator.FileGenerator.generateFile;
import static net.common.utils.helper.Log.info;
import static net.common.utils.helper.SeleniumWrapper.getDriver;
import static net.common.utils.locator.LocateElement.ById;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

/**
 * Created by Ajay on 17/11/2016.
 */
public class FileUpload {

    @Step
    public void selectFile(String fileName,String size) {
        getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        generateFile(fileName,size);
        System.out.println(ById(browse_button_id).getText());
        upload(ById(browse_button_id), String.valueOf(file.getAbsoluteFile()));
        info("User Selects a File to upload");
    }

    @Step
    public void verifyFileSelected(String fileName) {
      assertThat(ById(browse_button_id).getAttribute("value"),is(fileName));
        info("User confirms the file the selected");
    }

    @Step
    public void uploadFile() {
        getDriver().manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
        assertThat(ById(upload_file_id).getText(),is("Upload"));
        clickToNavigate(upload_file_id, "ID");
        info("User clicks upload button to upload the file");
    }

    @Step
    public void verifyUploadConfirmationMessage(String message) {
        assertThat(ById(file_upload_confirmation_message_id).getText(),is(message));
    }


}

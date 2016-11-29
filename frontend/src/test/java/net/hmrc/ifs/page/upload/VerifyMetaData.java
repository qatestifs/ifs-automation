package net.hmrc.ifs.page.upload;

import net.hmrc.ifs.config.MetaData;
import net.thucydides.core.annotations.Step;

import static net.common.utils.Interface.ElementLocator.*;
import static net.common.utils.locator.LocateElement.ById;
import static net.common.utils.timestamp.CurrentDate.uploadTimeStamp;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


/**
 * Created by Ajay on 28/11/2016.
 */
public class VerifyMetaData {

    @Step
    public void setCustomerId(String id){
        assertThat(ById(customerIdMessage_id).getAttribute("value"), is(id));
    }

    @Step
    private void setSourceSystem(String sourceSystem) {
        assertThat(ById(sourceSystem_id).getAttribute("value"), is(sourceSystem));
    }

    @Step
    private void setContentType(String contentType) {
        assertThat(ById(contentType_id).getAttribute("value"), is(contentType));
    }

    @Step
    private void setUploadDate(String uploadDate){
        assertThat(ById(uploadDate_id).getAttribute("value").substring(0,21), is(uploadDate));
    }


    public void verifyMetaData(MetaData data){
        setCustomerId(data.getCustomerId());
        setSourceSystem(data.getSourceSystem());
        setContentType(data.getContentType());
        setUploadDate(uploadTimeStamp());

    }
}

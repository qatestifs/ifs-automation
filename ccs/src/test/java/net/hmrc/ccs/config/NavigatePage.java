package net.hmrc.ccs.config;

import net.hmrc.ccs.fileupload.UploadFile;

/**
 * Created by Ajay on 30/11/2016.
 */
public class NavigatePage {

    public UploadFile uploadFile;

    public NavigatePage(){
        uploadFile= new UploadFile();
    }
}

package net.common.utils.helper;

import org.openqa.selenium.firefox.FirefoxProfile;

public class UserFireFoxProfile {

    private static FirefoxProfile firefoxProfile;

    private UserFireFoxProfile(){

    }
    public static FirefoxProfile firefoxProfile()  {
         firefoxProfile = new FirefoxProfile();
//        firefoxProfile.setPreference(PORT_PREFERENCE, 7045);
        firefoxProfile.setPreference("browser.download.folderList",2);
        firefoxProfile.setPreference("browser.download.manager.showWhenStarting",false);
//        firefoxProfile.setPreference("browser.download.dir",download_path);
        firefoxProfile.setPreference("browser.helperApps.neverAsk.saveToDisk",
                "text/csv,application/x-msexcel,application/excel,application/x-excel,application/vnd.ms-excel,image/png,image/jpeg,text/html,text/plain,application/msword,application/xml");

        return firefoxProfile;
    }
}

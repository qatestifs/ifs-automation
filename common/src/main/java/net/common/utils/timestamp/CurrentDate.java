package net.common.utils.timestamp;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by Ajay on 29/11/2016.
 */
public class CurrentDate {

    private static String currentDate;

    public static String uploadTimeStamp(){
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        cal.add(Calendar.DAY_OF_YEAR, 0);
        Date today = cal.getTime();
        SimpleDateFormat formatter = new SimpleDateFormat("E MMM dd yyyy HH:mm");
        currentDate = formatter.format(today);
        return currentDate;
    }

}

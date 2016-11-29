//package net.hmrc.docm.config;
//
//import com.documentum.fc.client.*;
//import com.documentum.fc.common.*;
//import com.documentum.fc.client.*;
//import com.documentum.fc.common.*;
//
///**
// * Created by Ajay on 27/11/2016.
// */
//public class ConnectToDocM {
//
//    public static void getDocMInstance(){
//        String docbaseName = "docbase";
//        String userName = "user";
//        String password = "pass";
//        IDfClientX clientx = new DfClientX();
//        IDfClient client = clientx.getLocalClient();
//
//        IDfSessionManager sMgr = client.newSessionManager();
//        IDfLoginInfo loginInfoObj = clientx.getLoginInfo();
//        loginInfoObj.setUser(userName);
//        loginInfoObj.setPassword(password);
//        loginInfoObj.setDomain(null);
//        sMgr.setIdentity(docbaseName, loginInfoObj);
//        IDfSession session = null;
//        try
//        {
//            session = sMgr.getSession(docbaseName);
//            // do stuff here
//        }
//        finally
//        {
//            if(session != null)
//            {
//                sMgr.release(session);
//            }
//        }
//
//    }
//}

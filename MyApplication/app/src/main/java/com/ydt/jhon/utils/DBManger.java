package com.ydt.jhon.utils;

import android.content.Context;

/**
 * Created by 姚德涛 on 2017/8/8.
 */

public class DBManger {
    private static DataBaseHelper helper;
    public static DataBaseHelper getIntance(Context context){
        if (helper == null){
            helper = new DataBaseHelper(context);
        }
        return helper;
    }
}

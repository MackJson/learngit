package com.ydt.jhon.utils;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * Created by 姚德涛 on 2017/8/8.
 */

public class DataBaseHelper extends SQLiteOpenHelper {
    public DataBaseHelper(Context context) {
        super(context, Constanct.DB_NAME, null, Constanct.DB_VERSION);
    }

    /**
     *
     * @param db
     */
    @Override
    public void onCreate(SQLiteDatabase db) {
        String sql="create table "+Constanct.TB_BAME+"("+Constanct.P_ID+" Integer primary key,"+Constanct.P_NAME+" varchar(10),"+Constanct.P_AGE+" Integer)";
        db.execSQL(sql);//执行sql语句
    }

    /**
     *
     * @param db
     * @param oldVersion
     * @param newVersion
     */
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}

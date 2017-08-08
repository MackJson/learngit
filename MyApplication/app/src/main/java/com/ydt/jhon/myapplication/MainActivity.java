package com.ydt.jhon.myapplication;

import android.content.ContentValues;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.ydt.jhon.utils.Constanct;
import com.ydt.jhon.utils.DBManger;
import com.ydt.jhon.utils.DataBaseHelper;

import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity {

    private DataBaseHelper helper;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        helper = DBManger.getIntance(this);

    }


    @OnClick({R.id.create, R.id.insert, R.id.updata, R.id.delete, R.id.query})
    public void onViewClicked(View view) {

        switch (view.getId()) {
            case R.id.create:
                SQLiteDatabase database = helper.getWritableDatabase();
                ContentValues value = new ContentValues();
                value.put(Constanct.P_ID,1);
                value.put(Constanct.P_NAME,"要的他");
                value.put(Constanct.P_AGE,24);
                long insert = database.insert(Constanct.TB_BAME, null, value);
                if (insert>0){
                    Toast.makeText(this,"插入数据成功",Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(this,"插入数据失败",Toast.LENGTH_SHORT).show();
                }
                database.close();
                break;
            case R.id.insert:
                break;
            case R.id.updata:
                break;
            case R.id.delete:
                break;
            case R.id.query:
                break;
        }
    }
}

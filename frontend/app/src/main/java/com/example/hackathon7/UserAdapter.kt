package com.example.hackathon7
/*
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import com.jiwoorld.textview.R.id.iv_about

class UserAdapter(val context: Context, val UserList: ArrayList<User>) : BaseAdapter()

{
    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val view: View = LayoutInflater.from(context).inflate(R.layout.lsit_item_user, null) //뷰를 붙임

        val profile = view.findViewById<ImageView>(R.id.iv_about)
        val name = view.findViewById<TextView>(R.id.tv_about)

        val user = UserList[position]

        profile.setImageResource(user.profile)
        name.text = user.name

        return view //꼭 return 해줘야함
    }

    //어떤 아이템들을 끌고 올꺼냐
    override fun getItem(position: Int): Any {
        return UserList[position]
    }


    override fun getItemId(position: Int): Long {
        return 0
    }

    override fun getCount(): Int {
        return UserList.size
    }

}*/
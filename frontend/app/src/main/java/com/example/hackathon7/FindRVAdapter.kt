package com.example.hackathon7

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.hackathon7.databinding.ItemFindBinding

class FindRVAdapter (private val findList: ArrayList<Profile>): RecyclerView.Adapter<FindRVAdapter.FindViewHolder>() {
    inner class FindViewHolder(private val viewBinding: ItemFindBinding): RecyclerView.ViewHolder(viewBinding.root){
        fun bind(profile: Profile){
            //viewBinding.userImage = profile.ImgUrl
            viewBinding.userName.text = profile.nickName
            viewBinding.sendButton.setOnClickListener {
                //버튼
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FindViewHolder {
        val viewBinding = ItemFindBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return FindViewHolder(viewBinding)
    }

    override fun onBindViewHolder(holder: FindViewHolder, position: Int) {
        holder.bind(findList[position])
    }

    override fun getItemCount(): Int = findList.size
}
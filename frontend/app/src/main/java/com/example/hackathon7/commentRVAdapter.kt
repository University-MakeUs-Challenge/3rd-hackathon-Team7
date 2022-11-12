package com.example.hackathon7

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.hackathon7.databinding.ItemCommentBinding

class commentRVAdapter(private val commentList: ArrayList<Comment>): RecyclerView.Adapter<commentRVAdapter.CommentViewHolder>() {
    inner class CommentViewHolder(private val viewBinding: ItemCommentBinding): RecyclerView.ViewHolder(viewBinding.root){
        fun bind(comment: Comment){
            //viewBinding.userImage = profile.ImgUrl
            viewBinding.userName.text = comment.userName
            viewBinding.userComment.text = comment.comment
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CommentViewHolder {
        val viewBinding = ItemCommentBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return CommentViewHolder(viewBinding)
    }

    override fun onBindViewHolder(holder: CommentViewHolder, position: Int) {
        holder.bind(commentList[position])
    }

    override fun getItemCount(): Int = commentList.size
}
package com.jiwoorld.umc

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.fragment.app.FragmentManager
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.example.hackathon7.R
import com.example.hackathon7.databinding.ActivityNaviBinding
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator



private const val TAG_MY = "my_fragment"
private const val TAG_SEARCH = "search_fragment"
private const val TAG_COMMUNITY = "community_fragment"

class NaviActivity : AppCompatActivity() {

    private lateinit var binding : ActivityNaviBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityNaviBinding.inflate(layoutInflater)
        setContentView(binding.root)


        setFragment(TAG_MY, MyFragment())

        binding.navigationView.setOnItemSelectedListener { item ->
            when(item.itemId) {
                R.id.myFragment -> setFragment(TAG_MY, MyFragment())
                R.id.searchFragment -> setFragment(TAG_SEARCH, SearchFragment())
                R.id.communityFragment-> setFragment(TAG_COMMUNITY, CommunityFragment())
            }
            true
        }



    }

    private fun setFragment(tag: String, fragment: Fragment) {
        val manager: FragmentManager = supportFragmentManager
        val fragTransaction = manager.beginTransaction()

        if (manager.findFragmentByTag(tag) == null){
            fragTransaction.add(R.id.mainFrameLayout, fragment, tag)
        }

        val my = manager.findFragmentByTag(TAG_MY)
        val search = manager.findFragmentByTag(TAG_SEARCH)
        val community = manager.findFragmentByTag(TAG_COMMUNITY)

        if (my != null){
            fragTransaction.hide(my)
        }

        if (search != null){
            fragTransaction.hide(search)
        }

        if (community != null) {
            fragTransaction.hide(community)
        }

        if (tag == TAG_MY) {
            if (my!=null){
                fragTransaction.show(my)
            }
        }
        else if (tag == TAG_SEARCH) {
            if (search != null) {
                fragTransaction.show(search)
            }
        }

        else if (tag == TAG_COMMUNITY){
            if (community != null){
                fragTransaction.show(community)
            }
        }

        fragTransaction.commitAllowingStateLoss()
    }


}


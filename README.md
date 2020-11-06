先下载接口

[接口文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

运行接口
```
npm install
node app.js
```
运行之后就可以看到接口的文档了。

运行项目 
```js
npm install
npm run serve
```

项目结构目录

│  App.vue
│  main.js
│  
├─assets 							#应用资源目录
│      
├─common						    #公共样式
│  └─js
│          swiper.js				#swiper插件
│          tool.js					#封装的方法、时间格式化、十万以上截取、实现深拷贝
│          
├─components				        #公共组件
│  │  Home.vue	                    #主页布局
│  │  
│  ├─allmv	                        #MV模块
│  │      Allmv.vue
│  │      
│  ├─aside	                        #侧边栏
│  │      Aside.vue	                #推荐、发现音乐、全部MV
│  │      MySongList.vue	        #我的歌单
│  │      
│  ├─centent 	                    #共用组件
│  │  ├─musiclist
│  │  │      Musiclist.vue
│  │  │      TableList.vue
│  │  │      
│  │  └─musicplay	                #底部音乐播放栏
│  │          LyricList.vue
│  │          MusicLyric.vue
│  │          Musicplay.vue	        #主要展示页
│  │          MusicPlayList.vue	    #播放列表
│  │          playlist.js
│  │          
│  ├─discover	                    #推荐音乐
│  │  │  Discover.vue
│  │  │  
│  │  ├─ArtistList
│  │  │      Artist.vue
│  │  │      ArtistList.vue
│  │  │      
│  │  ├─newsongList
│  │  │      NewsongList.vue
│  │  │      NewsongTable.vue
│  │  │      
│  │  ├─personalized
│  │  │  │  Personalized.vue
│  │  │  │  
│  │  │  ├─individ
│  │  │  │      Individ.vue
│  │  │  │      
│  │  │  ├─individchildren
│  │  │  │      PrivateContent.vue
│  │  │  │      
│  │  │  └─newsong
│  │  │          NewSong.vue
│  │  │          
│  │  ├─Popularsonglist
│  │  │      Popularsonglist.vue
│  │  │      
│  │  └─RankingList
│  │          ranking.vue
│  │          RankingList.vue
│  │          
│  └─header
│          header.vue
│          searchBox.vue
│          SearchSuggest.vue
│          
├─network
│  │  axios.js
│  │  search.js									
│  │  song.js
│  │  user.js
│  │  
│  └─discover
│          discover.js
│          
├─plugins	                        #element插件
│      element.js
│      
├─router	                        #路由
│      index.js
│      
├─store	                            #vuex
│      index.js
│      
└─views	                            #详情页
    ├─artistdetail	                #歌手详情页
    │  │  ArtistDetail.vue
    │  │  
    │  └─childrenComp
    │          ArtistAlbum.vue
    │          ArtistAlbumList.vue
    │          ArtistBaseInfo.vue
    │          ArtistBtns.vue
    │          ArtistDesc.vue
    │          ArtistMv.vue
    │          SimiArtist.vue
    │          
    ├─musiclistdetail	            #音乐列表详情页
    │  │  Musiclistdetail.vue
    │  │  
    │  └─childrenComps
    │          Collector.vue
    │          CommentList.vue
    │          DetailBaseInfo.vue
    │          DetailBtns.vue
    │          
    └─searchdetail	                #搜索详情页
            SearchList.vue
        

效果图起飞:

![Snipaste_2020-11-06_18-08-52](C:\Users\19752\Desktop\Snipaste_2020-11-06_18-08-52.png)
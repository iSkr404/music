// 发现音乐请求地址 
import axios from 'axios'
import { formatDate } from '@/common/js/tool.js'
// discover

// 发现音乐页面start--------------------
// 获取榜单列表
export function _getTopListDetail () {
  const result = axios.get('/toplist/detail')
  return result
}



/**最新歌曲 */
export function _getTopSongs (type) {
  return axios({
    url: '/top/song',
    params: {
      type: type
    }
  })
}


// 推荐新音乐
export function _getPersonalizedNewsong () {
  return axios({
    url: '/personalized/newsong'
  })
}

// 获取独家放送列表
export function _getExclusiveBroadcastList (limit) {
  return axios({
    url: '/personalized/privatecontent/list',
    params: {
      limit
    }
  })
}


// 轮播图
export function _getBanner () {
  return axios({
    url: '/banner'
  })
}


// 热门歌单分类
export function _getHotPlaylist () {
  return axios({
    url: '/playlist/hot'
  })
}

// 获取精品歌单
export function _getTopHighquality (obj) {
  const result = axios.get('/top/playlist/highquality', {
    params: {
      ...obj
    }
  })
  return result
}


// 页面的路由end------------------

// 歌单start-------------------
// 获取推荐歌单列表
export function _getRecommendedSongList (limit) {
  const result = axios.get('/personalized', {
    params: {
      limit
    }
  })
  return result
}


// 获取歌单详情信息
export function _getMusicListDetail (id) {
  const result = axios.get('/playlist/detail', {
    params: {
      id: id
    }
  })
  return result
}

// 获取歌曲详情信息
export function _getSongsDetail (id) {
  const result = axios.get('/song/detail', {
    params: {
      ids: id
    }
  })
  return result
}

// 对歌曲详情信息处理
export class songDetail {
  constructor(songs) {
    this.id = songs[0].id;
    this.name = songs[0].name;
    this.album = songs[0].al.name;
    this.song = songs[0].ar[0].name;
    this.pic = songs[0].al.picUrl;
    this.time = formatDate(new Date(songs[0].dt), 'mm:ss')
  }
}

// 歌单的基础信息
export class baseInfo {
  constructor(playlist) {
    this.img = playlist.coverImgUrl,
      // 歌单名字
      this.name = playlist.name,
      // 标签
      this.tags = playlist.tags,
      // 描述信息
      this.desc = playlist.description,
      // 分享
      this.shareCount = playlist.shareCount,
      // 播放
      this.playCount = playlist.playCount,
      // 评论
      this.commentCount = playlist.commentCount,
      // 收藏
      this.subscribedCount = playlist.subscribedCount,
      // 歌曲数
      this.trackCount = playlist.trackCount,
      // 创建时间
      this.createTime = playlist.createTime,
      // 作者信息。  名字
      this.nickname = playlist.creator.nickname,
      // 头像
      this.avatarUrl = playlist.creator.avatarUrl
  }
}

// 获取歌单最新评论信息
export function _getCommentlist (obj) {
  const result = axios.get('/comment/playlist', {
    params: {
      ...obj
    }
  })
  return result
}


// 获取歌单最热评论信息
export function _getHotCommentlist (obj) {
  const result = axios.get('/comment/hot', {
    params: {
      ...obj
    }
  })
  return result
}



// 获取收藏者信息
export function _getCollector (obj) {
  return axios({
    url: '/playlist/subscribers',
    params: { ...obj }
  })
}

// 歌单end---------------------------

// 歌手start------------------------------


// 获取歌手列表信息
export function _getArtistlist (obj) {
  const result = axios.get('/artist/list', {
    params: {
      ...obj
    }
  })
  return result
}


// 获取歌手介绍
export function _getArtistalbumDesc (id) {
  return axios({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

// 获取歌手专辑
export function _getArtistalbum (id) {
  return axios({
    url: '/artist/album',
    params: {
      id
    }
  })
}

// 歌手热门50首歌曲
export function _getArtistTop50 (id) {
  return axios({
    url: '/artist/top/song',
    params: {
      id
    }
  })
}

// 获取专辑内容
export function _getAlbum (id) {
  return axios({
    url: '/album',
    params: {
      id
    }
  })
}

// 获取相似歌手
export function _simiArtist (id, cookie) {
  return axios({
    url: '/simi/artist',
    params: {
      id,
      cookie
    }
  })
}
// 歌手end---------------------

// 获取全部
export function _getMusicMV(){
  return axios({
    url:'/mv/all'
  })
}
// 获取推荐的MV
export function _getPersonalized(){
  return axios({
    url:'/personalized/mv'
  })
}
// 获取最新的MV
export function _getFristMv(obj){
  return axios({
    url:'/mv/first',
    params:{
      ...obj
    }
  })
}
// 获取mv的详情
export function _getMvDetail(id){
  // console.log(id);
  // return axios({
  //   url:'/mv/detail',
  //   params:{
  //     mvid:id
  //   }
  // })
  const result = axios.get('/mv/detail', {
    params: {
      mvid: id
    }
  })
  return result
}



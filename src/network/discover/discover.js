// 发现音乐请求地址 
import axios from 'axios'
import { formatDate } from '@/common/js/tool.js'
// discover

// 获取推荐歌单列表
export function _getRecommendedSongList (limit) {
  const result = axios.get('/personalized', {
    params: {
      limit
    }
  })
  return result
}

// 获取热搜列表
export function _getSearchHot () {
  const result = axios.get('/search/hot/detail')
  return result
}


// 获取榜单列表
export function _getTopListDetail () {
  const result = axios.get('/toplist/detail')
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

// 获取歌单评论信息
export function _getCommentlist (obj) {
  const result = axios.get('/comment/playlist', {
    params: {
      ...obj
    }
  })
  return result
}


// 获取歌手列表信息
export function _getArtistlist (obj) {
  const result = axios.get('/artist/list', {
    params: {
      ...obj
    }
  })
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



// 获取收藏者信息
export function _getCollector (obj) {
  return axios({
    url: '/playlist/subscribers',
    params: { ...obj }
  })
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



// 发送评论
export function _SendComments (obj) {
  return axios({
    url: '/comment',
    params: {
      ...obj
    }
  })
}
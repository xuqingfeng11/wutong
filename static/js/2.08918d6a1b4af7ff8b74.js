webpackJsonp([2],{579:function(t,i,n){n(623);var s=n(9)(n(597),n(635),"data-v-755d5a68",null);t.exports=s.exports},587:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n(56),a=n.n(s),e=n(65),o=n.n(e),A=n(200),l=n.n(A),r=n(201),c=n.n(r),d=n(128),p=n(87),g=n(47),f=n.i(d.a)("transform"),m=n.i(d.a)("backdrop-filter");i.default={mixins:[p.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},n.i(g.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),n=1,s=0,a=0,e=Math.abs(t/this.imageHeight);t>0?(n=1+e,s=10):a=Math.min(20,20*e),this.$refs.layer.style[f]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[m]="blur("+a+"px)",t<this.minTransalteY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[f]="scale("+n+")",this.$refs.bgImage.style.zIndex=s}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},588:function(t,i,n){i=t.exports=n(577)(!0),i.push([t.i,".music-list[data-v-f63551a8]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-f63551a8]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-f63551a8]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-f63551a8]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-f63551a8]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-f63551a8]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-f63551a8]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-f63551a8]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-f63551a8]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-f63551a8]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-f63551a8]{position:relative;height:100%;background:#222}.music-list .list[data-v-f63551a8]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-f63551a8]{padding:20px 30px}.music-list .list .loading-container[data-v-f63551a8]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["/Users/true/Desktop/musciplayer/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-f63551a8] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-f63551a8] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-f63551a8] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-f63551a8] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-f63551a8] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-f63551a8] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-f63551a8] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-f63551a8] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-f63551a8] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-f63551a8] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-f63551a8] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-f63551a8] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-f63551a8] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-f63551a8] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},589:function(t,i,n){var s=n(588);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(578)("c89175de",s,!0)},590:function(t,i,n){n(589);var s=n(9)(n(587),n(591),"data-v-f63551a8",null);t.exports=s.exports},591:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},593:function(t,i,n){"use strict";function s(){var t=r()({},d.b,{platform:"h5",uin:0,needNewCode:1});return n.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)}function a(){var t=r()({},d.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return g.a.get("/api/getDiscList",{params:t}).then(function(t){return A.a.resolve(t.data)})}function e(t){var i=r()({},d.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return n.i(c.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",i,d.c)}i.b=s,i.c=a,i.a=e;var o=n(89),A=n.n(o),l=n(88),r=n.n(l),c=n(199),d=n(64),p=n(202),g=n.n(p)},597:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n(56),a=n.n(s),e=n(590),o=n.n(e),A=n(593),l=n(64),r=n(47),c=n(129);i.default={computed:a()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},n.i(r.a)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");n.i(A.a)(this.disc.dissid).then(function(i){i.code===l.a&&(t.songs=t._normalizeSongs(i.cdlist[0].songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){t.songid&&t.albummid&&i.push(n.i(c.b)(t))}),i}},components:{MusicList:o.a}}},613:function(t,i,n){i=t.exports=n(577)(!0),i.push([t.i,".slide-enter-active[data-v-755d5a68],.slide-leave-active[data-v-755d5a68]{transition:all .3s}.slide-enter[data-v-755d5a68],.slide-leave-to[data-v-755d5a68]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["/Users/true/Desktop/musciplayer/src/components/disc/disc.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-755d5a68],\n.slide-leave-active[data-v-755d5a68] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-755d5a68],\n.slide-leave-to[data-v-755d5a68] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},623:function(t,i,n){var s=n(613);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(578)("4f188ad0",s,!0)},635:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.08918d6a1b4af7ff8b74.js.map
<template>
    <div class="intro-block j-intro-block">
        <div class="style-block" v-html="styleFinal"></div>
        <pre class="display-block" ref="displayBlock">{{textFinal}}</pre>
        <div class="intro-box">
            <div class="intro-box-main" v-show="showIntro">
                <p class="intro-box-hide">&emsp;&emsp;我叫孙玮，女，标准的程序媛</p>
                <p class="intro-box-hide">&emsp;&emsp;14年进入北京天极传媒集团实习，入职iOS开发工程师</p>
                <p class="intro-box-hide">&emsp;&emsp;15年毕业，任职于朵西科技有限公司iOS开发工程师，从事圆桌APP开发工作</p>
                <p class="intro-box-hide">&emsp;&emsp;17年下半年重新规划了技术栈路线，决定开始做前端方面的尝试</p>
                <p class="intro-box-hide">&emsp;&emsp;掌握iOS开发，前端开发，移动前端开发</p>
                <p class="intro-box-hide">&emsp;&emsp;电话：18211142991</p>
                <p class="intro-box-hide">&emsp;&emsp;邮箱：zhuanshuyuni66@163.com</p>

                <h3 class="intro-box-hide">&emsp;&emsp;iOS专业技能如下：</h3>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握OC语言开发，也会swift语言开发</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握直播技术，即时聊天技术，视频播放技术，socket技术，蓝牙技术等</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握代码开发，xib开发，storyboard开发</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握iOS SDK及Xcode开发工具以及CocoaPods等第三方库集成工具</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练使用Git以及SourceTree代码管理工具</p>

                <h3 class="intro-box-hide">&emsp;&emsp;iOS项目如下：</h3>
                <ul class="intro-list-task">
                    <li class="intro-box-hide">
                        <p class="c-fff">1：<a class="img" href="javascript:" target="">圆桌（已上线）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;一款面向于固定用户的封闭式社交，在同学圈建立群组讨论，让话题更丰富，让沟通更有趣，让聊天更容易。 群组内根据话题自动分类，支持多人评论子话题，子话题列表。支持投票、报名、链接跳转、短视频、消息实时接收， 话题与好友圈的相互分享，学生签到、请假、统计、成绩课表查询等等，老师代请假、出勤、调课管理等等，直播、点播教学、订房等CRM教学管理系统<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2：<a class="img" href="javascript:" target="">小集体（已上线）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;这是一款即时聊天并附带工具属性的应用，讨论模块支持创建开放和私密小组，小组中可以创建位置、投票、视频、报名等话题，并支持对话题评论聊天， 通讯录模块支持小集体层级好友，应用模块支持课表，签到等工具属性，同时支持链接的跳转,文档的分享，音频播放，发送短信等。<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">3：<a class="img" href="javascript:" target="">共享（已下线）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;这是一款基于环信SDK开发的即时聊天APP，仿微信，由于公司觉得此款APP定位不准确，最终停止了投入<br>
                            &emsp;&emsp;基本功能已经开发完毕<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">4：<a class="img" href="javascript:" target="">芥末头条（外包）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;一款新闻客户端app。包括新闻列表、新闻频道、视频列表、视频频道、图集、图集频道，个人中心，播放视频，查看图集等模块<br>
                            &emsp;&emsp;资讯类APP技术含量很高，1.0版本开发完毕交付需求方<br>
                        </p>
                    </li>
                </ul>


                <h3 class="intro-box-hide">&emsp;&emsp;前端专业技能如下：</h3>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握HTML5，CSS3，JS开发</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练使用Vue框架以及React Native框架，能独立开发常用组件</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握前端的工程化,模块化,组件化的开发思想</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握对BootStrtap，ElementUI等UI框架的使用</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握vue+webpack+axios+vue-router+vuex+eslint 的项目开发</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握react+webpack+less+redux+react-router+ant 的项目开发</p>
                <p class="intro-box-hide">&emsp;&emsp;能借助抓包工具Fiddle与charles对应用做分析</p>
                <ul class="intro-list-task">
                    <li class="intro-box-hide">
                        <p class="c-fff">1：<a class="img" href="javascript:" target="">CRM管理后台（参与重构）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;CRM管理后台是为清华五道口，香山等学校的教师系统管理而设计的一个平台，包括各种模块管理以及聊天功能等等<br>
                            &emsp;&emsp;该项目是用React开发的<br>
                            &emsp;&emsp;这是两人开发的项目，主要负责组织并搭建项目框架，升级并配置各种使用库，登录逻辑，登录，主界面菜单栏，学生管理，校友审核功能实现，重新配置redux数据管理层，数据请求层，错误处理层，逻辑嵌套层等等<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2：<a class="img" href="javascript:" target="">校友采集（个人项目）</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;校友采集用于客户端录入校友信息模块，并在 web 后台管理的校友审核模块审核通过<br>
                            &emsp;&emsp;该项目是用Vue开发的<br>
                        </p>
                    </li>
                </ul>

                <h3 class="intro-box-hide">&emsp;&emsp;移动前端专业技能如下：</h3>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握微信小程序开发</p>
                <p class="intro-box-hide">&emsp;&emsp;熟练掌握小米轻应用开发</p>
                <ul class="intro-list-task">
                    <li class="intro-box-hide">
                        <p class="c-fff">1：<a class="img" href="javascript:" target="">电影资讯</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;熟练掌握对小米小程序API的使用<br>
                            &emsp;&emsp;借助豆瓣开放API做的一个电影资讯查询的小程序<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2：<a class="img" href="javascript:" target="">芥末头条</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;基于小米新应用技术开发的一款新闻资讯的新应用，实现了秒开，用完即走的用户体验<br>
                        </p>
                    </li>
                </ul>

                <h3 class="intro-box-hide">&emsp;&emsp;加分项专业技能如下：</h3>
                <p class="intro-box-hide">&emsp;&emsp;掌握NodeJS的基本使用</p>
                <p class="intro-box-hide">&emsp;&emsp;掌握Xampp集成环境的基本使用</p>
                <p class="intro-box-hide">&emsp;&emsp;掌握photoShop的基本使用</p>
                <p class="intro-box-hide">&emsp;&emsp;能借助Axure实现原型图的简单开发</p>

                <h3 class="intro-box-hide">&emsp;&emsp;课余时间的研究成果有：</h3>
                <ul class="intro-list-task">
                    <li class="intro-box-hide">
                        <p class="c-fff">1：<a class="img" href="javascript:" target="">开发订餐系统</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;使用Vue开发了第一个版本<br>
                            &emsp;&emsp;使用React Native开发了第二个版本<br>
                            &emsp;&emsp;随着Vue版本的升级，使用vue2 + vue-router2 + webpack2 + vue-cli2 + vue-resource + stylus + flex + eslint技术开发了第三个版本<br>
                        </p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2：<a class="img" href="javascript:" target="">新技术的开发尝试</a></p>
                        <p class="intro-text-desc">
                            &emsp;&emsp;使用charles抓包刷票<br>
                            &emsp;&emsp;使用canvas技术开发烟火场景动画<br>
                            &emsp;&emsp;等等<br>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'intro',
        data () {
            return {
                talk: this.$store.state.talk,
                start:true,
                showResult: false,
                closeText: false,
                showBtn: false,
                style: `
/* ......
* 怎样才能准确的表述自己的想法呢╮(╯_╰)╭
* 思来想去决定做一个场景动画
* 既然这样，那就写一个新的网页
* 个性化的代码看起来更有意思
*/

/* 首先给所有元素加上过渡效果 */
* {
    -webkit-transition: all .3s;
    transition: all .3s;
}
/* 选用绚烂的星空做背景算了
 * 毕竟背景图片比黑色背景有情调
 * 背景图片加载有点慢╮(╯_╰)╭
 * 视网速而定
 */
html,body {
    background-image: url("https://t.cn/RotuF4m");
    color: #333;
}
/* 好歹还是加个边框吧 */
.display-block {
    padding: 10px;
    border: 2px solid rgb(0,155,255);
    margin: 10px;
    overflow: auto;
    width: 400px; height: 90vh;
    float: left;
    background: rgba(0,155,255,0.5);
}
/* 最后，还差一个版块来介绍自己 */
.intro-box{
    padding: 12px;
    background: rgba(0,55,205,0.3);
    margin: 10px;
    min-height: 110vh;
    overflow: hidden;
}
/* 使命完成了，给主要的版块让让位置吧 */
.display-block {
    transform-origin: 0 50%;
    -webkit-transform: rotateY(30deg);
    transform: rotateY(30deg);
    margin-right: -100px;
}
`,
                currLen: 0,
                showIntro: false
            }
        },
        computed: {
            styleFinal(){
                return `<style>${this.style.substring(0,this.currLen)}</style>`
            },
            textFinal(){
                return `${this.style.substring(0,this.currLen)}`
            }
        },
        created () {
            let len = this.style.length;
            let _this = this;

            this.$nextTick(function () {
                new Promise(function (resolve) {
                    function appendStyle() {
                        if(_this.currLen === len){
                            resolve();
                        }
                        _this.currLen++;
                        _this.$refs.displayBlock.scrollTop = 9999;
                        setTimeout(appendStyle,30);
                    }
                    appendStyle();
                }).then(function () {
                    _this.showIntro = true;
                    document.body.setAttribute('class', '');
                    let introBoxHide = document.querySelectorAll(".intro-box-hide");
                    let len = introBoxHide.length;
                    for (let i = 0; i < len; i++) {
                        (function (i) {
                            setTimeout(function () {
                                introBoxHide[i].classList.add('show');
                            },i*500);
                        })(i)
                    }
                });
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    html,body{
        background-color: #000!important;
    }

    .intro-block{
        overflow: hidden;
        perspective: 1000px;
        perspective-origin: 10px 400px;
    }
    .display-block{
        color: #fff;
    }
    .intro-box{
        color: #eee;
        font-size: 18px;
        line-height: 1.5;
    }
    .c-fff{
        color: #fff;
    }
    .intro-text-desc{
        font-size: 14px;
        color: #ececec;
    }
    .intro-list-task>li{
        margin-bottom: 40px;
    }
    .intro-box-hide{
        visibility: hidden;
    }
    .intro-box-hide.show{
        animation: show 1s;
        animation-fill-mode: forwards;
    }
    @keyframes show {
        0%{
            visibility: visible;
            opacity: 0;
            transform: translate(100px,-20px);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: translate(0,0);
        }
    }
</style>

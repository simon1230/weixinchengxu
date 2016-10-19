//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        list: [],
        swiper: {
            indicatorDots: true,
            autoplay: true,
            interval: 1000,
            duration: 300
        },
        current: 0,
        bigswiper: {
            indicatorDots: false,
            autoplay: false,
            interval: 0,
            duration: 300
        }
    },

    onLoad: function() {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/imglist.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
           
                that.setData({
                    list: res.data
                });
            },
            fail: function(error) {
                console.log(error);
            }

        })
    },
    changeSlider: function(event) {
      // console.log(event.detail.current);
        this.setData({
            current: event.detail.current
        });
    },

  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  }

})

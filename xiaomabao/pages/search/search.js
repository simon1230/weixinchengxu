Page({
    data: {
        list: []

    },
    onLoad: function() {
        console.log(0);
    },

    onLoad: function() {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/fuwulist.json',
            header: {
                'Content-Type': 'application/json'
            },

            success: function(res) {
            	console.log( res.data);
                that.setData({
                    list: res.data
                })
            },
            fail: function(error) {
                console.log(error);
            }
        })
    }



});

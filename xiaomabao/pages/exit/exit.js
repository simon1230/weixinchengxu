Page({
    data: {
        modalHidden: true,
        current: 0,
        toastHidden: true,
        actionSheet: {
            actionSheetHidden: false,
            actionSheetItems: ['催办', '举报']
        },
        userInfo: {
            username: '',
            password: ''
        },

    },
    onLoad: function() {
        // console.log('loaded.');
    },

    actionConfirm: function() {
        wx.setStorageSync('username', this.data.userInfo.username);
        wx.setStorageSync('password', this.data.userInfo.password);
        this.setData({
            modalHidden: true
        })
    },

    actionCancel: function() {
        this.setData({
            modalHidden: true
        })
    },

    saveUsername: function(event) {
    	console.log(event);
        this.setData({
            'userInfo.username': event.detail.value
        })
    },
    savePassword: function(event) {
        this.setData({
            'userInfo.password': event.detail.value
        })
    },

    onShow: function() {
        var u = wx.getStorageSync('username');
        if (!u) {
            this.setData({
                userInfo: {
                    username: '',
                    password: ''
                },
                modalHidden: false
            });
        }
    },


    cancelActionSheet: function() {

        this.setData({
            'actionSheet.actionSheetHidden': true
        });
    },

    bindItemTap: function(event) {

        switch (event.target.dataset.name) {
            case '催办':
                this.setData({
                    toastHidden: false
                })
                break;
            case '举报':
                console.log(1);
                break;
        }
    },

    toastChange: function() {
        this.setData({
            toastHidden: true
        });
    }


});

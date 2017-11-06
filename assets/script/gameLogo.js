cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.scheduleOnce(this.changeScene,2);
    },
    changeScene:function(){
        cc.director.loadScene("gameMenu");
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        pepiTop:{
            default: null,
            type:cc.Node
        },
        pepiButtom:{
            default:null,
            type:cc.Node
        },
        spaceMin:0,
        spaceMax:0,
        buttomYMin:0,
        buttomYMax:0
    },

    // use this for initialization
    onLoad: function () {
        this.pepiButtom.y = this.buttomYMin + Math.floor((this.buttomYMax - this.buttomYMin)) * Math.random();
        var space = this.spaceMin + Math.floor((this.spaceMax -this.spaceMin)) *Math.random();
       this.pepiTop.y =space + this.pepiButtom.y;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
    },
});

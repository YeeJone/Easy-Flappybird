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
        scroolNode1:{
            default:null,
            type:cc.Node
        },
        scroolNode2:{
            default:null,
            type:cc.Node
        },
        speed:0
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.scroolNode1.x += this.speed * dt;
        this.scroolNode2.x += this.speed * dt;
        var node1Width=this.scroolNode1.width;
        var node2Width=this.scroolNode2.width;
        if(this.scroolNode1.x<(-node1Width)){
            this.scroolNode1.x=this.scroolNode2.x+node2Width;
        }
        if(this.scroolNode2.x<(-node2Width)){
            this.scroolNode2.x=this.scroolNode1.x+node1Width;
        }
    },
});

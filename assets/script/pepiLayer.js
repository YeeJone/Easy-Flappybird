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
        pepiPrefab:{
            default:null,
            type:cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        var pepi_run=false;
            this.schedule(this.addPepi,2);
    },
    
    addPepi:function(){
        if(this.pepi_run){
            var pepi =cc.instantiate(this.pepiPrefab);
            var winSize =cc.director.getVisibleSize();
            pepi.x =winSize.width+100;
            pepi.tag=1000;
            this.node.addChild(pepi);
            var moveby =cc.moveBy(3,cc.p((-winSize.width - 200),0));
            var seq =cc.sequence (moveby,cc.removeSelf());
            pepi.runAction(seq);
        }
    },
    // called every frame, uncomment this function to activate update callback
   update: function (dt) {
   },
});

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
        // click:{
        //     default:null,
        //     type:cc.Node
        // },
        // ready:{
        //     default:null,
        //     type:cc.Node
        // }
        scoreDisplay:{
            default:null,
            type:cc.Label
        },
        pepiLayer:{
            default:null,
            type:cc.Node
        },
        bird:{
            default:null,
            type:cc.Node
        },
        btnNode1:{
            default:null,
            type:cc.Node
        },
        audio:{
            default:null,
            url:cc.AudioClip
        },


    },

    // use this for initialization
    onLoad: function () {
        //  this.node.on(cc.Node.EventType.TOUCH_START,function(event){
        //      var anim1 = this.click.getComponent(cc.Animation);
        //      var anim2 = this.ready.getComponent(cc.Animation);
        //      console.log(anim1);
        //      anim1.play("c_goOut");
        //      anim2.play("r_goOut");
        // },this)
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.score=0;
        this.btnNode1.on(cc.Node.EventType.TOUCH_START,function(event){
            cc.director.loadScene("gameMain");
        })
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         if(this.pepiLayer.children){
             var children = this.pepiLayer.children;
             for(var key in children){
                 var pepi=children[key];
                 if(pepi.x < this.bird.x -50 && pepi.tag===1000){
                     pepi.tag=1001;
                     this.score +=1;
                     this.scoreDisplay.string="Score:" +this.score.toString();
                     cc.audioEngine.play(this.audio, false);
                 }
             }
         }
     },
});

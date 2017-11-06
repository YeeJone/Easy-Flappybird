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
        click:{
            default:null,
            type:cc.Node
        },
        ready:{
            default:null,
            type:cc.Node
        },
        bird:{
            default:null,
            type:cc.Node
        },
        pepiLayer:{
            default:null,
            type:cc.Node
        },
        audio:{
            default:null,
            url:cc.AudioClip
        },
        audio1:{
            default:null,
            url:cc.AudioClip
        }
    },


    // use this for initialization
    onLoad: function () {
        var closeAnims =0;
            this.node.on(cc.Node.EventType.TOUCH_START,function(event){
                if(0 == closeAnims){
                    var anim1 = this.click.getComponent(cc.Animation);
                    var anim2 = this.ready.getComponent(cc.Animation);
                    anim1.play("c_goOut");
                    anim2.play("r_goOut");
                    cc.audioEngine.play(this.audio1, false);
                    closeAnims=1;
                }
                
                this.bird.getComponent("bird").speed =450;
                this.bird.getComponent("bird").isDrop =true;
                this.pepiLayer.getComponent("pepiLayer").pepi_run = true;
                cc.audioEngine.play(this.audio, false);

            },this);


        // this.node.on(cc.Node.EventType.TOUCH_START,function(event){
        //    this.bird.getComponent("bird").speed =450;
        //    this.bird.getComponent("bird").isDrop =true; 
        // },this)
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
     },
});

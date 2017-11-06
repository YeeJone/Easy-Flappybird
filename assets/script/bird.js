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
        gameOver:{
            default:null,
            type:cc.Node
        },
        r_start:{
            default:null,
            type:cc.Node
        },
        pepiLayer:{
            default:null,
            type:cc.Node
        },
        ground:{
            default:null,
            type:cc.Node
        },
        clickLayer:{
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
        },
        accel:0
    },

    // use this for initialization
    onLoad: function () {
        var anim = this.getComponent(cc.Animation);
        //anim.play('birdfly');
        var animState = anim.play('birdfly2');
        var name = animState.name;
        this.speed =0;
        this.isDrop=false;
        
    },
    
    onCollisionEnter: function (other, self) {
        var anim3 = this.gameOver.getComponent(cc.Animation);
        var anim4 = this.r_start.getComponent(cc.Animation);
        anim3.play('gameOver');
        anim4.play('r_start');
        this.speed = 0;
        this.isDrop =false;
        this.node.y =176;
        this.node.rotation =90;
        this.pepiLayer.getComponent("pepiLayer").pepi_run =false;
        this.ground.getComponent("scrollNode").speed =0;
        this.clickLayer.pauseSystemEvents (true);
        var o_name = other.name;
        if(o_name == "ground2<BoxCollider>" || o_name == "ground1<BoxCollider>"){
            cc.audioEngine.play(this.audio1, false);
        }else{
            cc.audioEngine.play(this.audio, false);
        }
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.isDrop){
            this.speed += this.accel *dt;
            var yDist = this.speed *dt;
            this.node.y +=yDist;
            
            if(this.node.y >=1246){
                this.node.y =1246;
                this.speed =0;
            }

            if(0 < this.speed){
                this.node.rotation =-30; 
            }
            else{
                this.node.rotation +=150 *dt;
                if(this.node.rotation > 90){
                    this.node.rotation =90;
                } 
            }
        }
    },
});

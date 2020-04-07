import React, { Component} from "react";
import $ from "jquery";

class Alert extends Component{

    constructor() {
        super();
        this.state = {
            html:'',
            sucesso:function(){},
            falha:function(){},
            buttons:[],
            show:function(){},
            close:function(){}
        }
    }
    close(e){

        if((e.target).is('.container')){
            
        }else{
            
        }
    }
    
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div className="container active" onClick={(e)=>this.close(e)}>
                <div className="alert">
                    <div className="titulo">titulo</div>
                    <div className="close">
                        <i className="fas fa-power-off"></i>
                    </div>
                    <div className="conteudo-html">
                        {this.props.children}
                    </div>
                    <div className="actions">
                    </div>
                </div>
            </div>
        )
    }


}

export default Alert;
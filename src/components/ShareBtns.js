import React, {Component} from 'react'

class ShareBtns extends Component{
    render(){
        return (
            <div className="row">
                <div className="col s2 m1 offset-s2 offset-m4">
                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className="col s2 m1">
                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="fab fa-twitter"></i></a>
                </div>
                <div className="col s2 m1">
                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="fab fa-google-plus-g"></i></a>
                </div>
                <div className="col s2 m1">
                    <a className="btn-floating btn-large waves-effect waves-light red"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        )
    }
}

export default ShareBtns;
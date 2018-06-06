import React, {Component} from 'react';
import axios from 'axios';

class Input extends Component{

    state = {
        selectedFile : null,
        uploadProgress: 0
    };

    fileChangeHandler = event => {
        if(this.state.selectedFile !== event.target.files[0]){
            this.setState({
                selectedFile: event.target.files[0]
            }, () => {
                // Callback that executes after changing state
                console.log("File Selected - " + this.state.selectedFile.name);
            });
        }
    };

    uploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        let progress = null;
        axios.post("https://image-texter.herokuapp.com/ascii/", fd, {
            onUploadProgress: progressEvent => {
                progress = Math.round((progressEvent.loaded / progressEvent.total)*100);
                console.log('Upload Progress : ' + progress + '%');
                this.setState({
                    uploadProgress: progress
                });
            }
        }).then(res => {
            console.log(res);
            this.props.generateBtnClick();
            this.props.outputGenerated(res.data);
        }).catch(err => {
            console.log("Error in axios post : " + err);
        });
    };

    render(){
        return (
            <div>
                <h3>Input</h3>
                <div className="row">
                        {(this.state.selectedFile === null ?
                            <div className="col s12">
                                <div className="card hoverable">
                                    <div className="card-content">
                                        <div className="waves-effect waves-light btn-large light-blue darken-1"
                                             style={{float: "initial"}}
                                             onClick={() => this.fileInput.click()}
                                        >
                                            <i className="material-icons left">file_upload</i>
                                            Upload
                                        </div>
                                        <input className="hide"
                                               type="file"
                                               accept=".jpg, .jpeg, .png"
                                               onChange={this.fileChangeHandler}
                                               ref = {fileInput => this.fileInput = fileInput}
                                        />
                                    </div>
                                </div>
                            </div> :
                            <div className="col s12">
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img alt="Oops" className="activator" src={URL.createObjectURL(this.state.selectedFile)}/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4"> {this.state.selectedFile.name} <i className="material-icons right">more_vert</i></span>
                                        <div className="progress" style={this.state.uploadProgress===0 ? {display: "none"} : {height: "20px"}}>
                                            <div className="determinate light-blue darken-1" style={{width: this.state.uploadProgress + "%"}}>{null}</div>
                                        </div>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                        <p>Options to go here</p>
                                    </div>
                                </div>
                                <button
                                    className="btn waves-effect waves-light light-blue darken-1"
                                    onClick={this.uploadHandler}
                                >
                                    <i className="material-icons right">settings</i>
                                    Generate
                                </button>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Input;
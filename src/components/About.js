import React, {Component} from 'react'

class About extends Component{
    render(){
        return (
            <div>
                <h1>Image Texter</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card">
                            <div className="card-content">
                                <p>Upload an image and get the ASCII character equivalent of the image.</p>
                                <p>Simpler words - convert an image to text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
import React, {Component} from 'react'

class Output extends Component{
    render(){
        return (
            <div>
                <h3>Output</h3>
                <div className="row">
                    <div className="col s12">
                        <div className="card hoverable">
                            <div className="card-content">
                                <pre>
                                    {this.props.output}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Output;
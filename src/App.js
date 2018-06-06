import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Input from './components/Input';
import Output from './components/Output';
import ShareBtns from './components/ShareBtns';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleGenerateBtnClick = this.handleGenerateBtnClick.bind(this);
        this.state = { fileUploaded: false, outputGenerated: null }
    }

    handleGenerateBtnClick(event) {
        console.log("File Uploaded !!");
        this.setState({ fileUploaded: true });
    }

    render() {
        return (
            <div>
                <main>
                    <div className="container center-align">
                        <About />
                        <div className="container">
                            <Input
                                outputGenerated={(output) => this.setState({ outputGenerated: output })}
                                generateBtnClick={this.handleGenerateBtnClick}
                            />
                        </div>
                        {(this.state.fileUploaded === true ?
                            <div className="container">
                                <Output output={this.state.outputGenerated} />
                                <ShareBtns />
                            </div>
                            : null)
                        }
                    </div>
                </main>
            </div>
        )
    }
}

export default App;

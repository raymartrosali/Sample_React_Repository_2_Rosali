import React, {Component} from "react";


class ClassState extends Component{

    // constructor initialize an object's state in class
    constructor() {
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol: "red"
        };

        this.changeElement = this.changeElement.bind(this);
        // Binding Method
    }
   
    changeElement(){
        // element = "Wow Nabago";
        // document.getElementById("sampleElement").innerHTML = "Wow Nabago";
        // this.setState({sampleContent: "Wow Nabago!"})
        // this.setState({bgcol: "yellow"})
        this.state.bgcol == "red" ? this.setState({sampleContent: "Wow Nabago!",bgcol: "yellow"}) : this.setState({bgcol: "red"});
        // Sample conditional statement using ternary operator
    }
    
    render(){
        // let element = "meow";
        const {bgcol, sampleContent} = this.state;
        // For Destructuring State
        return(
            <>
                <h1 id="sampleElement" style={{background: bgcol}}>{sampleContent}</h1>
                <button onClick={this.changeElement}>Change Sample Element</button>
                {/* <button onClick={() => this.changeElement()}>Change Sample Element</button> */}
            </>
        );
    }
}

export default ClassState;
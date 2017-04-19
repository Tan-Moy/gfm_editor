import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import MdOutput from "./md_output";

const style = {
  height: "100%",
  width: "100%",
  //margin: "1%",
  display: 'inline-block',
};

class MdInput extends Component{
    constructor(props){
        super(props);

        this.state  = {value: "It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)"};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
        //console.log(e.target.value)
    };

    render(){
        return(
            <div>
                <div id="input-field">
                    <Paper zDepth={3} style={style}>
                        <TextField
                            floatingLabelText="Type your markdown here"
                            value = {this.state.value}
                            multiLine={true}
                            rows={10}
                            underlineStyle={{width:'90%'}}
                            style={{
                                width:'100%',
                                height:'100%',
                                padding:'1%',
                                }}
                            onChange = {this.handleChange}
                        />
                    </Paper>
                </div>
                    <Paper zDepth={3} style={style}>
                        <MdOutput data = {this.state.value}/>
                    </Paper>
            </div>
        )
    }
}

export default MdInput;
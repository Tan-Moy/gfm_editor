import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import marked from "marked";

marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });

const MdOutput = ({data}) => {
    let markedData = marked(data);
    //console.log(markedData)
        return(
            <div dangerouslySetInnerHTML={{ __html: markedData}}/>
        )
    }

export default MdOutput;
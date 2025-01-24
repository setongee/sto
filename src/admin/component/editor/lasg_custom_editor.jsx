import React, { useState, useEffect } from "react";
import { Editor } from 'primereact/editor';        
import "primereact/resources/themes/lara-light-teal/theme.css";
import './editor.scss'

export default function LASGEditor({dataText, value}) {

    const [text, setText] = useState("");

    const renderedHtml = (e) => {

        setText(e);
        dataText(e);

    } 

    useEffect(() => {
        
        setText(value);
        
    }, [value]);
    

    return (

        <div className="card">

            <Editor value={text} onTextChange={(e) => renderedHtml(e.htmlValue)} style={{ height: '550px' }} placeholder="Type your text here..." />

        </div>

    )
}
        
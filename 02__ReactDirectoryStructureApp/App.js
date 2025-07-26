import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

// p-1 : Creating React Element
const relEle = React.createElement('p',
    {
        id: 'para',
        style: {
            padding: "15px",
            backgroundColor: "aqua",
            color: "red",
            fontSize: "22px",
            textAlign: "center",
            fontWeight: "bold"
        }
    }, '02__ReactDirectoryStructureApp');


// p-2 : Creating React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// p-1 : Render React Element into root Element.
root.render(relEle);


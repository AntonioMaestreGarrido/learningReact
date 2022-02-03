import React from "react";
import reactDom from "react-dom";
import { App } from "./App";


const root=document.querySelector('#root')
console.log(root)

reactDom.render(<App />,document.querySelector('#root'))
//reactDom.render(<h1>test</h1>,document.querySelector('#root'))

console.log(root)
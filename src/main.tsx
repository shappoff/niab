import { default as ReactDOM } from 'react-dom';
import { default as React } from 'react';
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const wrapper = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App config={{}} />
    </BrowserRouter>
, wrapper);

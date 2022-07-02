import { default as React } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import PageIFRAME from "./Page1925";
import Home from "./HomePage";


const Main = ({config}: any) => {
    return (
        <Routes>
            <Route path="/niab" element={<Home config={config} />} />
            <Route path="/niab/inventory" element={<Home config={config} />} />
            {
                Object.keys(config).map((fondTitle) => {
                    return config[fondTitle].map((line: any) =><Route path={`/niab/inventory/${line.path}`} key={line} element={<PageIFRAME config={line} />} />)
                })
            }
        </Routes>

    );
};

export default Main;

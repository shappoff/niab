import { default as React } from 'react';
import Main from "./Main";
import Header from "./Header";

const App = ({config}: any) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/shappoff/niab/data/data.json').then((r) => r.json())
            .then(({data}) => setData(data));
    }, []);
    return (
        <>
            <Header config={data} />
            <Main config={data} />
        </>
    );
};

export default App;
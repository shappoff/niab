import { default as React } from 'react';
import {Link} from "react-router-dom";

function Home({config}: any) {

    React.useEffect(() => {
        document.title = 'НИАБ, описи';
    }, []);

    return (
        <ul id="content" className={'fondy'}>
            {
                Object.keys(config).map((fondTitle) => {
                    return <li className={'fond'}>
                        <div>{fondTitle}</div>
                        <ul className={'dela'}>
                            {
                                config[fondTitle].map(({path, title}: any) =>
                                    <li key={title} className="delo">
                                        <Link to={path}>{title}</Link>
                                    </li>)
                            }
                        </ul>
                    </li>
                })
            }
        </ul>
    );
}

export default Home;
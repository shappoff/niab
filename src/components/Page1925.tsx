import { default as React } from 'react';
import "../main.css";

function PageIFRAME({config}: any) {

    React.useEffect(() => {
        const html = document.querySelector('html');
        document.title = config.title;

        html.setAttribute('style', 'overflow: hidden;');

        return () => html.removeAttribute('style');
    }, []);

    return <iframe className="frame" src={`https://cloclo50.cloud.mail.ru/weblink/view/${config.url}`} />;
}

export default PageIFRAME;
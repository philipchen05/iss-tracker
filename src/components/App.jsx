import React, { useState } from 'react';
import Title from "./Title";
import TitleZ from "./TitleZ";
import TitleK from "./TitleK";
import Map from "./Map";
import Languages from "./Languages";

function App() {
    const [lang, setLang] = useState(Math.floor(Math.random()*10)+1);

    function changeLang(newLang) {
        setLang(newLang);
    }

    function renderTitle(state) {
        switch(state) {
            case 1:
                return <Title title="Where Is the ISS?" />
            case 2:
                return <Title title="Où est le SSI?" />
            case 3:
                return <Title title="¿Dónde está el EEI?" />
            case 4:
                return <Title title="Wo ist die IR?" />
            case 5:
                return <Title title="Dov'è la SSI?" />
            case 6:
                return <Title title="Onde fica a EEI?" />
            case 7:
                return <Title title="Где находится мкс?" />
            case 8:
                return <TitleZ title="国际空间站在哪里?" />
            case 9:
                return <TitleK title="국제 우주 정거장은 어디에 있나요?" />
            default:
                return <TitleZ title="国際宇宙ステーションはどこにありますか?" />
        }
    }
    return(
        <div>
            {renderTitle(lang)}
            <Map />
            <Languages func={changeLang} />
        </div>
    );
}

export default App;

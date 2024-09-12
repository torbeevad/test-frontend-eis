import './App.css';
import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {MeterList} from "./Components/MetersList/MeterList";
import AreasStore from "./stores/AreasStore";
import MeterStore from "./stores/MeterStore";

const App = observer(() => {

    useEffect(() => {
        Promise.all([MeterStore.getFetchMetersData(), AreasStore.getFetchAreasData()])
    }, []);

    return (
        <div className="App">
            <header className="header">Список счетчиков</header>
            <main>
                <div className="titles">
                    <span>№</span>
                    <span>Тип</span>
                    <span>Дата установки</span>
                    <span>Автоматический</span>
                    <span>Текущие показания</span>
                    <span>Адрес</span>
                    <span>Примечания</span>
                </div>
                <MeterList/>
                <div className="paginator">
                    <button onClick={MeterStore.firstPage}>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </main>

        </div>
    )
})

export default App;

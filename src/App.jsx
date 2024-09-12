import './App.css';
import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {MeterList} from "./Components/MetersList/MeterList";
import MeterStorex from "./stores/meters";
import useStore from "./hooks/useStore";
import MeterStore from "./stores/MeterStore";
import AreasStore from "./stores/AreasStore";
import {Paginator} from "./Components/Paginator/Paginator";

const App = observer(() => {

    const {metersx} = useStore(MeterStorex);
    console.log(metersx)

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
                <Paginator/>
            </main>
        </div>
    )
})

export default App;

import "../css/Articulos.css";

const plantas = (props) => {

    return(
        <div className='container-fluid'>
            <br/>
            <br/>
            <div className="d-flex col-12 articuloFigure">
                <div className='col-8'>
                    <h3 className="text-danger">Que son las plantas?</h3>
                    <p>Las plantas son los seres vivos miembros del reino vegetal o phylum plantae.<br/>
                        Se trata de organismos autótrofos, desprovistos de capacidad de movimiento, y compuestos principalmente de celulosa.<br/>
                        Los árboles, la maleza, el césped, las algas y los arbustos, son todos miembros de este reino de la vida.<br/>
                        Las que hoy conocemos como plantas descienden de las primeras algas eucarióticas y fotosintéticas que aparecieron en la Tierra hace aproximadamente 1500 millones de años:<br/>
                        Primoplantae (Archaeplastida), producto de la simbiosis entre un protozoo eucariota y una cianobacteria.<br/>
                        De esta colaboración cada vez más estrecha surgió el primer cloroplasto y la posibilidad de la fotosíntesis como proceso energético.<br/>
                        Fue así que estas algas primitivas conquistaron el mar y después colonizaron la tierra, en donde la evolución hizo de ellas helechos, arbustos, árboles y las demás formas vegetales que hoy en día conocemos.<br/>
                        Así, aunque se originaron en el agua, existen especies vegetales en prácticamente todos los hábitats del mundo, siempre y cuando exista agua y luz solar.<br/>
                        Incluso en desiertos cálidos (como el Sahara) y desiertos helados (como la Antártida) pueden hallarse especies vegetales adaptadas a las adversas condiciones climáticas.</p>
                </div>
                <div className='col-4'>
                    <img className="iconoNB" src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/11/24/151124121850_planta_624x351_thinkstock_nocredit.jpg" alt=""/>
                </div>
            </div>
            <br/>
            <div className="d-flex col-12 articuloFigure">
                <div className='col-4'>
                    <img className="iconoNB" src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/11/24/151124121850_planta_624x351_thinkstock_nocredit.jpg" alt=""/>
                </div>
                <div className='col-8'>
                    <h3 className="text-danger">Que son las plantas?</h3>
                    <p>Las plantas son los seres vivos miembros del reino vegetal o phylum plantae.<br/>
                        Se trata de organismos autótrofos, desprovistos de capacidad de movimiento, y compuestos principalmente de celulosa.<br/>
                        Los árboles, la maleza, el césped, las algas y los arbustos, son todos miembros de este reino de la vida.<br/>
                        Las que hoy conocemos como plantas descienden de las primeras algas eucarióticas y fotosintéticas que aparecieron en la Tierra hace aproximadamente 1500 millones de años:<br/>
                        Primoplantae (Archaeplastida), producto de la simbiosis entre un protozoo eucariota y una cianobacteria.<br/>
                        De esta colaboración cada vez más estrecha surgió el primer cloroplasto y la posibilidad de la fotosíntesis como proceso energético.<br/>
                        Fue así que estas algas primitivas conquistaron el mar y después colonizaron la tierra, en donde la evolución hizo de ellas helechos, arbustos, árboles y las demás formas vegetales que hoy en día conocemos.<br/>
                        Así, aunque se originaron en el agua, existen especies vegetales en prácticamente todos los hábitats del mundo, siempre y cuando exista agua y luz solar.<br/>
                        Incluso en desiertos cálidos (como el Sahara) y desiertos helados (como la Antártida) pueden hallarse especies vegetales adaptadas a las adversas condiciones climáticas.</p>
                </div>
            </div>
        </div>
    );
}


export default plantas;
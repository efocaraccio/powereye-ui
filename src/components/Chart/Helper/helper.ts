
interface LineDataType {
    date: string;
    type: string;
    value: number;
}

export const mapServerDataToLineChart = (serverData = []) :LineDataType[] => {

    return serverData.map( data => ({ //chequear que el grafico de lineas autocomplete las fechas faltantes
        date: data.fecha,
        type: "producto",
        value: data.vistas
    }));

}

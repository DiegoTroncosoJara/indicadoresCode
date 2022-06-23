const servicios = require('../../server/models/IndicadorModel')
const indicadoresServicios = new servicios.indicadoresServicios();

const indicadores= require('../../negocio/indicadores');
const builderIndicador = require('../fabrica/indicadoresBuilder');



let indicador1 = new builderIndicador("C01").makeCalificacionCORFO("Crítico").makeNumeroIndicador("01").makeMisionUniversitaria("Segunda").makeNombre("prueba").makeTipoIndicador("Proceso").makeEje("Comercialización de Tecnología y Emprendimiento de Base Tecnológica").makeUnidad("-").makeFuenteInformacion("-").makeResponsable("-").makeFrecuencia("-").makePeticion(0).makeidMetrica(0).makeidMeta(0).build();

describe('Casos de pruebas', ()=> {
    test('servicio getIndicadores', async () => {
        const cantIndicador = await indicadoresServicios.getIndicadores();
        expect(cantIndicador).toBe(6);
    })

    test('verificar CalificacionCORFO de indicador ', async () => {
        const calCORFO = indicador1.getCalificacionCORFO();
        expect(calCORFO).toEqual("Crítico");
    })

    test('verificar Eje de indicador ', async () => {
        const eje = indicador1.getEje();
        expect(eje).toEqual("Comercialización de Tecnología y Emprendimiento de Base Tecnológica");
    })



})
describe('Prueba de <Componente/>', () => {  
    test('Primera prueba de un test', () => {
        // Inicializacion
        const m1 = "Hey hey hey";

        const m2 =  m1.trim()

        // Observar el comportamiento esperado
        expect(m1).toBe(m2);
    })

})

import DynamicForm from "../Formulario/DynamicForm";
import { useState } from 'react';
import Card from "../Card/Card";
import './ResistenciasFormulario.css'

const ResistenciasFormulario = () => {
    const [resistenciaData, setResistenciaData] = useState(null);
    const [loading, setLoading] = useState(false);

    const formFields = [
        { name: 'banda1', label: 'Banda 1° (Color)', type: 'select', options: ['Negro', 'Marrón', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'] },
        { name: 'banda2', label: 'Banda 2° (Color)', type: 'select', options: ['Negro', 'Marrón', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'] },
        { name: 'banda3', label: 'Banda 3° (Multiplicador)', type: 'select', options: ['Negro', 'Marrón', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco', 'Oro', 'Plata'] },
        { name: 'banda4', label: 'Tolerancia', type: 'select', options: ['Marrón (1%)', 'Rojo (2%)', 'Verde (0.5%)', 'Azul (0.25%)', 'Violeta (0.1%)', 'Gris (0.05%)', 'Oro (5%)', 'Plata (10%)'] }
    ];


    const calcularResistencia = (formData) => {
        setLoading(true);

        const colorCode = {
            'Negro': 0, 
            'Marrón': 1, 
            'Rojo': 2, 
            'Naranja': 3, 
            'Amarillo': 4,
            'Verde': 5, 
            'Azul': 6, 
            'Violeta': 7, 
            'Gris': 8, 
            'Blanco': 9,
            'Oro': 0.1, 
            'Plata': 0.01
        };

        const banda1 = colorCode[formData.banda1];
        const banda2 = colorCode[formData.banda2];
        const multiplicador = Math.pow(10, colorCode[formData.banda3]);
        const tolerancia = formData.banda4.includes('%') ? formData.banda4.split(' ')[0] : 'N/A';

        const resistencia = (banda1 * 10 + banda2) * multiplicador;
        console.log(resistencia);
        
        setResistenciaData({
            resistencia: resistencia + ' Ω',
            tolerancia: tolerancia
        });
        setLoading(false); 
    };

    return (
        <>  
            <div className="contenedorHeader">
                <h1 className="tituloBienvenidos">Bienvenidos</h1>
                <h3 className="subtitulo">Resistencias React PWA</h3>

            </div>
            <div className="contenedorResistencias">
                <img src="./ResistenciaValores.png" alt="Resistencia Valores"
                    style={{ width: '300px', height: 'auto', display: 'block', margin: '20px auto' }} 
                />
                <DynamicForm 
                    textoBoton="Calcular Valor"
                    formFields={formFields}  
                    onSubmit={calcularResistencia}
                />
                {loading && <p className="cargando">Cargando...</p>} {/* Mensaje de carga */}
                
            </div>
            {resistenciaData && (
                    <Card 
                        colorCard="#ffda9e"
                        valorResistencia={resistenciaData.resistencia}
                    />
                )}
        </>
    );
};

export default ResistenciasFormulario;

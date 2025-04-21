export default function TrasladoAlmacen() {
  return (
    <div style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '24px',
      backgroundColor: '#ffffff',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      border: '1px solid #e2e8f0'
    }}>
      {/* Encabezado */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          color: '#1e293b',
          marginBottom: '4px',
          fontSize: '24px',
          fontWeight: '600'
        }}>
          Kardex de Traslado de Almacén
        </h1>
        
        {/* Controles superiores */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Botones de exportación */}
          <div style={{ 
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <button style={exportButtonStyle}>CSV</button>
            <button style={exportButtonStyle}>Excel</button>
            <button style={exportButtonStyle}>PDF</button>
            <button style={exportButtonStyle}>Imprimir</button>
          </div>
          
          {/* Contador de registros */}
          <div style={{ 
            backgroundColor: '#f1f5f9',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#334155'
          }}>
            <span style={{ fontWeight: '500' }}>Mostrando 1 a 10</span> de <span style={{ fontWeight: '500' }}>50</span> entradas
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div style={{ 
        overflowX: 'auto',
        marginBottom: '24px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'separate',
          borderSpacing: '0',
          minWidth: '800px'
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Código</th>
              <th style={tableHeaderStyle}>Almacén Emisor</th>
              <th style={tableHeaderStyle}>Almacén Receptor</th>
              <th style={tableHeaderStyle}>Fecha de Traslado</th>
              <th style={tableHeaderStyle}>Guía de Remisión</th>
              <th style={{ ...tableHeaderStyle, textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila 1 */}
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>1</td>
              <td style={{ ...tableCellStyle, color: '#2563eb', fontWeight: '500' }}>TRAS-001</td>
              <td style={tableCellStyle}>Almacén Principal</td>
              <td style={tableCellStyle}>Almacén Secundario</td>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>10/10/2023</td>
              <td style={{ ...tableCellStyle, color: '#2563eb' }}>GR:001</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  <button style={anularButtonStyle}>Anular</button>
                </div>
              </td>
            </tr>
            
            {/* Fila 2 */}
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>2</td>
              <td style={{ ...tableCellStyle, color: '#2563eb', fontWeight: '500' }}>TRAS-002</td>
              <td style={tableCellStyle}>Almacén Secundario</td>
              <td style={tableCellStyle}>Almacén Principal</td>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>12/10/2023</td>
              <td style={{ ...tableCellStyle, color: '#2563eb' }}>GR:002</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  <button style={anularButtonStyle}>Anular</button>
                </div>
              </td>
            </tr>

            {/* Fila 3 */}
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>3</td>
              <td style={{ ...tableCellStyle, color: '#2563eb', fontWeight: '500' }}>TRAS-003</td>
              <td style={tableCellStyle}>Almacén Principal</td>
              <td style={tableCellStyle}>Almacén Terciario</td>
              <td style={{ ...tableCellStyle, fontWeight: '500' }}>15/10/2023</td>
              <td style={{ ...tableCellStyle, color: '#2563eb' }}>GR:003</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  <button style={anularButtonStyle}>Anular</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pie de página */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Paginación */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <button style={paginationNavButtonStyle}>
            <span style={{ marginRight: '6px' }}>←</span> Anterior
          </button>
          
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map(num => (
              <button 
                key={num} 
                style={num === 1 ? activePaginationButtonStyle : paginationButtonStyle}
              >
                {num}
              </button>
            ))}
          </div>
          
          <button style={paginationNavButtonStyle}>
            Siguiente <span style={{ marginLeft: '6px' }}>→</span>
          </button>
        </div>
        
        {/* Fecha */}
        <p style={{ 
          color: '#64748b', 
          fontSize: '14px',
          margin: '0',
          fontStyle: 'italic'
        }}>
          Kardex de Traslado de Almacén - <span style={{ fontWeight: '500' }}>Fecha: 18/11/2023</span>
        </p>
      </div>
    </div>
  );
}

// Estilos reutilizables
const exportButtonStyle = {
  backgroundColor: 'white',
  color: '#334155',
  border: '1px solid #cbd5e1',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#f1f5f9',
    borderColor: '#94a3b8'
  }
};

const tableHeaderStyle = {
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: '600',
  color: '#475569',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  borderBottom: '1px solid #e2e8f0'
};

const tableRowStyle = {
  borderBottom: '1px solid #e2e8f0',
  ':hover': { 
    backgroundColor: '#f8fafc'
  }
};

const tableCellStyle = {
  padding: '14px 16px',
  color: '#334155',
  fontSize: '14px',
  borderBottom: '1px solid #e2e8f0'
};

const verButtonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '13px',
  transition: 'background-color 0.2s ease',
  minWidth: '60px',
  ':hover': {
    backgroundColor: '#1d4ed8'
  }
};

const anularButtonStyle = {
  backgroundColor: '#dc2626',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '13px',
  transition: 'background-color 0.2s ease',
  minWidth: '70px',
  ':hover': {
    backgroundColor: '#b91c1c'
  }
};

const paginationButtonStyle = {
  backgroundColor: 'white',
  color: '#334155',
  border: '1px solid #cbd5e1',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  minWidth: '36px',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#f1f5f9'
  }
};

const activePaginationButtonStyle = {
  ...paginationButtonStyle,
  backgroundColor: '#2563eb',
  color: 'white',
  borderColor: '#2563eb',
  ':hover': {
    backgroundColor: '#1d4ed8',
    borderColor: '#1d4ed8'
  }
};

const paginationNavButtonStyle = {
  ...paginationButtonStyle,
  display: 'flex',
  alignItems: 'center',
  padding: '6px 16px'
};
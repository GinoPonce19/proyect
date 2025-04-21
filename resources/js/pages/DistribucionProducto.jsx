export default function DistribucionProducto() {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      padding: '24px',
      backgroundColor: '#f8fafc',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      {/* Títulos */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          color: '#1e293b',
          marginBottom: '4px',
          fontSize: '28px',
          fontWeight: '600'
        }}>
          Distribución
        </h1>
        
        <h2 style={{ 
          color: '#64748b',
          marginBottom: '0',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Kardex de Distribución
        </h2>
      </div>

      {/* Controles superiores */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Botones de Acción */}
        <div style={{ 
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <button style={{ ...actionButtonStyle, position: 'relative' }}>
            Copiar <span style={{ marginLeft: '4px' }}>▼</span>
          </button>
          <button style={actionButtonStyle}>CSV</button>
          <button style={actionButtonStyle}>Excel</button>
          <button style={actionButtonStyle}>PDF</button>
          <button style={actionButtonStyle}>Imprimir</button>
        </div>

        {/* Contador */}
        <p style={{ 
          color: '#64748b',
          fontSize: '14px',
          margin: '0'
        }}>
          Mostrando <span style={{ fontWeight: '500' }}>1 a 10</span> de <span style={{ fontWeight: '500' }}>50</span> entradas
        </p>
      </div>

      {/* Tabla */}
      <div style={{ 
        overflowX: 'auto',
        marginBottom: '24px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'separate',
          borderSpacing: '0'
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: '#f1f5f9'
            }}>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Código</th>
              <th style={tableHeaderStyle}>Fecha de Distribución</th>
              <th style={tableHeaderStyle}>Cantidad</th>
              <th style={tableHeaderStyle}>Distribuida</th>
              <th style={tableHeaderStyle}>Almacén</th>
              <th style={tableHeaderStyle}>Guía de Remisión</th>
              <th style={{ ...tableHeaderStyle, textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila 1 */}
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>1</td>
              <td style={{ ...tableCellStyle, fontWeight: '500', color: '#1e40af' }}>DIST-001</td>
              <td style={tableCellStyle}>10/10/2023</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>100</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>50</td>
              <td style={tableCellStyle}>Almacén Principal</td>
              <td style={{ ...tableCellStyle, color: '#1e40af' }}>GR-001</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  
                </div>
              </td>
            </tr>
            
            {/* Fila 2 */}
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>2</td>
              <td style={{ ...tableCellStyle, fontWeight: '500', color: '#1e40af' }}>DIST-002</td>
              <td style={tableCellStyle}>12/10/2023</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>200</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>150</td>
              <td style={tableCellStyle}>Almacén Secundario</td>
              <td style={{ ...tableCellStyle, color: '#1e40af' }}>GR-002</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  
                </div>
              </td>
            </tr>

            {/* Fila 3 */}
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>3</td>
              <td style={{ ...tableCellStyle, fontWeight: '500', color: '#1e40af' }}>DIST-003</td>
              <td style={tableCellStyle}>15/10/2023</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>150</td>
              <td style={{ ...tableCellStyle, textAlign: 'right' }}>100</td>
              <td style={tableCellStyle}>Almacén Principal</td>
              <td style={{ ...tableCellStyle, color: '#1e40af' }}>GR-003</td>
              <td style={{ ...tableCellStyle, borderRight: 'none', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <button style={verButtonStyle}>Ver</button>
                  
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paginación y Fecha */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={paginationButtonStyle}>
            <span style={{ marginRight: '4px' }}>←</span> Anterior
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
          <button style={paginationButtonStyle}>
            Siguiente <span style={{ marginLeft: '4px' }}>→</span>
          </button>
        </div>
        
        <p style={{ 
          color: '#64748b', 
          fontSize: '14px',
          margin: '0'
        }}>
          Kardex de Distribución - <span style={{ fontWeight: '500' }}>Fecha: 18/11/2023</span>
        </p>
      </div>
    </div>
  );
}

// Estilos reutilizables
const actionButtonStyle = {
  backgroundColor: 'white',
  color: '#334155',
  border: '1px solid #cbd5e1',
  padding: '8px 12px',
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
  color: '#334155',
  borderBottom: '1px solid #e2e8f0',
  fontSize: '14px',
  whiteSpace: 'nowrap'
};

const tableRowStyle = {
  borderBottom: '1px solid #e2e8f0',
  ':hover': { 
    backgroundColor: '#f8fafc',
    boxShadow: 'inset 0 0 0 1px #e2e8f0'
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
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '13px',
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#1d4ed8'
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
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#f1f5f9',
    borderColor: '#94a3b8'
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
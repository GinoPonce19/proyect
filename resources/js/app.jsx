import './bootstrap';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

// Import pages
import EntradaProducto from './pages/EntradaProducto';
import DistribucionProducto from './pages/DistribucionProducto';
import TrasladoAlmacen from './pages/TrasladoAlmacen';
import SalidaProducto from './pages/SalidaProducto';
import ConsultasInventario from './pages/ConsultasInventario';
import CierrePeriodo from './pages/CierrePeriodo';
import MovimientoConsulta from './pages/MovimientoConsulta';

// Common styles
const inputStyle = {
  padding: '12px',
  border: '1px solid #cbd5e1',
  borderRadius: '8px',
  fontSize: '14px',
  width: '100%'
};

const loginButtonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  width: '100%',
  cursor: 'pointer',
  fontWeight: '500',
  transition: 'background-color 0.2s ease'
};

// Login Component
const Login = ({ onLogin }) => {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      {/* Left column - BLUE */}
      <div style={{ 
        width: '50%', 
        background: '#1d4ed8',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Con LeonoSoft facturador electrónico
        </h1>
        <p style={{ 
          fontSize: '16px', 
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Descubre una gestión de facturación en menos de un minuto y aumenta el flujo de tus ventas.
        </p>
        <button style={{ 
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Conoce más
        </button>
      </div>
      
      {/* Right column - FORM */}
      <div style={{ 
        width: '50%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <h2 style={{ 
          color: '#1e293b',
          fontSize: '24px',
          marginBottom: '30px'
        }}>
          Facturador Electrónico
        </h2>
        
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Ruc</label>
            <input 
              type="text" 
              placeholder="Ingresa tu número de RUC" 
              style={inputStyle}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Usuario</label>
            <input 
              type="text" 
              placeholder="Ingresa tu usuario" 
              style={inputStyle}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Contraseña</label>
            <input 
              type="password" 
              placeholder="Ingresa tu contraseña" 
              style={inputStyle}
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '5px' }} /> 
              Recordar datos
            </label>
            <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Recuperar contraseña
            </a>
          </div>

          <button 
            onClick={onLogin}
            style={loginButtonStyle}
          >
            Iniciar sesión
          </button>
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
              ¿Quieres consultar un comprobante? Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inventory Layout Component
const InventoryLayout = () => {
  const location = useLocation();

  const sidebarItemStyle = {
    display: 'block',
    padding: '12px 16px',
    color: 'white',
    background: '#3a506b',
    borderRadius: '4px',
    textDecoration: 'none',
    margin: '5px 0',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const subItemStyle = {
    display: 'block',
    padding: '12px 16px',
    color: 'white',
    background: '#2c3e50',
    borderRadius: '4px',
    textDecoration: 'none',
    margin: '5px 0',
    marginLeft: '20px',
    fontWeight: '500'
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar - Matching the image exactly */}
      <div style={{ 
        width: '270px', 
        background: '#1d4ed8',
        color: 'white',
        height: '100vh',
        padding: '20px',
        position: 'fixed',
        left: 0,
        top: 0
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          marginBottom: '20px',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          INVENTARIO
        </h1>

        {/* Kardex-Producto section */}
        <div style={sidebarItemStyle}>
          Kardex-Producto
        </div>

        {/* Sub-items always visible as in the image */}
        <Link to="/kardex-producto/entrada-producto" style={subItemStyle}>
          Entrada Producto
        </Link>
        <Link to="/kardex-producto/distribucion-producto" style={subItemStyle}>
          Distribución Producto
        </Link>
        <Link to="/kardex-producto/traslado-almacen" style={subItemStyle}>
          Traslado de Almacén
        </Link>
        <Link to="/kardex-producto/salida-producto" style={subItemStyle}>
          Salida Producto
        </Link>

        {/* Other menu items */}
        <Link to="/consultas-inventario" style={sidebarItemStyle}>
          Consultas de Inventario
        </Link>
        <Link to="/cierre-periodo" style={sidebarItemStyle}>
          Cierre Periodo
        </Link>
        <Link to="/movimiento-consulta" style={sidebarItemStyle}>
          Movimiento Consulta
        </Link>
      </div>

      {/* Content area */}
      <div style={{ 
        marginLeft: '270px', 
        padding: '30px',
        width: 'calc(100% - 270px)'
      }}>
        <Outlet />
      </div>
    </div>
  );
};

// App Component with Authentication Logic
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<InventoryLayout />}>
            {/* Kardex-Producto routes */}
            <Route path="kardex-producto">
              <Route path="entrada-producto" element={<EntradaProducto />} />
              <Route path="distribucion-producto" element={<DistribucionProducto />} />
              <Route path="traslado-almacen" element={<TrasladoAlmacen />} />
              <Route path="salida-producto" element={<SalidaProducto />} />
              <Route index element={
                <div style={{ padding: '20px' }}>
                  <h2 style={{ color: '#2c3e50' }}>Operaciones de Kardex-Producto</h2>
                  <p style={{ color: '#7f8c8d' }}>Seleccione una operación específica</p>
                </div>
              } />
            </Route>

            {/* Other routes */}
            <Route path="consultas-inventario" element={<ConsultasInventario />} />
            <Route path="cierre-periodo" element={<CierrePeriodo />} />
            <Route path="movimiento-consulta" element={<MovimientoConsulta />} />

            {/* Default welcome page */}
            <Route index element={
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2 style={{ color: '#2c3e50' }}>Bienvenido al Sistema de Inventario</h2>
                <p style={{ color: '#7f8c8d' }}>Seleccione una opción del menú lateral</p>
              </div>
            } />
            
            {/* 404 page */}
            <Route path="*" element={<h1 style={{ color: 'red' }}>❌ Página no encontrada</h1>} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

// Initialize React
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
});
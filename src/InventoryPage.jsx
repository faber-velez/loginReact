import React from 'react';
import './App.css'

const InventoryPage = () => {
  return (
    <div className="inventory-page">
      <header className="header">
        <h1>Gestión de Inventario</h1>
      </header>

      <nav className="nav-bar">
        <button>Inicio</button>
        <button>Ingreso</button>
        <button>Despacho</button>
        <button>Reportes</button>
        <button>Productos</button>
      </nav>

      <main className="main-content">
        <h2>Resumen del Inventario</h2>
        <div className="summary-cards">
          <div className="card">
            <h3>Total de Productos</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Stock Bajo</h3>
            <p>10</p>
          </div>
          <div className="card">
            <h3>Sin Stock</h3>
            <p>5</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default InventoryPage;

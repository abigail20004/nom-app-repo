-- Script para crear la base de datos y la tabla colaborador

-- Crear base de datos si no existe (esto se hace manualmente en pgAdmin usualmente)
-- CREATE DATABASE test;

-- Seleccionar la base de datos
-- \c test

-- Crear tabla colaborador
CREATE TABLE IF NOT EXISTS colaborador (
  idcolaborador SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  direccion VARCHAR(255),
  edad INT CHECK (edad > 0),
  profesion VARCHAR(100),
  estado_civil VARCHAR(50)
);


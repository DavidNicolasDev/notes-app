-- Crear base de datos
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'notesdb')
BEGIN
    CREATE DATABASE notesdb;
END
GO

-- Usar la base de datos
USE notesdb;
GO

-- Crear login y usuario
IF NOT EXISTS (SELECT name FROM sys.server_principals WHERE name = N'postulaciones')
BEGIN
    CREATE LOGIN postulaciones WITH PASSWORD = '123456';
END
GO

IF NOT EXISTS (SELECT name FROM sys.database_principals WHERE name = N'postulaciones')
BEGIN
    CREATE USER postulaciones FOR LOGIN postulaciones;
END
GO

-- Dar permisos
ALTER ROLE db_owner ADD MEMBER postulaciones;
GO

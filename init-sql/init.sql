-- Crear usuario login
CREATE LOGIN postulaciones WITH PASSWORD = '123456';
GO

-- Crear usuario dentro de la BD
CREATE USER postulaciones FOR LOGIN postulaciones;
GO

-- Darle permisos completos sobre la BD
ALTER ROLE db_owner ADD MEMBER postulaciones;
GO

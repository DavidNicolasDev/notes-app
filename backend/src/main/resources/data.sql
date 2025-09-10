-- Insertar notas
INSERT INTO notes (title, content, archived) VALUES
('Comprar víveres', 'Leche, pan, huevos, café', 0),
('Reunión del trabajo', 'Jueves 10 AM con el equipo de marketing', 0),
('Idea de proyecto', 'Construir app para organizar notas con etiquetas', 1);

-- Insertar etiquetas
INSERT INTO tags (name) VALUES
('Personal'),
('Trabajo'),
('Ideas');

-- Relacionar notas con etiquetas
-- Nota 1 -> Personal
INSERT INTO note_tags (note_id, tag_id) VALUES (1, 1);

-- Nota 2 -> Trabajo
INSERT INTO note_tags (note_id, tag_id) VALUES (2, 2);

-- Nota 3 -> Ideas + Trabajo
INSERT INTO note_tags (note_id, tag_id) VALUES (3, 3);
INSERT INTO note_tags (note_id, tag_id) VALUES (3, 2);
import Tags from "./Tags";
export default function NoteItem({ note, onDelete, onArchive, onAddTag, onRemoveTag }) {
    const handleAddTag = () => {
        const tag = prompt("Ingrese el nombre de la etiqueta:");
        if (tag) onAddTag(note.id, tag);
    };
    
    return (
        <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-xl text-gray-800">{note.title}</h3>
                    <p className="text-gray-600 mt-1">{note.content}</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => onArchive(note.id)} className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition">
                        {note.archived ? 'Desarchivar' : 'Archivar'}
                    </button>
                    <button onClick={() => onDelete(note.id)} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition">Eliminar</button>
                </div>
            </div>
            {/* Etiquetas */}
            <Tags tags={note.tags || []} onRemove={(tagId) => onRemoveTag(note.id, tagId)} />
            <button
                onClick={handleAddTag}
                className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition text-sm"
            >
                + Agregar etiqueta
            </button>
        </div>
    );
}
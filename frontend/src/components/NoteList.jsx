import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive, onAddTag, onRemoveTag  }) {
    if (notes.length === 0) {
        return <p>No hay notas.</p>;
    }

    return (
        <div className="note-list">
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag}
                />
            ))}
        </div>
    );
}
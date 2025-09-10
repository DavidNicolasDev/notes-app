import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query';
import { getNotes, createNote, deleteNote, toggleArchiveNote, filterNotesByTag,} from '../api/notesApi';
import { addTagToNote, removeTagFromNote } from '../api/notesApi';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

export default function NotesPage() {
    const [filter, setFilter] = useState("");
    const [debouncedFilter] = useDebounce(filter, 500);
    const queryClient = useQueryClient();

    const { data: notes = [], isLoading, isError } = useQuery({
        queryKey: ['notes', debouncedFilter],
        queryFn: () => {
            if (debouncedFilter) {
                return filterNotesByTag(debouncedFilter);
            }
            return getNotes(false);
        }
    });

    const { data: archivedNotes = [] } = useQuery({
        queryKey: ['notes-archived'],
        queryFn: () => getNotes(true),
        enabled: !filter.trim() ,
    });

    const createNoteMutation = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        },
    });

    const deleteNoteMutation = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        },
    });

    const archiveMutation = useMutation({
        mutationFn: toggleArchiveNote,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        },
    });

    const addTagMutation = useMutation({
        mutationFn: ({ noteId, tag }) => addTagToNote(noteId, tag),
        onSuccess: () => queryClient.invalidateQueries(["notes"]),
    });

    const removeTagMutation = useMutation({
        mutationFn: ({ noteId, tagId }) => removeTagFromNote(noteId, tagId),
        onSuccess: () => queryClient.invalidateQueries(["notes"]),
    });

    if(isLoading) {
        return <p className="text-center text-gray-500 mt-8">Cargando...</p>;
    }
    
    if (isError) return <p className="text-center text-red-500 mt-8">Error cargando notas</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mis Notas</h1>

            <NoteForm onSave={(note) => createNoteMutation.mutate(note)} />

            <input
                type="text"
                placeholder="Filtrar por etiqueta"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full mb-6 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <h2 className='text-xl font-semibold mt-4'>Notas Activas</h2>
            <NoteList
                notes={notes}
                onDelete={(id) => deleteNoteMutation.mutate(id)}
                onArchive={(id) => archiveMutation.mutate(id)}
                onAddTag={(noteId, tag) => addTagMutation.mutate({ noteId, tag })}
                onRemoveTag={(noteId, tagId) => removeTagMutation.mutate({ noteId, tagId })}
            />
            
            <h2 className='text-xl font-semibold mt-6'>Archivadas</h2>
            <NoteList
                notes={archivedNotes}
                onDelete={(id) => deleteNoteMutation.mutate(id)}
                onArchive={(id) => archiveMutation.mutate(id)}
                onAddTag={(noteId, tag) => addTagMutation.mutate({ noteId, tag })}
                onRemoveTag={(noteId, tagId) => removeTagMutation.mutate({ noteId, tagId })}
            />

            
        </div>
    )

}
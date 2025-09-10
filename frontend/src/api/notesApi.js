import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/notes',
});

export const getNotes = (archived = false) =>
    api.get('', { params: { archived } }).then(res => res.data);

export const createNote = (note) =>
    api.post('', note).then(res => res.data);

export const updateNote = (id, note) =>
    api.put(`/${id}`, note).then(res => res.data);

export const deleteNote = (id) =>
    api.delete(`/${id}`).then(res => res.data);

export const toggleArchiveNote = (id) =>
    api.patch(`/${id}/archive`).then(res => res.data);

export const addTagToNote = (noteId, tagName) =>
  api.post(`/${noteId}/tags`, null, { params: { tagName } }).then(res => res.data);

export const removeTagFromNote = (noteId, tagId) =>
  api.delete(`/${noteId}/tags/${tagId}`).then(res => res.data);

export const filterNotesByTag = (tag) =>
  api.get("/filter", { params: { tag } }).then(res => res.data);

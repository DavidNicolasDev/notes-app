package com.notes.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.notes.backend.model.Note;
import com.notes.backend.model.Tag;
import com.notes.backend.repository.NoteRepository;
import com.notes.backend.repository.TagRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class NoteService {
    private final NoteRepository noteRepository;
    private final TagRepository tagRepository;

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public List<Note> findAllNotes(boolean archived) {
        return noteRepository.findByArchived(archived);
    }

    public Note updateNote(Long id, Note updatedNote) {
        return noteRepository.findById(id)
            .map(note -> {
                note.setTitle(updatedNote.getTitle());
                note.setContent(updatedNote.getContent());
                note.setArchived(updatedNote.isArchived());
                return noteRepository.save(note);
            })
            .orElseThrow(() -> new RuntimeException("No se encontro ninguna nota con el ID proporcionado"));
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }

    public Note toggleArchive(Long id) {
        return noteRepository.findById(id)
            .map(note -> {
                note.setArchived(!note.isArchived());
                return noteRepository.save(note);
            })
            .orElseThrow(() -> new RuntimeException("No se encontro ninguna nota con el ID proporcionado"));
    }


    public Note addTag(Long noteId, String tagName) {
        Note note = noteRepository.findById(noteId)
            .orElseThrow(() -> new RuntimeException("No se encontro ninguna nota con el ID ni Tag proporcionado"));
        Tag tag = tagRepository.findByNameIgnoreCase(tagName)
            .orElseGet(() -> tagRepository.save(new Tag(null, tagName)));
        note.getTags().add(tag);
        return noteRepository.save(note);
    }

    public Note removeTag(Long noteId, Long tagId) {
        Note note = noteRepository.findById(noteId).orElseThrow();
        Tag tag = tagRepository.findById(tagId).orElseThrow();
        note.getTags().remove(tag);
        return noteRepository.save(note);
    }

    public List<Note> filterByTag(String tagName) {
        return noteRepository.findByTagName(tagName);
    }
}

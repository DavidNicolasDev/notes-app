package com.notes.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.notes.backend.model.Note;
import com.notes.backend.service.NoteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/notes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")

public class NoteController {
    private final NoteService noteService;

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return noteService.createNote(note);
    }

    @GetMapping
    public List<Note> getAllNotes(@RequestParam(defaultValue = "false") Boolean archived) {
        return noteService.findAllNotes(archived);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note note) {
        return noteService.updateNote(id, note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
    }

    @PatchMapping("/{id}/archive")
    public Note toggleArchive(@PathVariable Long id) {
        return noteService.toggleArchive(id);
    }

    //Endpoints para las etiquetas
    
    @DeleteMapping("/{noteId}/tags/{tagId}")
    public Note removeTagFromNote(@PathVariable Long noteId, @PathVariable Long tagId) {
        return noteService.removeTag(noteId, tagId);
    }

    @GetMapping("/filter")
    public List<Note> filterByTag(@RequestParam String tag) {
        return noteService.filterByTag(tag);
    }

    @PostMapping("/{noteId}/tags")
    public Note addTagToNote(@PathVariable Long noteId, @RequestParam String tagName) {
        return noteService.addTag(noteId, tagName);
    }
        
}

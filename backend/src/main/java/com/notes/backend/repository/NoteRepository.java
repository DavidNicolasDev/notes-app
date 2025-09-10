package com.notes.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.notes.backend.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByArchived(boolean archived);

    @Query("SELECT n FROM Note n JOIN n.tags t WHERE LOWER(t.name) = LOWER(:tagName)")
    List<Note> findByTagName(@Param("tagName") String name);
}

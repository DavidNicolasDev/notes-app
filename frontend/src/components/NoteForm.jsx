import { useState } from "react";

export default function NoteForm({ onSave }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //if (title.trim() === "" || content.trim() === "") return;
        if (!title.trim()) return;
        onSave({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-2xl shadow mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full mb-2 p-2 border rounded"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full mb-2 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Guardar</button>
        </form>
    );
}
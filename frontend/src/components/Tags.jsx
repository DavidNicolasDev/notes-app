export default function Tags({tags, onRemove}) {
    if (tags.length === 0) {
        return <p>No hay etiquetas.</p>;
    }

    return (
        <div className="flex gap-2 mt-3 flex-wrap">
            {tags.map(tag => (
                <span key={tag.id} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition">
                    {tag.name}
                    <button onClick={() => onRemove(tag.id)} className="ml-2 text-blue-500 hover:text-red-500 transition font-bold focus:outline-none">x</button>
                </span>
            ))}
        </div>
    );
}
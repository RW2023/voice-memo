'use client';
import { FC, useEffect, useState, JSX } from "react";
import { supabase } from "@/utils/supabaseClient";
import AudioRecorder from "@/components/AudioRecorder";

interface AudioNote {
    id: string;
    name: string;
    url: string;
}

const NotesPage: FC = (): JSX.Element => {
    const [notes, setNotes] = useState<AudioNote[]>([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch audio notes
    const fetchNotes = async () => {
        setLoading(true);
        const { data, error } = await supabase.storage
            .from("audio-recordings")
            .list("recordings");

        if (error) {
            console.error("Error fetching notes:", error.message);
            setLoading(false);
            return;
        }

        const notesWithUrls = data.map((file: { id: string; name: string }) => ({
            id: file.id,
            name: file.name,
            url: supabase.storage.from("audio-recordings").getPublicUrl(`recordings/${file.name}`).data.publicUrl,
        }));

        setNotes(notesWithUrls);
        setLoading(false);
    };

    // Function to handle saving a new note
    const handleSaveRecording = async (blob: Blob) => {
        const fileName = `recording-${Date.now()}.wav`;

        const { error } = await supabase.storage
            .from("audio-recordings")
            .upload(`recordings/${fileName}`, blob, {
                contentType: "audio/wav",
            });

        if (error) {
            console.error("Error uploading recording:", error.message);
            return;
        }

        // Refresh the notes list
        await fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">My Notes</h1>
            <div className="mb-8">
                <AudioRecorder onSave={handleSaveRecording} />
            </div>
            {loading && <p>Loading...</p>}
            {!loading && notes.length === 0 && <p>No notes found.</p>}
            <ul className="space-y-4">
                {notes.map((note) => (
                    <li key={note.id} className="p-4 bg-base-200 rounded-lg">
                        <h2 className="font-semibold">{note.name}</h2>
                        <audio controls src={note.url} className="mt-2">
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesPage;

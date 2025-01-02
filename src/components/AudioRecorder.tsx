import React, { useEffect } from "react";
import { useAudioRecorder } from "../hooks/useAudioRecorder";

const AudioRecorder: React.FC<{ onSave: (blob: Blob) => void }> = ({ onSave }) => {
    const { isRecording, audioURL, audioBlob, startRecording, stopRecording } = useAudioRecorder();

    useEffect(() => {
        if (audioBlob) {
            onSave(audioBlob); // Invoke the onSave callback with the recorded audio blob
        }
    }, [audioBlob, onSave]);

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className="btn btn-primary my-4"
            >
                {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
            {audioURL && (
                <audio controls src={audioURL} className="mt-4">
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default AudioRecorder;

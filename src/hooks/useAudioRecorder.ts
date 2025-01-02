import { useState, useRef } from "react";

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);

    audioChunks.current = [];
    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorder.current.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: "audio/wav" });
      setAudioBlob(blob);
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
    };

    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  return { isRecording, audioURL, audioBlob, startRecording, stopRecording };
};

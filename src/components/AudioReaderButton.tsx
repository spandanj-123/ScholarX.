import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';

interface Props {
  textToRead: string;
  title: string;
}

export const AudioReaderButton: React.FC<Props> = ({ textToRead, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const handleToggleSpeak = () => {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel(); // cancel any ongoing speech

    // Clean text of markdown characters
    const cleanText = textToRead
      .replace(/[*#_`>]/g, '')
      .replace(/https?:\/\/[^\s]+/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(`${title}. ${cleanText}`);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={handleToggleSpeak}
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border shadow-sm ${
        isPlaying
          ? 'bg-blue-600 text-white border-blue-500 ring-2 ring-blue-400/50 animate-pulse'
          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
      }`}
      title={isPlaying ? "Stop audio narration" : "Listen to scheme summary"}
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-0.5 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-0.5 h-3.5 bg-white rounded-full animate-bounce" />
          </div>
          <span>Playing Audio Narration</span>
          <Pause className="w-3.5 h-3.5" />
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Listen to Summary</span>
        </>
      )}
    </button>
  );
};

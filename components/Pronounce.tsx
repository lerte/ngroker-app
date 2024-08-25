import React from "react";

const Pronounce = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const speak = () => {
    audioRef.current?.play();
  };

  return (
    <div>
      <audio
        hidden
        ref={audioRef}
        src="/ngroker.wav"
      />
      <p className="mt-4 italic">
        <span
          className="cursor-pointer"
          onClick={speak}
        >
          Ngroker
        </span>
        <svg
          onClick={speak}
          fill="none"
          strokeWidth="1.5"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 cursor-pointer size-5 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
          />
        </svg>
        is pronounced 'en-groker'.
      </p>
    </div>
  );
};

export default Pronounce;

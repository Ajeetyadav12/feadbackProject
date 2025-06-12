const AudioPlayer = ({ src }) => (
  <audio controls className="w-100 mt-3">
    <source src={src} />
    Your browser does not support audio playback.
  </audio>
);

export default AudioPlayer;

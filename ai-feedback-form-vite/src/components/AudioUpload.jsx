const AudioUpload = ({ onChange }) => (
  <input
    type="file"
    accept=".mp3,.wav"
    className="form-control"
    onChange={onChange}
  />
);

export default AudioUpload;

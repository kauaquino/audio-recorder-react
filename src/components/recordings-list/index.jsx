import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";
import "./styles.css";

export default function RecordingsList({ audio }) {
  const { record, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container">
      {record != null &&
      <>
      <h1>Audio Gravado</h1>
      <div className="recordings-list">
          <div className="record" key={record.key}>
            <audio controls src={record.audio} />
            <div className="delete-button-container">
              <button
                className="delete-button"
                title="Delete this audio"
                onClick={() => deleteAudio(record.key)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
      </div></>
      }    
    </div>
  );
}

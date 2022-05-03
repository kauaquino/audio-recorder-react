import { useState, useEffect } from "react";
import { deleteAudio } from "../handlers/recordings-list";
import generateKey from "../utils/generate-key";

export default function useRecordingsList(audio) {
  const [record, setRecordings] = useState();

  useEffect(() => {
    if (audio)
      setRecordings(() => {
        return { audio };
      });
  }, [audio]);

  return {
    record,
    deleteAudio: () => setRecordings(null),
  };
}

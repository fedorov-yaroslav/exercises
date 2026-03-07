import { useRef, useState } from "react"
import music from "../assets/ddt-dozhd.mp3"

function Player() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  function rewind() {
    audioRef.current.currentTime -= 5 // перемотка назад на 10 секунд
  }

  function forward() {
    audioRef.current.currentTime += 5 // перемотка вперёд на 10 секунд
  }

  return (
      <>
        <audio ref={audioRef} src={music}></audio>
        <button onClick={togglePlay} className = 'playerbutton'>
          {playing ? "Пауза" :  "Воспроизводить"}</button>
        <button onClick={rewind} className = 'playerbutton'>Назад на 5 секунд</button>
        <button onClick={forward} className = 'playerbutton'>Вперед на 5 секунд</button>
      </>
  )
}

export default Player
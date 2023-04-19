import React, {useState} from "react"
import "./index.css"
import Top from "./components/TopSection"
import Main from "./components/MainSection"
import Footer from "./components/FooterSection"
import checkGif from "./assets/checked.gif"
import SubmitModal from "./components/Modal"

const App = () => {

  const [showModal, setShowModal] = useState(false)

  function clickAway() {
    setShowModal(prevValue => !prevValue)
  }

  return (
    <>
      <Top showModalFunc={clickAway}/>
      <Main />
      <Footer />
      <SubmitModal gifImg={checkGif} showModal={showModal} handleClick={clickAway} />
    </>
  )
}

export default App

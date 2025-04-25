import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeetingScheduleComponent from './views/home/MeetingScheduleComponent'
import NotificationPanel from './views/home/NotificationPanel'
import ProjectCardComponent from './views/home/ProjectCardComponent'
import QuickActionPanel from './views/home/QuickActionPanel'
import StudentProgressTracker from './views/home/StudentProgressTracker'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<MeetingScheduleComponent/>
<NotificationPanel/>
<ProjectCardComponent/>
<QuickActionPanel/>
<StudentProgressTracker/>


    </>
  )
}

export default App

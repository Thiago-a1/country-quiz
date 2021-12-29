import { Questionsprovider } from "./contexts/QuestionsContext";

import { Dashboard } from "./components/Dashboard";

import Global from "./styles/global";

function App() {

  return (
    <div className="App">
      <Questionsprovider>
        <Global/>
        <Dashboard />
      </Questionsprovider>
    </div>
  )
}

export default App

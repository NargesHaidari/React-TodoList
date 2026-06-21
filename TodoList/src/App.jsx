
import TodoContainer from "./components/TodoContainer"
import { AppDataProvider } from "./components/NewContext"

export default function App(){
    return (
        <AppDataProvider>
            <TodoContainer />
        </AppDataProvider>
    )
}


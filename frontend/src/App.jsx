import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NotesPage from './pages/NotesPage'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <NotesPage />
    </QueryClientProvider>
  )
}

export default App
import './App.css';
import MedicineDropdown from './components/MedicineDropdown';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className='App'>
      <ChakraProvider>
        <MedicineDropdown />
      </ChakraProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ShortTextInput from './components/ShortTextInput/ShortTextInput';
import TextInput from './components/TextInput/TextInput';
import DropDownMultiSelect from './components/DropDownMultiSelect/DropDownMultiSelect';
import DropDownSelect from './components/DropDownSelect/DropDownSelect';
import BinarySelect from './components/BinarySelect/BinarySelect';
import Button from './components/Button/Button';


function App() {
  return (
    <form>
      <label>First name:</label>
      <ShortTextInput/>
      <label>Last name:</label>
      <ShortTextInput/>
      <label>Bibliography:</label>
      <TextInput/>
      <label>Email:</label>
      <ShortTextInput/>
      <label>Phone #:</label>
      <ShortTextInput/>
      <label>Dropdown Industry:</label>
      <DropDownSelect/>
      <label>Interests:</label>
      <DropDownMultiSelect/>
      <label>Profile Settings:</label>
      <BinarySelect/>
    
      <Button/>
    </form>
  );
}

export default App;

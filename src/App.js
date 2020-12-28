import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import TextArea from './components/TextArea/TextArea';
import DropDownMultiSelect from './components/DropDownMultiSelect/DropDownMultiSelect';
import DropDownSelect from './components/DropDownSelect/DropDownSelect';
import BinarySelect from './components/BinarySelect/BinarySelect';
import Button from './components/Button/Button';


function App() {
  return (
    <form>
      <div className="formContent">
        <label>First name:</label>
        <TextInput placeholder='First Name'/>
        <label>Last name:</label>
        <TextInput placeholder='Last Name'/>
        <label>Bibliography:</label>
        <TextArea/>
        <label>Email:</label>
        <TextInput placeholder='Email'/>
        <label>Phone #:</label>
        <TextInput placeholder='Phone Number'/>
        <label>Dropdown Industry:</label>
        <DropDownSelect/>
        <label>Interests:</label>
        <DropDownMultiSelect/>
        <label>Profile Settings:</label>
        <BinarySelect label='Share Information to Local Food Community' />
        <BinarySelect label='Enable Push Notifications' />
      
        <Button/>
      </div>
    </form>
  );
}

export default App;

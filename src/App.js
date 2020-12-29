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
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <div className="formContent">
          <TextInput label='First Name'/>
          <TextInput label='Last Name'/>
          <label>Bibliography:</label>
          <TextArea/>
          <TextInput label='Email'/>
          <TextInput label='Phone Number'/>
          <label>Dropdown Industry:</label>
          <DropDownSelect/>
          <label>Interests:</label>
          <DropDownMultiSelect
          options={[{name: 'Healthy Living', id: 1},{name: 'Sustainability', id: 2},{name: 'Food Recipes', id: 3}, {name: 'Food Systems', id:4}]}
          />
          <label>Profile Settings:</label>
          <BinarySelect label='Share Information to Local Food Community' />
          <BinarySelect label='Enable Push Notifications' />
        
          <Button/>
        </div>
      </form>
    </div>
    
  );
}

export default App;

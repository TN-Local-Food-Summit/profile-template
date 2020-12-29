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
      <h1 className='header'>Sign Up</h1>
      <form>
        <div className="formContent">
          <div className="centerChildren">
            <TextInput label='First Name' required={true} />
            <TextInput label='Last Name' required={true} />
          </div>
          <div className="centerChildren">
            <TextInput label='Email'/>
            <TextInput label='Phone Number'/>
          </div>
          <div className="centerBibliography">
            <TextArea label='Bibliography' />
          </div>
          
          
          <label>Dropdown Industry:</label>
          <DropDownSelect
          options={[{name: 'Farming', id: 1},{name: 'Restaurant', id: 2},{name: 'Hospitality', id: 3}, {name: 'Education', id:4}, {name: 'Non-Profit Organization', id:5}]}
          />
          <label>Interests:</label>
          <DropDownMultiSelect
          options={[{name: 'Healthy Living', id: 1},{name: 'Sustainability', id: 2},{name: 'Food Recipes', id: 3}, {name: 'Food Systems', id:4}]}
          />
          <BinarySelect label='Share Information to Local Food Community' />
          <BinarySelect label='Enable Push Notifications' />
        
          <div className="centerSubmit">
            <Button/>
          </div>
          
        </div>
      </form>
    </div>
    
  );
}

export default App;

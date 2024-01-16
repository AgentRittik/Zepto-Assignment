import './App.css';
import { useState} from 'react';
import ChipList from './components/ChipList';

const userdata = [
  {id :0 ,name : "emily sharma" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoxbWWmyr8hdJ3IROlQ6PmGuX_8BDoGjGAdtRwHOQoDHLsCPoGjuny6Vc5yXF9876kbs&usqp=CAU", email :"emily@gmmail.com" },
  {id :1 ,name : "shanaya" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaRx9le7X_j6S8VHF2W1Tke1Pt51J7qTVIEbCtPHqFT5QamGViZYx5cZSuqqC3TT_LXc&usqp=CAU", email :"shanaya@gmmail.com" },
  {id :2 ,name : "anchal thakur sharma" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU37FnbBg50aestSWYenXfXOSAK5UjVcHCJfgbl96rpocUMXtGqXaVFBxHbou9qWNzQoU&usqp=CAU", email :"anchal@gmmail.com" },
  {id :3 ,name : "aditi" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgeiSGjoXNHEmcuXDeM8dt3R0WtcoBw_DmMC8KPIy1TBPVzTCOIO4GozY8yDK4JGmvWw&usqp=CAU", email :"aditi@gmmail.com" },
  {id :4 ,name : "Rittik Sharma" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU", email :"aditi@gmmail.com" },
  {id :5 ,name : "Rita thakur" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-bkkR_cjSimFzzUHFwHi1a2yfVfd4IWVic00mBuJctqV1CB8TJMh8dyCoQiYLU-e5F4&usqp=CAU", email :"aditi@gmmail.com" },
  {id :6 ,name : "Ritwik roy" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PLLclu7lCBRO8ie2kablVV6nXB3ZxGiulC_tW5oaNBOabN-Q6e9a4pnX94NPCDDoOso&usqp=CAU", email :"aditi@gmmail.com" },
  {id :7 ,name : "Raman" , profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU", email :"aditi@gmmail.com" },
];

function App() {
  const [chipData , setChipData] = useState([]);
  const [filterData , setFilterData] = useState(userdata);
  console.log(filterData);
  function handleDataOnChange(text ,value){
      // Ensure the input is valid
      if(value){
        if (typeof text !== 'string') {
          throw new Error('Invalid input. Please provide a string and an array of names.');
        }
        // Convert the input text to lowercase for case-insensitive matching
        const lowercaseText = text.toLowerCase();
  
        // Filter names that start with the provided text
        const filteredNames = userdata.filter((data) =>
          data.name.toLowerCase().startsWith(lowercaseText)
        );
        console.log("filter",filteredNames);
        setFilterData(filteredNames);
      }
      else{
        if(filterData.length != userdata.length){
          setFilterData(userdata);
        }
      }
  }
  function addNewChip(newUser){
    setChipData([...chipData , newUser]);
  }
  function removeChip(id){
    let newData = chipData.filter( chip => chip.id != id);
    setChipData(newData);
  }
  return (
    <div className='App'>
      <h1>Pick Users</h1>
      <div className='main-component'>
          <ChipList 
            chipData = {chipData} 
            filterData={filterData } 
            addNewChip={addNewChip} 
            handleDataOnChange={handleDataOnChange}
            removeChip={removeChip}
          />
      </div>
      {/* <hr className='hr-line'/> */}
    </div>
    
  );
}

export default App;

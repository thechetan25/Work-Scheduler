import Sidebar from "./components/Sidebar";
import Detail from "./components/Detail";
import {useState,useEffect} from 'react';

function App() {
  const[start,setstart] =useState(0);
  const[entries,setentries] =useState([]);
  const[entry,setentry]=useState({});

  function handlesave(entry){
    setentries(
        [...entries,entry]
    )
  }

  useEffect(() => {
    console.log("Updated entries:", entries);
  }, [entries]);

  function handleclick(num){
    console.log(`${num} rendered`);
    setstart(num);
  }

  function handleview(num){
    handleclick(2);
    setentry(entries[num]);
    console.log("This is entry");
    console.log(entry);
  }

  function handledelete(entry){
    const index =entries.indexOf(entry);
    delete entries[index];
    setentries[entries];
    handleclick(0);
  }
  
  return (
    <>
      <body class="h-screen">
        <div class="h-full flex flex-col box-border">
          <div class="py-10"></div>
          <div class="flex flex-grow h-full">
            <div class="w-1/4 px-3 side">
              <div class="p-3">
                <Sidebar entries={entries} handleview={handleview} click={handleclick}/>
              </div>
            </div>
            <div class="w-3/4 details flex h-full">
              <div class="h-full flex-grow">
                <Detail click={handleclick} save={handlesave} set={setstart} start={start} dentry={entry} del={handledelete}/>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;

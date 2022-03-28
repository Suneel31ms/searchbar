import { React} from 'react'
import data from "./MOCK_DATA.json"

function List({inputprops}) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el)=>{
        //  if no input the return the original
         if (inputprops === '') {
            return el;
        }
        //  return the item which contains the user input
         else {
            return el.name.toLowerCase().startsWith(inputprops.toLowerCase())
            // return el.name.toLowerCase().includes(inputprops.toLowerCase())
        }
    })
    return (
        <div className='card-container'>
            {filteredData.map((item) => (
                <ul key={item.id} className="card">
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                </ul>
            ))}
        </div>
    )
}

 export default List


import React,{ useState,useEffect } from 'react'
import icon from '../assets/icons8-delete.svg'
import task from '../data.js/task';

export default function Body() {
    const [checked,isChecked] = useState(false);
    const [text,settext] = useState("");
    const [items,setitems]=useState([]);
    
    const useEffect=(()=>{
        localStorage.setitems('items',items);
    },[items])
    
    function isCheck(id){
        
        items.map((data,idx)=>{
            if(idx === id){
                data.status = !data.status;
                console.log(data);
            }
        })
        console.log(items);
        const updateitem=[...items];
        setitems(updateitem);
    }

    function addnewitems(){
        if(!text){

        }else{
            const updateitem=[...items,{ text,status:false }];
            setitems(updateitem);
        }
        
        settext('')
    }

   function deleteitems(id){
        const updateitem=items.filter((data,idx)=>{
            return idx!==id;
        })    
        setitems(updateitem);
   }
    return (
        <div className="main-body">
            <h1>My Todo List</h1>
            
            <div className="additem">
                <input type="text" placeholder="✍️ add your task here" onChange={(e)=>{settext(e.target.value)}} value={text}></input>
                <button onClick={addnewitems}>+</button>
            </div>
            {
                items.map((data,idx)=>{
                    return (
                        <div key={ idx }  className="todoitem">
                            <div>
                                <input type="checkbox" onChange={()=>{isCheck(idx)}}/>
                                <p style={{ textDecoration: data.status === true ? 'line-through':'none'}}>{data.text}</p>
                            </div>

                            {/*delete button */}
                            <button >
                                <img onClick={()=>deleteitems(idx)} src={icon} />
                            </button>
                        </div>
                    )
                })
                
            }
        </div>
    )
}

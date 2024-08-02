export default function Task({children,clear,index}){
    return(
        <div class="grid grid-cols-2 place-content-between task-item">
                <li>{children}</li>
                <button onClick={()=>clear(index)} class="flex justify-end">Clear</button>
        </div>
    )
}
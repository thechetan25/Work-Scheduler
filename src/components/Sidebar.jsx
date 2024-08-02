export default function Sidebar({entries,handleview,click}) {

  return (
    <scetion class="container mx-auto">
      <div class="side-body">
        <h2 class="head box-border py-10">YOUR PROJECTS</h2>
        <p class="add">
            <button onClick={()=>click(1)}><i class="bi bi-plus-lg"></i> Add Project</button>
        </p>
        <ul className="list flex flex-col">
            {entries.map((el,ind)=>(
                <li key={ind}><button onClick={()=>handleview(ind)} class="text-left">{el.name}</button></li>
            ))}
        </ul>
      </div>
    </scetion>
  );
}

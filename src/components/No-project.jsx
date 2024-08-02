import image from "../assets/no-projects.png";
export default function Noproject({handle}) {
  return (
    <>
      <div className="detail-body h-full flex flex-col flex-grow items-center">
        <div className="no-project">
          <img src={image} alt="No Projects Image" />
        </div>
        <div className="no-project-body text-center">
          <h2>No Projects Selected</h2>
          <h4>Select a Project or get started with a new one</h4>
          <p>
            <button onClick={()=>handle(1)}>
              <i class="bi bi-plus-lg"></i> Create a new project
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

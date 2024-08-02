import { useState, useRef } from "react";

export default function Addproject({ handle, save, set }) {
  const initialFormState = {
    name: "",
    description: "",
    due: "",
    tasks: [],
  };
  const [data, setdata] = useState(initialFormState);

  function handlesave(e) {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  }

  function handlesubmit(entry) {
    save(entry);
    setdata(initialFormState);
    console.log(entry);
    set(0);
  }

  return (
    <div class="Add-project flex flex-col h-full">
      <p class="flex flex-row justify-end">
        <button id="cancel" onClick={() => handle(0)}>
          Cancel
        </button>
        <button id="save" onClick={() => handlesubmit(data)}>
          Save
        </button>
      </p>
      <p class="flex flex-col">
        <label for="name">PROJECT NAME</label>
        <input type="text" id="name" name="name" onChange={handlesave} />
      </p>
      <p class="flex flex-col">
        <label for="description">DESCRIPTION</label>
        <textarea
          id="description"
          rows="4"
          name="description"
          onChange={handlesave}
        ></textarea>
      </p>
      <p class="flex flex-col">
        <label for="date">DUE DATE</label>
        <input type="date" id="date" name="due" onChange={handlesave} />
      </p>
    </div>
  );
}

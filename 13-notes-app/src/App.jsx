import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        className="flex items-start gap-4 flex-col p-10 lg:w-1/2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 border-5 font-medium rounded w-full outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 border-5 font-medium rounded h-32 w-full outline-none flex items-start flex-row"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:scale-95">
          Add Note
        </button>
      </form>

      <div className="p-10 lg:border-l-3 lg:w-1/2 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className=" flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (ele, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-60 w-50 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black px-6 pt-6 pb-2 "
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {ele.title}
                  </h3>
                  <p className="mt-2 leading-tight text-sm font-semibold text-gray-600">
                    {ele.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteTask(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 text-white text-xs py-1 rounded font-bold"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
//https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png

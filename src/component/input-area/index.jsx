import React, { useState, useRef } from "react";

const InputArea = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const titleRef = useRef(null);
  return (
    <div>
      <main className="transition z-30 duration-300 relative border   bg-white  w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md cursor-text">
        <form className="px-2 pt-2 pb-1">
          <div className="flex flex-col ">
            {showInput && (
              <input
                ref={titleRef}
                type="text"
                placeholder="Title"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                onFocus={() => setShowInput(true)}
                className=" transition duration-300 font-medium px-1 pt-1 py-1 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm "
              />
            )}

            <textarea
              className="transition duration-300 font-medium px-1 mt-1 my-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm "
              type="text"
              rows="3"
              cols="20"
              placeholder="Take a note..."
              value={inputBody}
              onChange={(e) => setInputBody(e.target.value)}
              onFocus={() => setShowInput(true)}
              style={{ resize: "none" }}
            />
          </div>

          {inputTitle || inputBody ? (
            <div className="flex justify-end m-0">
              <button
                onFocus={() => setShowInput(true)}
                type="submit"
                tabIndex="0"
                disabled={!inputBody && !inputTitle}
                className="transition duration-300 font-bold text-xs font-roboto text-gray-700 bg-gray-100 rounded-md px-5 py-2 mr-1 mb-1 md:mr-1.5 md:mb-1.5 select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none "
              >
                Done
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </main>{" "}
    </div>
  );
};

export default InputArea;

import React from "react";
export default function model({ setCardmodel, getstate }) {
  console.log("Selected Item Data", getstate);
  let myArray = [];
  for (let index = 0; index < getstate.info.length; index++) {
    myArray.push(getstate.info);
  }
  console.log("myArray", myArray);
  return (
    <>
      <div
        className="relative z-20 w-full bg-zinc-500"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-gray-400 fixed inset-0  bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  ">
            <div className="w-full max-w-[920px] transform overflow-hidden rounded-lg bg-white shadow-xl h-[490px] transition-all overflow-y-auto">
              <div className="relative ">
                <div className=" w-full h-full">
                  <div className="w-full rounded-md py-6 px-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-start font-semibold ">
                        About {getstate.name} :-
                      </p>
                      <p className="font-bold  text-start text-xs rounded-b-md ">
                        {getstate.about}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-start font-semibold ">
                        If you want check more about {getstate.name} Check this
                        link :-
                      </p>
                      <p className="font-bold  text-start text-xs rounded-b-md text-blue-500">
                        {getstate.page}
                      </p>
                    </div>
                    {/* <p className="font-bold text-black text-4xl  pt-"></p> */}
                  </div>
                  <div className="mb-6 mt-6">
                    <button
                      onClick={() => setCardmodel(false)}
                      //   className="border-blue-400 text-blue-400"
                      //   className={`
                      // ${
                      //   getstate?.info.find((e) => e.key == "Sexo").value ==
                      //   "Masculino"
                      //     ? "text-blue-400"
                      //     : "text-pink-400"
                      // }`}
                    >
                      Canel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

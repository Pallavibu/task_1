const Body = () => {
  return (
    <div>
      <div className="flex justify-start  my-4 text-lg ">
        <div className="mx-4">
          <p> &lt;</p>
        </div>
        <div className="mx-auto">
          <p className="font-semibold">Edit About</p>
        </div>
      </div>
      <div className="bg-blue-200 flex justify-between mx-auto p-2">
        <div>
          <p className="font-medium mx-2"> Notify Network</p>
        </div>
        <div className="bg-blue-500 w-10 rounded-xl "></div>
      </div>
      <div>
        <div>
          <p className="font-medium mx-6 my-4">About</p>
        </div>
        <div>
          <p className="w-auto border border-blue-700 shadow-lg mx-6 rounded-md text-blue-700 p-4">
            The discovery was made by Richard McClintock, a professor of Latin
            at Hampden-Sydney College in Virginia, whofaced the impetuous
            recurrence of the dark word consecteturin the next Lorem ipsum
            researched its origins to identify them in sections 1.10.32 and
            1.10.33of the aforementione
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="m-8 p-2 border border-blue-900 text-blue-900 text-base font-medium">
          Delete about
        </button>
        <button className="bg-blue-700 m-8 px-10 text-white font-medium py-4">Save</button>
      </div>
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Create_dealer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [cugNumber, setCugNumber] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [dealerDetails, setDealerDetails] = useState(null);

  const validDetails = {
    "1111111111": {
      employeeName: "John Doe",
      employeeID: "1234567890",
      division: "HQ",
      department: "ACCOUNTS",
      plan: "A",
      operator: "Airtel",
      cugNumber: "1111111111",
      status: "Activate",
    },
    "1234567890": {
      employeeName: "John Doe",
      employeeID: "1234567890",
      division: "HQ",
      department: "ACCOUNTS",
      plan: "A",
      operator: "Airtel",
      cugNumber: "1111111111",
      status: "Activate",
    },
    "2222222222": {
      employeeName: "Jane Smith",
      employeeID: "0987654321",
      division: "CON",
      department: "ENGINEERING",
      plan: "B",
      operator: "Vodafone",
      cugNumber: "2222222222",
      status: "Deactivate",
    },
    "0987654321": {
      employeeName: "Jane Smith",
      employeeID: "0987654321",
      division: "CON",
      department: "ENGINEERING",
      plan: "B",
      operator: "Vodafone",
      cugNumber: "2222222222",
      status: "Deactivate",
    },
  };

  const handleCugChange = (event) => {
    setCugNumber(event.target.value);
    setEmployeeID(""); // Clear Employee ID input
  };

  const handleEmployeeChange = (event) => {
    setEmployeeID(event.target.value);
    setCugNumber(""); // Clear CUG Number input
  };

  const handleSubmit = () => {
    if (validDetails[cugNumber]) {
      setDealerDetails(validDetails[cugNumber]);
      setShowDetails(true);
    } else if (validDetails[employeeID]) {
      setDealerDetails(validDetails[employeeID]);
      setShowDetails(true);
    } else {
      toast.error("Wrong input");
      setCugNumber("");
      setEmployeeID("");
    }
  };

  return (
    <>
      <Toaster />
      {!showDetails ? (
        <div className="flex flex-col items-center  min-h-screen bg-white">
          <div className="w-full bg-blue-700 py-4 flex mb-10 justify-between items-center px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl text-white">Create Dealer</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full max-w-sm">
              <label className="block text-sm font-medium text-gray-700">
                Enter CUG Number
              </label>
              <input
                type="text"
                value={cugNumber}
                onChange={handleCugChange}
                placeholder="Enter 11 Digit Number"
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                onClick={handleSubmit}
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
              >
                GO
              </button>
            </div>
            <div className="text-center md:mx-6">
              <span className="text-lg font-semibold text-black">OR</span>{" "}
              {/* Changed color to black */}
            </div>
            <div className="w-full max-w-sm">
              <label className="block text-sm font-medium text-gray-700">
                Enter Employee ID
              </label>
              <input
                type="text"
                value={employeeID}
                onChange={handleEmployeeChange}
                placeholder="Enter 11 Digit Number"
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                onClick={handleSubmit}
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
              >
                GO
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col items-center p-6 min-h-screen bg-gray-100">
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-4 right-4 p-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold mb-6 text-blue-600">
            Create Dealer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee Name
              </label>
              <input
                type="text"
                value={dealerDetails.employeeName}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                value={dealerDetails.employeeID}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <input
                type="text"
                value={dealerDetails.division}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                value={dealerDetails.department}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Plan
              </label>
              <input
                type="text"
                value={dealerDetails.plan}
                readOnly
                className="mt-1 block w-full px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Operator
              </label>
              <input
                type="text"
                value={dealerDetails.operator}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter CUG Number
              </label>
              <input
                type="text"
                value={dealerDetails.cugNumber}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <input
                type="text"
                value={dealerDetails.status}
                readOnly
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => toast.success("Submitted")}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Create_dealer;

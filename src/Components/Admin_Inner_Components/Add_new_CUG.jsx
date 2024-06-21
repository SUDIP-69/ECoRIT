import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from '../../firebaseConfig'; // Adjust the path if your firebaseConfig.js is in a different directory
import { collection, addDoc } from "firebase/firestore";

const Add_new_CUG = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedCUG, setSelectedCUG] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedAllocation, setSelectedAllocation] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [billUnit, setBillUnit] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleCUGChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setSelectedCUG(value);
    }
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleAllocationChange = (event) => {
    setSelectedAllocation(event.target.value);
  };

  const handleEmployeeNumberChange = (event) => {
    const value = event.target.value;
    if (/^[0-9a-zA-Z]{0,11}$/.test(value)) {
      setEmployeeNumber(value);
    }
  };

  const handleBillUnitChange = (event) => {
    setBillUnit(event.target.value);
  };

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleSubmit = async () => {
    if (!/^\d{10}$/.test(selectedCUG)) {
      toast.error("CUG Number should be a valid 10-digit number.");
      setSelectedCUG("");
      return;
    }

    if (!/^[0-9a-zA-Z]{11}$/.test(employeeNumber)) {
      toast.error("Employee Number should be 11 characters alphanumeric.");
      setEmployeeNumber("");
      return;
    }

    if (!/^\d{7}$/.test(billUnit)) {
      toast.error("Bill Unit should be a valid 7-digit number.");
      setBillUnit("");
      return;
    }

    const newCUGData = {
      selectedPlan,
      selectedCUG,
      selectedDivision,
      selectedDepartment,
      selectedAllocation,
      employeeNumber,
      billUnit,
      employeeName,
      status: "Active", // Default status when activated
      timestamp: new Date().toLocaleString(),
    };

    try {
      await addDoc(collection(db, "cug"), newCUGData);
      toast.success("New CUG member Added");
      setSelectedCUG("");
      setSelectedDivision("");
      setSelectedDepartment("");
      setSelectedAllocation("");
      setEmployeeNumber("");
      setBillUnit("");
      setEmployeeName("");
      setSelectedPlan("");
    } catch (error) {
      toast.error("Error adding document: " + error.message);
    }
  };

  const divisions = {
    HQ: [
      "ACCOUNTS",
      "AUDIT",
      "COMMERCIAL",
      "ELECTRICAL",
      "ENGINEERING",
      "GENERAL ADMIN",
      "MECHANICAL",
      "MEDICAL",
      "OPERATING",
      "PERSONNEL",
      "RRB",
      "SIGNAL AND TELECOM",
      "SAFETY",
      "SECURITY",
      "STORES",
    ],
    CON: ["ACCOUNTS", "ELECTRICAL", "ENGINEERING", "OPERATING", "PERSONNEL", "SIGNAL AND TELECOM"],
    MCS: ["ACCOUNTS", "ELECTRICAL", "MECHANICAL", "PERSONNEL"],
  };

  const planAmounts = {
    "Plan A": "₹ 10",
    "Plan B": "₹ 20",
    "Plan C": "₹ 30",
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center min-h-screen bg-white">
        <div className="w-full bg-blue-700 py-4 flex mb-10 justify-between items-center px-4 md:px-8">
          <h1 className="text-2xl md:text-3xl text-white">Activate New CUG</h1>
        </div>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Enter CUG Number
            </label>
            <input
              type="text"
              value={selectedCUG}
              onChange={handleCUGChange}
              placeholder="Enter 10 Digit Number"
              className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              onClick={handleSubmit}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>

        {selectedCUG && (
          <div className="flex flex-col items-center p-6 h-fit bg-gray-100 text-blue-600">
            <h1 className="text-xl font-bold mb-6">Activate New CUG</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <div className="col-span-1 md:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  CUG Number
                </label>
                <input
                  type="text"
                  value={selectedCUG}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employee Number
                </label>
                <input
                  type="text"
                  value={employeeNumber}
                  onChange={handleEmployeeNumberChange}
                  placeholder="Enter 11 Digit Alpha-Numeric"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employee Name
                </label>
                <input
                  type="text"
                  value={employeeName}
                  onChange={handleEmployeeNameChange}
                  placeholder="Enter Employee Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Division
                </label>
                <select
                  value={selectedDivision}
                  onChange={handleDivisionChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black appearance-none"
                >
                  <option value="">Select Division</option>
                  <option value="HQ">HQ</option>
                  <option value="CON">CON</option>
                  <option value="MCS">MCS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black appearance-none"
                >
                  <option value="">Select Department</option>
                  {selectedDivision === "HQ" &&
                    divisions.HQ.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  {selectedDivision === "CON" &&
                    divisions.CON.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  {selectedDivision === "MCS" &&
                    divisions.MCS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bill Unit
                </label>
                <select
                  value={billUnit}
                  onChange={handleBillUnitChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black appearance-none"
                >
                  <option value="">Select Number</option>
                  <option value="1234567">1234567</option>
                  <option value="2345678">2345678</option>
                  <option value="3456789">3456789</option>
                  <option value="4567890">4567890</option>
                  <option value="5678901">5678901</option>
                  <option value="6789012">6789012</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Allocation
                </label>
                <select
                  value={selectedAllocation}
                  onChange={handleAllocationChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black appearance-none"
                >
                  <option value="">Select Number</option>
                  <option value="1234567">1234567</option>
                  <option value="7654321">7654321</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-3 flex justify-between items-center mt-4">
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plan:
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={handlePlanChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black appearance-none"
                    style={{
                      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E") no-repeat right 0.75rem center/12px 12px`,
                    }}
                  >
                    <option value="">Select plan</option>
                    <option value="Plan A">Plan A</option>
                    <option value="Plan B">Plan B</option>
                    <option value="Plan C">Plan C</option>
                  </select>
                </div>
                {selectedPlan && (
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-2">Amount:</span>
                    <span className="font-bold">
                      {planAmounts[selectedPlan]}
                    </span>
                  </div>
                )}
                <button
                  className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500"
                  onClick={handleSubmit}
                >
                  Activate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Add_new_CUG;

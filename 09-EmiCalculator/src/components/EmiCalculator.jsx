import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function EmiCalculator() {
  const [principle, setPrinciple] = useState(200000);
  const [interest, setInterest] = useState(24);
  const [tenure, setTenure] = useState(18);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const monthlyRate = interest / 12 / 100;
    const numPayments = tenure * 12;
    const emiValue =
      (principle * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = emiValue * numPayments;
    const totalInterestValue = totalPayment - principle;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalAmount(totalPayment.toFixed(2));
  }, [principle, interest, tenure]);

  const chartData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [principle, totalInterest],
        backgroundColor: ["#00ace6", "#0000cc"],
        hoverBackgroundColor: ["#66d9ff", "#3333ff"],
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-[80%] w-full p-8 ">
        <h1 className="text-[50px] font-semibold text-gray-700 mb-10 ml-10">
          EMI Calculator
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[80%] bg-white shadow-xl rounded-lg p-10">
          <div className="space-y-[120px]">
            <div className="space-y-[40px]">
              <label className="text-3xl flex justify-between  font-medium text-gray-700">
                Loan Amount
                <span className="ml-2  text-[#060236] bg-blue-100 text-right w-[200px]  text-3xl ">
                  ₹ {principle.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min="100000"
                max="100000000"
                step="50000"
                value={principle}
                onChange={(e) => setPrinciple(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="space-y-[40px]">
              <label className=" text-3xl flex justify-between  font-medium text-gray-700">
                Rate of Interest (p.a)
                <span className="ml-2  text-[#060236] bg-blue-100 text-right w-[200px]  text-3xl ">
                  {interest} %
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={interest}
                onChange={(e) => setInterest(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="space-y-[40px]">
              <label className=" text-3xl flex justify-between font-medium text-gray-700">
                Loan Tenure
                <span className="ml-2  text-[#060236] bg-blue-100 text-right w-[200px]  text-3xl ">{tenure} Yr</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* EMI and Results Section */}
            <div className="space-y-8 mt-8">
              <div className=" text-3xl text-gray-700 font-medium flex justify-between">
                <span>Monthly EMI</span>
                <span>₹ {emi.toLocaleString()}</span>
              </div>
              <div className=" text-3xl text-gray-700 font-medium flex justify-between">
                <span>Principal Amount</span>
                <span>₹ {principle.toLocaleString()}</span>
              </div>
              <div className=" text-3xl text-gray-700 font-medium flex justify-between">
                <span>Total Interest</span>
                <span>₹ {totalInterest.toLocaleString()}</span>
              </div>
              <div className=" text-3xl text-gray-700 font-medium flex justify-between">
                <span>Total Amount</span>
                <span>₹ {totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex justify-center mt-16">
            <div className="w-[450px] h-[450px] ">
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

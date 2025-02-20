export default function AccountChargesTable() {
    const accountCharges = [
      { type: "Online account", charges: "Free" },
      { type: "Offline account", charges: "Free" },
      { type: "NRI account (offline only)", charges: "₹ 500" },
      { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹ 500" },
    ];
  
    return (
      <div className=" w-full overflow-x-auto p-4">
        <table className="w-full border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Type of Account</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Charges</th>
            </tr>
          </thead>
          <tbody>
            {accountCharges.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                <td className="border border-gray-300 px-4 py-2">{item.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
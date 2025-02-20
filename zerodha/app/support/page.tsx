export default function Support() {
    return (
      <div className="py-[100px] px-[50px] flex flex-col items-center lg:mx-[100px] text-center">
        <h1 className="text-3xl font-bold mb-6">Zerodha Support</h1>
        <p className="text-lg max-w-2xl mb-4">
          Welcome to Zerodha Support! Find answers to your queries, get help with your account, and explore resources to enhance your trading experience.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📌 Help Center</h2>
            <p>Explore frequently asked questions and solutions for account opening, trading, funds, and more.</p>
            <a href="https://support.zerodha.com" className="text-blue-600 mt-2 inline-block">Visit Help Center →</a>
          </div>
  
          <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📞 Contact Support</h2>
            <p>Need further assistance? Reach out to our support team via tickets or call our helpline.</p>
            <a href="https://support.zerodha.com/tickets" className="text-blue-600 mt-2 inline-block">Raise a Ticket →</a>
          </div>
  
          <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">💰 Fund Transfers</h2>
            <p>Get detailed information about adding and withdrawing funds from your Zerodha account.</p>
            <a href="https://support.zerodha.com/funds" className="text-blue-600 mt-2 inline-block">View Fund Guide →</a>
          </div>
  
          <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📃 Account Opening</h2>
            <p>New to Zerodha? Learn how to open an account and complete your KYC verification.</p>
            <a href="https://support.zerodha.com/account-opening" className="text-blue-600 mt-2 inline-block">Open an Account →</a>
          </div>
        </div>
      </div>
    );
  }
  
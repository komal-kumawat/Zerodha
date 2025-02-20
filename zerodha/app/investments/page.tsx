import ButtonElement from "@/components/ButtonElement";
import Heading from "@/components/Heading";
import ProductElement from "@/components/ProductElement";

export default function Investment() {
    return (
        <div className="py-[100px] px-[50px] flex flex-col items-center justify-center lg:mx-[100px] ">
            <div>
                <Heading text="Investments" type="h1" />
                <p className="text-[20px] text-gray-700 ">Everything from equities and derivatives to mutual funds and fixed income
                </p>
                <div className="flex justify-center">Check out our  <a href="/products" className="text-blue-500 px-2">technology offerings</a></div>

            </div>
            <div className="py-[50px]">
                <ProductElement Element="Stocks" ImageLink="/investments-stocks.png" left={true} content="Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)." links={[
                    { text: "Kite", url: "https://kite.zerodha.com/" },
                    { text: "StockReports+", url: "" },
                    { text: "Console", url: "" },
                    { text: "Streak", url: "" },
                    { text: "Smallcase", url: "" },
                    { text: "Market overview", url: "" },

                ]}
                />
                           <ProductElement Element="Direct mutual funds" ImageLink="/investments-mf.png" left={false} content="Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year." links={[

{ text: "Coin", url: "" },

]}
/>   
                <ProductElement Element="Futures & Options
" ImageLink="/investments-fo.png" left={true} content="Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE." links={[
                    { text: "Kite", url: "https://kite.zerodha.com/" },
                    { text: "Sensibull", url: "" },
                    { text: "Margin calcuator", url: "" },
                    { text: "Streak", url: "" },

                ]}
                />                  <ProductElement Element="IPO" ImageLink="/IPO-products.png" left={false} content="Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app. Read more" links={[
                    { text: "Kite", url: "https://kite.zerodha.com/" },
                    { text: "Upcoming IPOs", url: "" },

                ]}
                />                <ProductElement Element="Gift stocks" ImageLink="/gift-illustration.png" left={true} content="
Gift stocks
Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving." links={[
                    
                    { text: "Send a gift", url: "" },

                ]}
                />                <ProductElement Element="Fixed income" ImageLink="/investments-income.png" left={false} content="Invest in Gold electronically and gain market returns + fixed 2.5% per year on the invested amount, guaranteed by the Government of India." links={[

                    { text: "Sovereign Gold Bond (SGB)", url: "" },

                ]}
                />                

            </div>
            <div className="pt-[100px] p-[50px] pb-[0px]">
                <Heading text="Open a Zerodha account" type="h1" />
                <p className="text-gray text-[20px] flex justify-center">Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
                <ButtonElement text="Signup" />
            </div>
        </div>
    )
}
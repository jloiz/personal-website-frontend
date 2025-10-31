"use client";

import { Provider } from "./provider";
import { NavigationBar } from "../components/navigation-bar";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Provider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <div className="titleItem text-6xl font-bold">
                <h1 >
                  Joshua Loizou
                </h1>
              </div>
              <NavigationBar/>
              {children}
            </div>
            <Footer/>
          </div>
          {/*ToDo: If content gets too long move the footer back to here*/}
        </Provider>
      </body>
    </html>
  );
}

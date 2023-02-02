import "../../styles/globals.css"



export default function RootLayout({ children }) {
  
  return (
    <html lang="tr">
      <head />
      <body className={`min-h-screen  s overflow-y-auto lg:grid lg:grid-cols-5  w-full flex flex-col  `}>
        
       
        <div className="lg:col-span-4">
          
          {children}</div>
        
      </body>
    </html>
  );
}

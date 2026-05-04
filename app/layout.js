import "./globals.css";
import StyleSheetWrapper from './styleSheetWrapper'

export const metadata = {
  title: "Alex Manzi | Product, Engineering, AI",
  description: "Portfolio for Alex Manzi featuring recent product, engineering, and AI work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyleSheetWrapper>
        {children}
        </StyleSheetWrapper>
      </body>
    </html>
  );
}

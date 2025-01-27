import "./globals.css";
import StyleSheetWrapper from './styleSheetWrapper'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

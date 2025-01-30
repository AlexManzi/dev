import "./globals.css";
import StyleSheetWrapper from './styleSheetWrapper'

export const metadata = {
  title: "Software Engineer Portfolio",
  description: "Next.js app showcasing the fullstack work I've accomplished",
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

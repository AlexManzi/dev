import "./globals.css";
import StyleSheetWrapper from './styleSheetWrapper'
import { ThemeProvider } from './ui/theme-provider'
import FloatingContactButton from './ui/floating-contact'
import { ContactPanelProvider } from './ui/contact-panel'

export const metadata = {
  title: "Alex Manzi | Product, Engineering, AI",
  description: "Portfolio for Alex Manzi featuring recent product, engineering, and AI work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyleSheetWrapper><ThemeProvider><ContactPanelProvider>{children}<FloatingContactButton /></ContactPanelProvider></ThemeProvider></StyleSheetWrapper>
      </body>
    </html>
  );
}

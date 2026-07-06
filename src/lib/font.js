import { Black_Han_Sans, Poppins } from "next/font/google"

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300", "400","500","600","700"]
})
export const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: '400'
})
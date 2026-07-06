import Footer from "@/components/shared/Footer";
import MainNavbar from "@/components/shared/MainNavBar";



const AuthLayout = ({children}) => {
  return (
    <>
    <MainNavbar/>
    {children}
    <Footer></Footer>
    </>
  );
};

export default AuthLayout;
import Footer from "@/components/shared/Footer";
import MainNavBar from "@/components/shared/MainNavBar";

const MainLayout = ({children}) => {
  return (
    <div>
        <MainNavBar></MainNavBar>
        {children}
        <Footer/>
    </div>
  );
};

export default MainLayout;
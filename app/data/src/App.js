import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { useMediaQuery } from "react-responsive";
import Icons from "./Icons";
import IconsMobile from "./IconsMobile";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <article style={{ fontFamily: "Lato" }}>
      <div class="vh-100 dt w-100 tc bg-dark-gray white cover">
        <div class="dtc v-mid">
          <Logo fill="#ffffff60" height={isTabletOrMobile ? "90vw" : "500px"} />
          <h1 class=" f-headline-1-ns f-subheadline fw1 white-60">Robbo.xyz</h1>
         {isTabletOrMobile ? <IconsMobile/> : <Icons/>} 
        </div>
      </div>
    </article>
  );
};

export default App;

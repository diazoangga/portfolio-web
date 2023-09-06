import { BrowserRouter, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Research,
} from './components';
import NotFoundPage from './components/404';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-navyBlue">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <div className="bg-project">
          <Projects />
        </div>

        <div className="bg-navyBlue">
          <Research />
        </div>

        <div className="bg-navyBlue">
        <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>
        </div>

          
        <div className="relative z-0, bg-navyBlue">
          <Contact />
        </div>
      </div>
      {/* <Switch>
        <Route path="/404" Component={Page404} />
      </Switch> */}
    </BrowserRouter>
  );
};

export default App;

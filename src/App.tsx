import "./index.css";
import LogoImg from "./assets/logo.svg";
import BlackListIcon from "./assets/icon-blacklist.svg";
import FacebookIcon from "./assets/icon-facebook.svg";
import InstagramIcon from "./assets/icon-instagram.svg";
import EyeIcon from "./assets/icon-preview.svg";
import TextIcon from "./assets/icon-text.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import computerImg from "./assets/image-computer.png";
import DevicesImg from "./assets/image-devices.png";
import GoogleLogo from "./assets/logo-google.png";
import HpLogo from "./assets/logo-hp.png";
import IbmLogo from "./assets/logo-ibm.png";
import MicrosoftLogo from "./assets/logo-microsoft.png";
import VectorGraphicsLogo from "./assets/logo-vector-graphics.png";

function App() {
  return (
    <>
      <div className="text-center background">
        <header className="py-20">
          <div className="flex justify-center py-7">
            <img src={LogoImg} alt="" />
          </div>
          <div className="">
            <h1 className="p-6">A history of everything you copy</h1>
            <p className="sm:w-7/12 md:w-5/12 w-11/12  px-5 m-auto">
              Clipboard allows you to track and organize everything you copy. Instantly acess your clipboard on all your
              devices.
            </p>
          </div>
          <div className="pt-8  flex justify-center max-sm:flex-col gap-4 px-8 min-[500px]:px-20">
            <button className="btn green-shadow">Download for iOS</button>
            <button className="btn blue-shadow">Download for Mac</button>
          </div>
        </header>

        <section className="pt-14">
          <h2 className="">Keep track of your snippets</h2>
          <p className="sm:w-7/12 md:w-5/12 w-10/12 m-auto">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately
            on all your devices. Our Mac and iOS apps will help you organize everything.
          </p>
          <div className="mt-20 max-sm:mx-8 gap-20 grid grid-cols-2 max-sm:grid-cols-1">
            <img src={computerImg} alt="" />
            <div className="flex flex-col gap-10 sm:pt-10 max-sm:items-center ">
              <div className="track-of-snippets-func">
                <h3>Quick Search</h3>
                <p>Easily search your snippets by content, category, web address, application, and more.</p>
              </div>
              <div className="track-of-snippets-func">
                <h3>iCloud Sync</h3>
                <p>Instantly saves and syncs snippets across all your devices.</p>
              </div>
              <div className="track-of-snippets-func">
                <h3>Complete History</h3>
                <p>Retrieve any snippets from the first moment you started using the app.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-36">
          <div>
            <h2>Acess Clipboard anywhere</h2>
            <p className="sm:w-7/12 md:w-5/12 w-10/12 m-auto sm:px-6">
              Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple
              clicks.
            </p>
          </div>
          <img src={DevicesImg} alt="" className=" m-auto my-24" />
        </section>
        <section className="mt-32 ">
          <div>
            <h2>Supercharge your workflow</h2>
            <p className="max-sm:px-8">We've got the tools to boost your productivity.</p>
          </div>
          <div className=" flex supercharge-your-worflow-w pt-10">
            <div className="supercharge-workflow-cols">
              <img src={BlackListIcon} alt="" />
              <h3>Create vlacklists</h3>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div>
              <img src={TextIcon} className="" alt="" />
              <h3>Plain text snippets</h3>
              <p>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div>
              <img src={EyeIcon} alt="" />
              <h3>Sneak preview</h3>
              <p>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </section>
        <section className="mt-48  justify-center flex max-sm:flex-col flex-wrap items-center gap-24 p-4">
          <img src={GoogleLogo} alt="" />
          <img src={IbmLogo} alt="" />
          <img src={MicrosoftLogo} alt="" />
          <img src={HpLogo} alt="" />
          <img src={VectorGraphicsLogo} alt="" />
        </section>
        <section className="mt-36">
          <h2>Clipboard for iOS and Mac OS</h2>
          <p className="sm:w-7/12 md:w-5/12 w-10/12 m-auto">
            Aviable for free on the App Store. Download for Mac, sync with iCloud and you're ready to start adding to
            your clipboard.
          </p>
          <div className="pt-8 flex justify-center max-sm:flex-col gap-4 px-8 min-[500px]:px-20">
            <button className="btn green-shadow">Download for iOS</button>
            <button className="btn blue-shadow ">Download for Mac</button>
          </div>
        </section>
        <footer className="mt-48 bg-gray-100 flex justify-center  foot py-16 ">
          <div className="sm:flex  items-center sm:justify-between w-9/12">
            <div className="flex max-sm:flex-col sm:gap-20 items-center refs foot">
              <img className="w-12 max-sm:my-3" src={LogoImg} alt="" />
              <div className="">
                <a href="">FAQs</a>
                <a href="">Contact Us</a>
              </div>
              <div>
                <a href="">Privacy Policy</a>
                <a href="">Press Kit</a>
              </div>
              <div className="sm:self-start">
                <a href="">Install Guide</a>
              </div>
            </div>
            <div className="flex max-sm:justify-center max-sm:my-3 gap-5 pt-2">
              <img src={FacebookIcon} alt="" />
              <img src={TwitterIcon} alt="" />
              <img src={InstagramIcon} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

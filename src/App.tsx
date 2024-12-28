import "./index.css";
import LogoImg from "./assets/logo.svg";
import HeaderMobi from "./assets/bg-header-mobile.png";
import HeaderPC from "./assets/bg-header-desktop.png";
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
      <div>
        <header>
          <div>
            <img src={LogoImg} alt="" />
          </div>
          <div>
            <h1>A history of everything you copy</h1>
            <p>
              Clipboard allows you to track and organize everything you copy. Instantly acess your clipboard on all your
              devices.
            </p>
          </div>
          <div>
            <button>Download for iOS</button>
            <button>Download for Mac</button>
          </div>
        </header>

        <section>
          <h2>Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately
            on all your devices. Our Mac and iOS apps will help you organize everything.
          </p>

          <img src={computerImg} alt="" />
          <div>
            <div>
              <h3>Quick Search</h3>
              <p>Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            <div>
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <h3>Complete History</h3>
              <p>Retrieve any snippets from the first moment you started using the app.</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Acess clipboard anywhere</h2>
            <p>
              Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple
              clicks.
            </p>
          </div>
          <img src={DevicesImg} alt="" />
        </section>
        <section>
          <div>
            <h2>Supercharge your workflow</h2>
            <p>We've got the tools to boost your productivity.</p>
          </div>
          <div>
            <div>
              <img src={BlackListIcon} alt="" />
              <h3>Create vlacklists</h3>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div>
              <img src={TextIcon} alt="" />
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
        <section>
          <img src={GoogleLogo} alt="" />
          <img src={IbmLogo} alt="" />
          <img src={MicrosoftLogo} alt="" />
          <img src={HpLogo} alt="" />
          <img src={VectorGraphicsLogo} alt="" />
        </section>
        <section>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Aviable for free on the App Store. Download for Mac, sync with iCloud and you're ready to start adding to
            your clipboard.
          </p>
          <div>
            <button>Download for iOS</button>
            <button>Download for Mac</button>
          </div>
        </section>
        <footer>
          <div>
            <div>
              <img src={LogoImg} alt="" />
              <div>
                <a href="">FAQs</a>
                <a href="">Contact Us</a>
              </div>
              <div>
                <a href="">Privacy Policy</a>
                <a href="">Press Kit</a>
              </div>
              <div>
                <a href="">Install Guide</a>
              </div>
            </div>
            <div>
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

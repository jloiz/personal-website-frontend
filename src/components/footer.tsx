import Linkedin from "../sprites/linkedin";
import Github from "../sprites/github";

export default function Footer() {
  return (
    <div className="border-t border-divider">
      <footer className="flex flex-row ">
        <div className="mt-5 mb-3 ml-auto pr-8">
          <div className="flex flex-row space-x-4">
            <a
              href="https://github.com/jloiz"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-loizou-746446151/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

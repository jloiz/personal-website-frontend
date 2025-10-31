import Linkedin from "../sprites/linkedin";
import Github from "../sprites/github";



export default function Footer() {
  return (
    <div className="border-t border-divider">
      <footer className="flex flex-row ">
        Additional Footer info here
        <div className="mt-5 mb-3 ml-auto pr-8">
          <div className="flex flex-row space-x-4">
            <Github />
            <Github />
          </div>
        </div>
      </footer>
    </div>
  );
}
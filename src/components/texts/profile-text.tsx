export default function ProfileText() {
  return (
    <>
      <p>Hi, I am Josh and I like to code things.</p>
      <p className="mt-3">
        I am a professional software engineer proficient in Typescript, Java,
        Go, and Python, and familiar with C. I have experience working with a
        number of cloud (GCP and AWS) and dev-ops tools, in addition to multiple
        frontend and backend frameworks (including but not limited to React,
        Next.js, Springboot, Bootstrap, TailwindCSS and GoFiber) along with
        different data (PySpark and Pandas) and non-data-focused Python
        libraries.
      </p>
      <p className="mt-3">
        If you are visiting from my CV or job application, I'd be glad to
        discuss my skills and experience in further detail.
      </p>
      {/*ToDo: Add link for website frontend directly*/}
      <p className="mt-3">
        I enjoy coding not only professionally but also as a way to explore new
        ideas and continue learning. Although I use on AI tooling in my
        day‑to‑day work to boost productivity, I intentionally build my personal
        projects without it. This approach gives me two key benefits:
      </p>
      <ul className="list-disc pl-6">
        <li>
          <p>
            It allows me to develop a deep, intuitive understanding of the
            technologies I’m working with, making problem‑solving and debugging
            far more natural.
          </p>
        </li>
        <li>
          <p>
            It keeps the process genuinely enjoyable—there’s something rewarding
            about building things from the ground up.
          </p>
        </li>
      </ul>
      <p>
        This website is one of those projects; you can find further information
        about it{" "}
        <a className="underline" href="/projects">
          here
        </a>
        .
      </p>
      <p className="mt-3">
        Outside of coding, I am a keen runner and triathlete, hoping to one day
        complete an IronMan 70.3. I am also an avid home cook (after having
        worked in this industry professionally) and enjoy creating new recipes
        and trying them out on my partner and friends. I plan on developing a
        system to manage these soon (watch this space!)
      </p>
      {/*ToDo: Thesis link once done */}
      <p className="mt-3">
        My academic background is in theoretical physics, and I enjoy following
        new developments in this field, particularly Graphene, which was the
        topic of my thesis.
      </p>
      <p className="mt-3">
        If you have made it this far, thank you for reading and I hope you enjoy
        exploring this site!
      </p>
    </>
  );
}

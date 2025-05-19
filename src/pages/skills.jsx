

export default function SkillsSection() {
  return (
    <section className="flex flex-col justify-center items-center my-10 p-2 skills ">
      <h2 className='text-4xl font-semibold my-10 '>Skills</h2>
      <button className="flex flex-row justify-center items-center flex-wrap gap-5 py-6 ">
        <button aria-description="icon html5">
          <i className="fa-brands fa-html5"></i>
        </button>
        <button aria-description="icon css">
          <i className="fa-brands fa-css"></i>
        </button>
        <button aria-description="icon javascript">
          <i className="fa-brands fa-js"></i>
        </button>
        <button aria-description="icon mui">
         <i className="fa-solid fa-m"></i>
        </button>
        <button aria-description="icon react">
          <i className="fa-brands fa-react"></i>
        </button>
        <button aria-description="icon tailwind">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path
              d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
              fill="#fbbd36"
            />
          </svg>
        </button>
        <button aria-description="icon git">
          <i className="fa-brands fa-git-alt"></i>
        </button>
        <button aria-description="icon github">
          <i className="fa-brands fa-github"></i>
        </button>
      </button>
    </section>
  );
}

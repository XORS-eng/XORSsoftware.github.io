import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-stretch justify-start font-sans bg-white overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {" "}
      {/* SECTION 1 */}
      <main className="min-h-screen w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 sm:gap-x-24 py-32 bg-white snap-start shrink-0 mx-auto">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 max-w-md justify-self-center sm:justify-self-end">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            did u hire a bad engineer? devshop?
          </h1>
          {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            hire us{" "}
            <a href="mailto:dihodih@gmail.com" className="font-medium">
              dihodih@gmail.com
            </a>
          </p> */}
        </div>

        <Image
          className="justify-self-center"
          src="/serioushamster.svg"
          alt="Serious Hamster"
          width={300}
          height={60}
          priority
        />

        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
      {/* SECTION 2 */}
      <main className="min-h-screen w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 sm:gap-x-24 py-32  bg-white snap-start shrink-0 mx-auto">
        <div className="flex flex-col items-start gap-6 text-left max-w-md justify-self-center sm:justify-self-end">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            we can help.
          </h1>
          {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            hire us{" "}
            <a href="mailto:dihodih@gmail.com" className="font-medium">
              dihodih@gmail.com
            </a>
          </p> */}
        </div>

        <Image
          className="justify-self-center"
          src="/smarthamster.svg"
          alt="Smart Hamster"
          width={300}
          height={60}
          priority
        />

        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
      {/* SECTION 3 */}
      <main className="min-h-screen w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 sm:gap-x-24 py-32 bg-white snap-start shrink-0 mx-auto">
        <div className="flex flex-col items-start gap-6 text-left max-w-md justify-self-center sm:justify-self-end">
          <p className="max-w-md leading-8 text-zinc-600 dark:text-zinc-400">
            <a
              href="mailto:xorssoftware@gmail.com"
              className="rainbow-text font-bold text-2xl sm:text-3xl"
            >
              xorssoftware@gmail.com
            </a>
          </p>
        </div>

        <Image
          className="justify-self-center"
          src="/happyhamster.svg"
          alt="Happy Hamster"
          width={300}
          height={60}
          priority
        />

        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}

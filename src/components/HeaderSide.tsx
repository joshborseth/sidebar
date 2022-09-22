import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const HeaderSide = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.header
            initial={{ width: 0 }}
            animate={{ width: 320 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.25 }}
            className="sticky left-0 top-0 bottom-0 h-full bg-zinc-800 font-light text-zinc-200"
          >
            <nav className="h-full w-full">
              <ul className="flex h-full w-full flex-col items-center justify-center gap-10">
                <HeaderLink url="/" title="Home" />
                <HeaderLink url="/" title="About" />
                <HeaderLink url="/" title="Skills" />
                <HeaderLink url="/" title="Projects" />
                <HeaderLink url="/" title="Contact" />
                <li>
                  <Link href="/">
                    <a className="nav-btn hover:underline">
                      <svg className="fill-zinc-200 hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="nav-btn hover:underline">
                      <svg className="fill-zinc-200 hover:opacity-50" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 m-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-zinc-200 bg-zinc-200 text-2xl font-black text-zinc-800 transition-colors duration-300 hover:bg-zinc-800 hover:text-zinc-200"
            >
              X
            </button>
          </motion.header>
        )}
      </AnimatePresence>
      {!isOpen && (
        <div className="flex h-full w-full items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full border-2 border-zinc-800 bg-zinc-800 p-5 text-2xl font-black text-zinc-200 transition-colors duration-300 hover:bg-zinc-200 hover:text-zinc-800"
          >
            Open Sidebar
          </button>
        </div>
      )}
    </>
  );
};

const HeaderLink = ({ url, title }: { url: string; title: string }) => {
  return (
    <li>
      <Link href={url}>
        <a className="nav-btn hover:underline">{title}</a>
      </Link>
    </li>
  );
};

export default HeaderSide;

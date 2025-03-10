// Source: https://github.com/ErickRomeroDev/hackathon-midnight-2/blob/main/README.md
import Image from "next/image";
import Link from "next/link";
import { googleLogout } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type IconsType = {
  src: string;
  alt: string;
};

const icons: IconsType[] = [
    // { src: "/brush.svg", alt: "ui" },
    // { src: "/next-icon.svg", alt: "next" },
    // { src: "/database.svg", alt: "database" },
    { src: "/code.svg", alt: "code" },
    // { src: "/layers.svg", alt: "layers" },
    { src: "/proof.svg", alt: "proof" },
    { src: "/lock.svg", alt: "lock" },
    { src: "/midnight-icon.svg", alt: "compact" },
];

export const Navbar = () => {
  const router = useRouter();
  
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('user');
    router.push('/login'); // Redirect to the login page
  };

  return (
    
    <div className="flex items-center justify-between h-20 px-10 text-[16px]">
{/* 
      <Image
          src="/grad-bg.png"
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          alt="Background"
          quality={100} 
          priority 
          className="absolute -z-11" 
        ></Image> */}


      <div className="flex gap-x-20">
        <Image
          src="/midnight-logo-black.svg"
          alt="info"
          width={100}
          height={50}
        />
        <h1>SBHacks XI Hackathon demo - Blockchain Powered Voting Platform</h1>
      </div>

      <div className="flex gap-x-12" items-center>
        <Link
          href="https://github.com/Edwin-Yee/SBHacks-XI/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-x-2 cursor-pointer">
            <Image src="/file.svg" alt="info" width={12} height={12} />
            <p>Documentation</p>
          </button>
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-x-2 ">
              <Image src="/info.svg" alt="info" width={14} height={14} />
              <p>Features</p>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className=" h-30 flex gap-x-4 w-60  ">
              <div className="flex flex-col justify-between ">
                {icons.map((item, index) => (
                  <div  key={index} className="py-1">
                    <Image
                     
                      src={item.src}
                      alt={item.alt}
                      height={13}
                      width={13}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-between text-[13px] py-0.5 font-medium">
                {/* <p>UI: Animations & React</p>
                <p>Next.js 14 App router</p>
                <p>Reactive Database</p>
                <p>Reactive Programming</p>
                <p>Reactive Blockchain indexer</p> */}
                <p>Google Authentication</p>
                <p>Proof Server</p>
                <p>Zero Knowledge circuits</p>
                <p>Compact Smart Contracts</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
                

        <button onClick={handleLogout} className="bg-red-500 text-white text-sm py-1 px-2 rounded hover:bg-red-600 transition-colors">
          Logout
        </button>
        </div>

    </div>
  );
};

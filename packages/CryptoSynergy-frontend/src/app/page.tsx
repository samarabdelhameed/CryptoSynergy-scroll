import Image from "next/image";
import Link from "next/link";
import Chains from "@/app/components/data/chains.json";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function Home() {
  const Section1 = [
    {
      icon: "",
      name: "Effortless Crypto Investing",
      desc: "Unveil the potential of modern cryptocurrency portfolios with TokenKrafters. Here, simplicity converges with strategic investing, opening the doors of the crypto world to everyone. Built on expertly designed strategies",
    },
    {
      icon: "",
      name: "Strategically Designed Investments",
      desc: "Harness the expertise of seasoned industry professionals with TokenKrafters. Our cryptocurrency portfolios are meticulously crafted, grounded in extensive research and insights to ensure optimal performance and strategic growth.",
    },
    {
      icon: "",
      name: "Customized Cryptocurrency Investing",
      desc: "Empower your financial future with TokenKrafters. Personalize your investment journey by effortlessly tailoring your portfolio to match your unique financial aspirations and goals. Experience true flexibility and control over your crypto assets",
    },
  ];
  const Section2 = [
    {
      icon: "/icons/section-2/1/investment.png",
      name: "Diversified Portfolio",
      desc: "Choose from a variety of pre-made investment buckets or create your own for a personalized investment approach",
    },
    {
      icon: "/icons/section-2/1/nft.png",
      name: "NFT Ownership Proof",
      desc: "Every bucket purchase comes with an NFT, proving your ownership of the tokens. You can trade it or use it to withdraw your funds",
    },
    {
      icon: "/icons/section-2/1/raffle.png",
      name: "Exciting Raffle Rewards",
      desc: "Automatic entry into the raffle with every bucket purchase, giving you a chance to win rewards funded by the remaining investment money",
    },
    {
      icon: "/icons/section-2/1/withdrawal.png",
      name: "Flexible Withdrawals",
      desc: "Withdraw your invested funds at any time by redeeming the associated NFT, providing users with control over their investments",
    },
  ];
  return (
    <>
      <main className="flex min-h-[95vh] flex-col items-center justify-center p-6 pt-24 md:p-24">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-8">
            <div className="flex flex-col items-start justify-center gap-8">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className="text-6xl font-semibold md:text-7xl gradient-title">
                CryptoSynergy
                </h1>
                <h2 className="text-xl md:text-2xl">
                Your Portal to Advanced Crypto Trading: Simplifying Token Swaps and Enhancing Portfolio Diversification
                </h2>
              </div>

              <Link
                href={"/app"}
                className="px-8 py-3 text-lg font-semibold text-black rounded-lg shadow-lg bg-primary"
              >
               launch Crypto Synergy
              </Link>
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              {Chains.map((chain, i) => {
                return (
                  <div key={i}>
                    <Image
                      src={chain.logo}
                      alt={chain.name}
                      height={"40"}
                      width={"40"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-end w-full">
            <Image
              className=""
              src={""}
              alt=""
              height={"500"}
              width={"500"}
            />
          </div>
        </div>
      </main>
      <a href="#below" className="flex items-center justify-center">
        <ChevronDownIcon className="w-10 h-10 animate-bounce" />
      </a>
      <section
        className="flex flex-col items-center justify-center p-6 py-12 md:px-24 md:py-36"
        id="below"
      >
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 place-content-center place-items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl gradient-title md:text-5xl">
            Themed Crypto Portfolios: Tailored for Success            </h2>
            <h3 className="text-lg md:text-xl">
            Discover your ultimate destination for crypto investing with TokenKrafters. Our portfolios are thoughtfully aligned with specific themes, strategies, and objectives, crafted to navigate and capitalize on the dynamic crypto market
            </h3>
          </div>
          <div className="flex flex-col gap-20">
            {Section1.map((list, i) => {
              return (
                <div
                  className="flex flex-row items-center justify-center gap-6"
                  key={i}
                >
                  <Image
                    src={list.icon}
                    alt={list.name}
                    width={"100"}
                    height={"100"}
                  />

                  <div className="flex flex-col gap-1">
                    <h4 className="text-2xl font-medium text-primary">
                      {list.name}
                    </h4>
                    <h5 className="text-base">{list.desc}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-8 p-6 py-12 md:px-24 md:py-36">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl gradient-title md:text-4xl">
            There is a CryptoSynergy Bucket for everyone
          </h2>
          <p className="text-xl">
            Looking to start with a small investment or thinking of low
            volatililty? Choose from a diverse menu
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {Section2.map((card, k) => {
            return (
              <div
                key={k}
                className="flex flex-col items-center justify-start gap-4 p-6 text-center border border-white bg-secondary/50 rounded-xl md:text-left md:items-start"
              >
                <div className="w-24 h-24">
                  <Image
                    src={card.icon}
                    alt={card.name}
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <h3 className="text-xl font-medium text-primary">
                  {card.name}
                </h3>
                <h5 className="text-base font-light">{card.desc}</h5>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

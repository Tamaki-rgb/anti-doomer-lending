export default function BackgroundOrnaments() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="absolute left-[-10rem] top-[22rem] h-[30rem] w-[30rem] rounded-full bg-ember/[0.1] blur-3xl" />
      <div className="absolute bottom-[12rem] right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-gold/[0.07] blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_41%,rgba(200,155,60,0.06)_41.2%,transparent_41.6%,transparent_100%),linear-gradient(65deg,transparent_0%,transparent_54%,rgba(231,210,162,0.045)_54.2%,transparent_54.5%,transparent_100%)]" />
      <div className="absolute inset-x-[6%] top-32 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-x-[10%] bottom-40 h-px bg-gradient-to-r from-transparent via-parchment/12 to-transparent" />

      <div className="absolute left-[7%] top-[18%] hidden h-72 w-48 rounded-t-full border border-gold/10 bg-gradient-to-b from-parchment/[0.035] to-transparent lg:block" />
      <div className="absolute right-[8%] top-[30%] hidden h-80 w-52 rounded-t-full border border-gold/10 bg-gradient-to-b from-parchment/[0.03] to-transparent lg:block" />
      <div className="absolute left-[18%] bottom-[12%] hidden h-40 w-40 rotate-45 border border-gold/10 bg-obsidian/15 xl:block" />
      <div className="absolute right-[22%] bottom-[18%] hidden h-32 w-32 rotate-45 border border-parchment/10 bg-stone/20 xl:block" />
    </div>
  );
}

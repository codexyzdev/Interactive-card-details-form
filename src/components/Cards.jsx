import { motion } from "motion/react";

export default function Cards({ watch }) {
  return (
    <section className="relative h-[240px] w-[375px]">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="card-back absolute right-6 top-8 w-64 drop-shadow-lg lg:-right-16 lg:top-60 lg:w-full"
      >
        <span className="absolute right-8 top-[57px] text-sm text-white lg:right-10 lg:top-[90px]">
          {!watch("cvc") ? "000" : watch("cvc")}
        </span>
        <img src="/images/bg-card-back.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="card-front  absolute -bottom-5 left-6 w-64 drop-shadow-lg lg:bottom-0 lg:left-0  lg:top-0 lg:w-full"
      >
        <img src="/images/bg-card-front.png" alt="" />
        <div className="absolute left-3 top-3 size-9 rounded-full bg-white lg:left-8 lg:top-4">
          {" "}
        </div>
        <div className="absolute left-14 top-[22px] size-4 rounded-full border border-white lg:left-20 lg:top-7">
          {" "}
        </div>
        <p className="absolute left-4 top-[70px] font-semibold tracking-widest text-white lg:left-8 lg:top-28 lg:text-xl">
          {!watch("cardNumer")
            ? "0000 0000 0000 0000"
            : watch("cardNumer").replace(/([0-9]{4})/g, "$1 ")}
        </p>
        <span className="absolute left-48 top-[110px] text-xs uppercase tracking-widest text-white lg:left-72 lg:top-[165px] lg:text-base">
          {!watch("mm") ? "00" : watch("mm")}/
          {!watch("yy") ? "00" : watch("yy")}
        </span>
        <p className="absolute left-4 top-[110px] flex gap-16 text-xs uppercase tracking-widest text-white lg:left-8 lg:top-[165px] lg:text-base">
          <span>{!watch("name") ? "  Jane Appleseed" : watch("name")}</span>
        </p>
      </motion.div>
    </section>
  );
}

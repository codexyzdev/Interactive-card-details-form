import { useState } from "react";
import { useForm } from "react-hook-form";
export default function CardContainer() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cardNumer: "",
      cvc: "",
      mm: "",
      yy: "",
    },
  });

  return (
    <div className="grid-cols-2 lg:grid lg:min-h-screen lg:place-content-center">
      <section className="relative h-[240px] w-[375px]">
        <div className="card-back absolute right-6 top-8 w-64 lg:-right-16 lg:top-60 lg:w-full">
          <span className="absolute right-8 top-[57px] text-sm text-white lg:right-10 lg:top-[90px]">
            {!watch("cvc") ? "000" : watch("cvc")}
          </span>
          <img src="/images/bg-card-back.png" alt="" />
        </div>
        <div className="card-front  absolute -bottom-5 left-6 w-64 lg:bottom-0 lg:left-0  lg:top-0 lg:w-full">
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
        </div>
      </section>

      <form
        className="relative mt-20 px-7 lg:w-96"
        onSubmit={handleSubmit((data) => {
          setDone(true);
        })}
      >
        <div className="relative flex flex-col">
          <label
            htmlFor="cardholdername"
            className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
          >
            Cardholder Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="os rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
          />
          <p className="absolute -bottom-5 text-xs text-RedInputErrors">
            {errors.name?.message}
          </p>
        </div>
        <div className="relative flex flex-col">
          <label
            htmlFor="cardnumber"
            className="mb-2 mt-6 text-xs font-medium uppercase text-VeryDarkViolet"
          >
            Card Number
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            {...register("cardNumer", {
              required: "Can't be blank",
              validate: (value) => {
                const pattern = /^[0-9]+$/;
                if (!pattern.test(value)) {
                  return "Wrong format, numbert only";
                }
                if (value.length !== 16) {
                  return "Incorrect length (16 digits)";
                }
              },
            })}
            className="rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
          />
          <p className="absolute -bottom-5 text-xs text-RedInputErrors">
            {errors.cardNumer?.message}
          </p>
        </div>
        <div className="mt-6  flex gap-3">
          <div className="flex flex-col">
            <label
              className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
              htmlFor="expdate"
            >
              Exp. Date (MM/YY)
            </label>
            <div className="relative flex gap-1">
              <input
                type="text"
                placeholder="MM"
                size="2"
                {...register("mm", {
                  required: "Can't be blank",
                  validate: (value) => {
                    const pattern = /^[0-9]+$/;
                    const patternMM = /^(0[1-9]|1[0-2])/;
                    if (!pattern.test(value)) {
                      return "Numbert only";
                    }
                    if (!patternMM.test(value)) {
                      return "Invalid month";
                    }
                  },
                })}
                maxLength="2"
                className="w-full rounded-md border border-LightGrayishViolet p-2 outline-l"
              />
              <input
                type="text"
                placeholder="YY"
                {...register("yy", {
                  required: "Can't be blank",
                  validate: (value) => {
                    const pattern = /^[0-9]+$/;
                    const patternYY = /^(2[4-9]|3[0-2])$/;
                    if (!pattern.test(value)) {
                      return "Numbert only";
                    }
                    if (!patternYY.test(value)) {
                      return "Invalid year";
                    }
                  },
                })}
                size="2"
                maxLength="2"
                className="w-full rounded-md border border-LightGrayishViolet p-2 outline-l"
              />
              <p className="absolute -bottom-5 text-xs text-RedInputErrors">
                {errors.mm?.message || errors.yy?.message}
              </p>
            </div>
          </div>
          <div className="relative flex flex-1 flex-col">
            <label
              className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
              htmlFor="cvc"
            >
              CVC
            </label>
            <input
              type="text"
              placeholder="e.g. 123"
              size="3"
              {...register("cvc", {
                required: "Can't be blank",
                validate: (value) => {
                  const pattern = /^[0-9]+$/;
                  const patternMM = /^(0[1-9]|1[0-2])/;
                  if (!pattern.test(value)) {
                    return "Numbert only";
                  }
                  if (value.length !== 3) {
                    return "Incorrect length (3 digits)";
                  }
                },
              })}
              maxLength="3"
              className="rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
            />
            <p className="absolute -bottom-5 text-xs text-RedInputErrors">
              {errors.cvc?.message}
            </p>
          </div>
        </div>
        <button
          className="mt-8 w-full rounded-md bg-VeryDarkViolet py-3 font-medium text-white"
          type="submit"
        >
          Confirm
        </button>
        {done ? (
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center bg-white px-7">
            <img
              src="/images/icon-complete.svg"
              alt="icon-complete"
              className="mb-8 size-20"
            />
            <h2 className="mb-4 text-4xl uppercase text-r">Thank you!</h2>
            <p>We've added your card details</p>
            <button
              className=" mt-8 w-full rounded-md bg-VeryDarkViolet py-3 font-medium text-white"
              type="reset"
              onClick={(e) => setDone(false)}
            >
              Continue
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

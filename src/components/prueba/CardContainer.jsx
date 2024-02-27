import { useState } from "react";
export default function CardContainer() {
  const [data, setData] = useState({
    name: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const handleName = (e) => {
    setData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleCardNumber = (e) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/\s/g, "") // Remove spaces
      .replace(/\D/g, "") // Remove non-digits
      .replace(/([0-9]{4})/g, "$1 ") // Add space after every 4 digits
      .trim(); // Trim leading/trailing spaces

    setData((prevState) => ({
      ...prevState,
      cardNumber: formattedValue,
    }));
  };
  const handleYY = (e) => {
    setData((prevState) => ({
      ...prevState,
      yy: e.target.value,
    }));
  };
  const handleMM = (e) => {
    setData((prevState) => ({
      ...prevState,
      mm: e.target.value,
    }));
  };
  const handleCVC = (e) => {
    setData((prevState) => ({
      ...prevState,
      cvc: e.target.value,
    }));
  };

  return (
    <>
      <section className="relative">
        <img src="/images/bg-main-mobile.png" alt="" />
        <div className="card-back absolute right-6 top-8 w-64">
          <span className="absolute right-8 top-[57px] text-sm text-white">
            {!data.cvc ? "000" : data.cvc}
          </span>
          <img src="/images/bg-card-back.png" alt="" />
        </div>
        <div className="card-front  absolute -bottom-5 left-6 w-64">
          <img src="/images/bg-card-front.png" alt="" />
          <div className="absolute left-3 top-3 size-9 rounded-full bg-white">
            {" "}
          </div>
          <div className="absolute left-14 top-[22px] size-4 rounded-full border border-white">
            {" "}
          </div>
          <p className="absolute left-4 top-[70px] font-semibold tracking-widest text-white">
            {!data.cardNumber ? "0000 0000 0000 0000" : data.cardNumber}
          </p>
          <span className="absolute left-48 top-[110px] text-xs uppercase tracking-widest text-white">
            {!data.mm ? "00" : data.mm}/{!data.yy ? "00" : data.yy}
          </span>
          <p className="absolute left-4 top-[110px] flex gap-16 text-xs uppercase tracking-widest text-white">
            <span>{!data.name ? "Jane Appleseed" : data.name}</span>
          </p>
        </div>
      </section>

      <form className="mt-20 px-7">
        <fieldset>
          <div className="flex flex-col">
            <label
              htmlFor="cardholdername"
              className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholdername"
              name="cardholdername"
              placeholder="e.g. Jane Appleseed"
              onChange={handleName}
              required
              value={data.name}
              className="os rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cardnumber"
              className="mb-2 mt-4 text-xs font-medium uppercase text-VeryDarkViolet"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              onChange={handleCardNumber}
              value={data.cardNumber}
              placeholder="e.g. 1234 5678 9123 0000"
              maxLength={19}
              required
              className="rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
            />
          </div>
          <div className="mt-4  flex gap-3">
            <div className="flex flex-col">
              <label
                className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
                htmlFor="expdate"
              >
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="expdate"
                  name="expdate"
                  placeholder="MM"
                  size="2"
                  onChange={handleMM}
                  maxLength="2"
                  required
                  className="w-full rounded-md border border-LightGrayishViolet p-2 outline-l"
                />
                <input
                  type="text"
                  id="expyear"
                  onChange={handleYY}
                  name="expyear"
                  placeholder="YY"
                  size="2"
                  maxLength="2"
                  required
                  className="w-full rounded-md border border-LightGrayishViolet p-2 outline-l"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <label
                className="mb-2 text-xs font-medium uppercase text-VeryDarkViolet"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="e.g. 123"
                onChange={handleCVC}
                size="3"
                maxLength="3"
                required
                className="rounded-md border border-LightGrayishViolet py-2 pl-4 outline-l"
              />
            </div>
          </div>
        </fieldset>
        <button
          className="mt-6 w-full rounded-md bg-VeryDarkViolet py-3 font-medium text-white"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </>
  );
}

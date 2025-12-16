import { useEffect, useState } from "react";
import { ShoppingCart, Settings } from "lucide-react";
import dealImg from "../../assets/deal.jpeg";

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 5,
    minutes: 12,
    seconds: 38,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--,
            minutes = 59;
          seconds = 59;

        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      })
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
      style ={{ backgroundImage: `url(${dealImg})`}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div className="z-0 text-center text--white px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Hurry Up! Get Up to 50% Off
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-10">
          Step into summer with sun-ready styles at can’t-miss prices.
        </p>
        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { label: "day", value: timeLeft.days },
            { label: "hour", value: timeLeft.hours },
            { label: "minute", value: timeLeft.minutes },
            { label: "second", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index}
              className="bg-white text-black rounded-xl px-6 py-4 w-24 shadow-lg">
              <p className="text-3xl font-extrabold">
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="text-xs font-semibold text-gray-600">
                {item.label}
              </span>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

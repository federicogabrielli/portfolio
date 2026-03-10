import { mySocials } from "../components/constants";
const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-2 py-2 text-sm text-neutral-400 c-space">

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="flex justify-center gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              className="w-5 h-5 opacity-70 hover:opacity-100 transition"
              alt={social.name}
            />
          </a>
        ))}
      </div>

    </section>
  );
};

export default Footer;
import briefcase from "../assets/GRC_Elements/Briefcase_icon_circle.png";
import clipboard from "../assets/GRC_Elements/Clipboard_graphic_circle.png";
import coin from "../assets/GRC_Elements/Coin_icon_circle.png";
import bullhorn from "../assets/GRC_Elements/Bullhorn_icon.png";
import bell from "../assets/GRC_Elements/Bell_icon_circle.png";
import mouseIcon from "../assets/GRC_Elements/Mouse_icon_circle.png";
import WomanLaptop from "../assets/GRC_Elements/Woman_Laptop_photo_gray_bkgd.jpg";

type Benefit = {
  title: string;
  icon: string;
  desc: string;
};

const benefits: Benefit[] = [
  {
    title: "Expert Guidance",
    icon: briefcase,
    desc: "Access to industry-leading SBA lending expertise and best practices.",
  },
  {
    title: "Faster Approvals",
    icon: clipboard,
    desc: "Accelerated loan processing and approvals for your clients.",
  },
  {
    title: "Increased Revenue",
    icon: coin,
    desc: "Maximize fee income and portfolio growth with proven strategies.",
  },
  {
    title: "Compliance Confidence",
    icon: bullhorn,
    desc: "Stay ahead of regulatory changes and SBA requirements.",
  },
  {
    title: "Ongoing Support",
    icon: bell,
    desc: "Continuous advisory and training for your team’s success.",
  },
  {
    title: "Seamless Integration",
    icon: mouseIcon,
    desc: "Smooth adoption of new technology and processes.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-white"
    >
      {/* Full-screen background image */}
      <img
        src={WomanLaptop}
        alt="Benefits Visual"
        className="absolute inset-0 w-full h-full object-cover object-right z-0"
        style={{ minHeight: "100vh" }}
      />
      {/* Content on left side, no overlay */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col md:flex-row items-center justify-start gap-12 px-4 min-h-screen">
        <div className="flex-1 flex flex-col gap-8 justify-center items-start px-8 py-12 md:max-w-[50%] bg-white/90 md:bg-transparent">
          <h2 className="text-[36px] md:text-4xl font-bold bg-gradient-to-r from-red-800 via-red-500 to-red-700 bg-clip-text text-transparent mb-10 text-left mt-0 drop-shadow">
            Benefits of Partnering With Us
          </h2>
          <div className="relative h-1 w-32 sm:w-40 md:w-52 bg-transparent overflow-hidden mb-10">
            <div className="h-full bg-red-600 w-full line-draw origin-left" />
          </div>
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center shadow-md">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-red-800 mb-1">
                  {benefit.title}
                </div>
                <div className="text-white text-base">{benefit.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Spacer for right side on desktop */}
        <div className="hidden md:block flex-1" />
      </div>
    </section>
  );
};

export default Benefits;

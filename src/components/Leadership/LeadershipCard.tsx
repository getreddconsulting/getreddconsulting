import MilaPhoto from "../../assets/GRC_Elements/Mila_Esquerdo_photo.png";
import BriefcaseIcon from "../../assets/GRC_Elements/Briefcase_icon_circle.png";


const LeadershipCard = ({ onReadMore }: { onReadMore: () => void }) => (
  <div className="w-full bg-gray-50 ">
    <div className="text-center max-w-4xl mx-auto my-12 p-8">
      <h2 className="text-[36px] md:text-4xl font-bold bg-gradient-to-r from-red-800 via-red-500 to-red-700 bg-clip-text text-transparent mb-4 drop-shadow text-center">
        Leadership
      </h2>
      <div className="relative h-0.5 w-32 sm:w-40 md:w-52 bg-transparent overflow-hidden mx-auto mb-6">
        <div className="h-full bg-red-600 w-full line-draw origin-left" />
      </div>

      <div
        id="blog"
        className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-8 gap-8 max-w-4xl mx-auto my-12 relative overflow-visible"
      >
        {/* Left: Icon and Photo side by side */}
        <div className="relative flex-shrink-0 flex flex-row items-center justify-center gap-4 md:gap-6">
          <div className="relative">
            <img
              src={MilaPhoto}
              alt="Liudmila Esquerdo"
              className="w-72 h-72 object-cover rounded-full border-8 border-white shadow-lg"
            />
            <div className="absolute -top-6 -left-6 z-10">
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg border-4 border-white">
                <img
                  src={BriefcaseIcon}
                  alt="Expert"
                  className="w-16 h-16 mt-3 mr-1 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center  lg:items-start">
          <div className="flex items-center mb-2">
            <h2 className="text-4xl font-bold text-black mr-2">
              The <span className="text-red-700">Expert</span>
            </h2>
          </div>
          <div className="flex flex-col lg:items-start gap-2 mb-2">
            <span className="font-bold text-lg text-gray-900">
              Liudmila Esquerdo,
            </span>
            <span className="text-gray-700 italic">
              Founder & CEO of Get Redd Consulting™
            </span>
          </div>
          <button
            className="mt-4 px-6 py-2 rounded bg-red-700 text-white font-semibold shadow hover:bg-red-800 transition text-base"
            onClick={onReadMore}
          >
            Continue Reading
          </button>
        </div>
      </div>
    </div>
    <div>
    
      </div>
  </div>
);

export default LeadershipCard;

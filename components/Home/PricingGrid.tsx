"use client";

interface PricingGridProps {
  selectedPrice: number;
  onPriceSelect: (price: number) => void;
}

export default function PricingGrid({ selectedPrice, onPriceSelect }: PricingGridProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto -mt-[70px] min-[600px]:mt-5 lg:-mt-[160px] gap-[26.033px] scale-[0.5] min-[600px]:scale-[0.9] md:scale-100">
      {/* Row 1 */}
      <div className="flex flex-row items-center justify-center gap-[26.033px]">
        {/* Card 1 - 100 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(100)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 100 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  100
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              18%off
            </span>
          </div>
        </div>

        {/* Card 2 - 250 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(250)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 250 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  250
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              40%off
            </span>
          </div>
        </div>

        {/* Card 3 - 500 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(500)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 500 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  500
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              52%off
            </span>
          </div>
        </div>

        {/* Card 4 - 1000 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(1000)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 1000 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  1000
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              63%off
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row items-center justify-center gap-[26.033px]">
        {/* Card 5 - 2500 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(2500)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 2500 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  2500
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              68%off
            </span>
          </div>
        </div>

        {/* Card 6 - 5000 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(5000)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 5000 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  5000
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              70%off
            </span>
          </div>
        </div>

        {/* Card 7 - 10000 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(10000)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 10000 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  10000
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              83%off
            </span>
          </div>
        </div>

        {/* Card 8 - 20000 */}
        <div 
          className="relative cursor-pointer w-[137.975px] h-[141.88px] rounded-[26.033px] bg-[rgba(255,255,255,0.1)]"
          onClick={() => onPriceSelect(20000)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-start p-0 gap-[15.62px]">
            <div className="relative w-[137.975px] h-[83.306px] rounded-[26.033px] mt-0">
              <div 
                className="absolute inset-0 rounded-[26.033px]"
                style={{
                  background: selectedPrice === 20000 
                    ? "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <span className="font-inter font-semibold text-white text-center text-[35px] leading-[28.636px]">
                  20000
                </span>
              </div>
            </div>
            <span className="font-open-sans font-normal text-white text-center text-[23.43px] leading-[28.636px] w-[137.975px]">
              85%off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

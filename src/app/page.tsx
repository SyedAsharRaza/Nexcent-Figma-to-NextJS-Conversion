// src/app/page.tsx
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
      <div className="bg-[#F5F7FA] w-full flex flex-col justify-around items-center gap-16">
        <div className="w-full flex flex-row justify-around items-center pt-2">
        <div className="flex flex-row items-center gap-1">
          <img src="/Icon.png" alt="" className="w-auto h-[24px]"/>
          <span className="font-extrabold text-[26px] tracking-tighter leading-none">Nexcent</span>
        </div>
        <div className="flex flex-row items-center gap-8">
          <span className="tracking-tight font-medium">Home</span>
          <span className="tracking-tight font-medium">Service</span>
          <span className="tracking-tight font-medium">Feature</span>
          <span className="tracking-tight font-medium">Product</span>
          <span className="tracking-tight font-medium">Testimonial</span>
          <span className="tracking-tight font-medium">FAQ</span>
        </div>
        <div className="flex flex-row items-center gap-8">
          <span className="text-[#4CAF4F] font-extralight tracking-tight text-sm">Login</span>
          <button className="bg-[#4CAF4F] px-5 py-2.5 rounded-md text-white">Sign up</button>
        </div>
        </div>
        <div className="flex flex-col gap-10 items-center pb-4">
        <div className="flex flex-row justify-between items-center gap-20 pb-10 px-2">
          <div className="flex flex-col items-start">
            <span className="text-[#4D4D4D] font-bold text-4xl tracking-tighter">Lessons and insights</span>
            <span className="text-[#4CAF4F] font-bold text-4xl stroke-2 stroke-black tracking-tighter">from 8 years</span>
            <span className="text-[#717171] text-sm mt-2">Where to grow your business as a photographer: site or social media?</span>
            <button className="bg-[#4CAF4F] py-2 px-5 rounded-sm mt-3 text-white text-sm">Register</button>
          </div>
          <img src="/hero_section_image.png" alt="" className="w-auto h-[390]"/>
        </div>
        <div className="flex flex-row gap-2">
          <div className="bg-[#4CAF4F] rounded-full w-2 h-2"></div>
          <div className="bg-[#4CAF4F]/30 rounded-full w-2 h-2"></div>
          <div className="bg-[#4CAF4F]/30 rounded-full w-2 h-2"></div>
        </div>
        </div>
      </div>
      <div className="pt-6 flex flex-col items-center">
        <span className="text-black font-extrabold tracking-tighter text-xl">Our Clients</span>
        <span className="text-[#717171] tracking-tight font-thin text-[12px] pt-1">We have been working with some Fortune 500+ clients</span>
      </div>
      </div>
    </main>
  );
}
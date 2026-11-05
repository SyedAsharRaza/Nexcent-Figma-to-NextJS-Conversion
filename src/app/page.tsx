// src/app/page.tsx


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
        <div className="w-full flex flex-row py-8 px-6 items-center justify-around">
          <img src="/logo.png" alt="" />
          <img src="/logo2.png" alt="" />
          <img src="/logo3.png" alt="" />
          <img src="/logo4.png" alt="" />
          <img src="/logo5.png" alt="" />
          <img src="/logo.png" alt="" />
          <img src="/logo2.png" alt="" />
        </div>
        <h2 className="pt-8 text-[#4D4D4D] font-bold leading-none text-2xl">Manage your entire community</h2>
        <h2 className="text-[#4D4D4D] font-bold text-2xl">in a single system</h2>
        <span className="text-[#717171] text-xs pt-2">Who is Nextcent suitable for?</span>
        <div className="pt-6 px-8 flex flex-row w-full items-center justify-around">
          <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]">
            <img src="/membership.png" alt="" />
            <span className="text-[#4D4D4D] font-bold text-xl pt-3 leading-7">Membership</span>
            <span className="leading-none text-[#4D4D4D] font-bold text-xl">Organization</span>
            <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)] ">
            <img src="/national.png" alt="" />
            <span className="text-[#4D4D4D] font-bold text-xl pt-3 leading-7">Membership</span>
            <span className="leading-none text-[#4D4D4D] font-bold text-xl">Organization</span>
            <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]">
            <img src="/clubs.png" alt="" />
            <span className="leading-7 text-[#4D4D4D] font-bold text-xl pt-3">Membership</span>
            <span className="leading-none text-[#4D4D4D] font-bold text-xl">Organization</span>
            <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
        <div className="flex flex-row pt-20 items-center justify-center w-full px-30">
          <img className="max-w-100" src="/frame35.png" alt="" />
          <div className="max-w-150 flex flex-col items-start mb-16">
            <span className="text-[#4D4D4D] font-bold text-2xl leading-7">
              The unseen of spending three <br />years at Pixelgrade
            </span>
            <p className="text-wrap text-xs text-[#717171] pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="mt-4 px-4 py-2 rounded-sm text-white text-sm bg-[#4CAF4F]">Learn More</button>
          </div>
        </div>
        <div className="flex flex-row bg-[#F5F7FA] items-center justify-center gap-60 w-full px-16 py-12">
          <div className="flex flex-col">
            <span className="text-[#4D4D4D] text-xl font-bold">Helping a local</span>
            <span className="text-[#4CAF4F] text-xl font-bold">business reinvent itself</span>
            <span className="text-xs text-gray-900 mt-2">We reached here with our hard work and dedication</span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-16">
              <div className="flex flex-row items-center gap-2">
                <img src="/member_symbol.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-[#4D4D4D] text-xl font-bold">2,245,341</span>
                  <span className="text-[#717171] text-xs">Members</span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src="/member_symbol.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-[#4D4D4D] text-xl font-bold">2,245,341</span>
                  <span className="text-[#717171] text-xs">Members</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-16">
              <div className="flex flex-row items-center gap-2">
                <img src="/member_symbol.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-[#4D4D4D] text-xl font-bold">2,245,341</span>
                  <span className="text-[#717171] text-xs">Members</span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src="/member_symbol.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-[#4D4D4D] text-xl font-bold">2,245,341</span>
                  <span className="text-[#717171] text-xs">Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
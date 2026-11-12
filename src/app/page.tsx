// src/app/page.tsx

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="flex flex-col">
        <div className="bg-[#F5F7FA] w-full flex flex-col justify-around items-center gap-10 lg:gap-16">
          {/* Navbar */}
          <div className="w-full flex flex-wrap lg:flex-row justify-between lg:justify-around items-center pt-4 lg:pt-2 px-4 lg:px-0 gap-4">
            <div className="flex flex-row items-center gap-1">
              <img src="/Icon.png" alt="" className="w-auto h-[24px]" />
              <span className="font-extrabold text-[26px] tracking-tighter leading-none">
                Nexcent
              </span>
            </div>
            <div className="hidden md:flex flex-row items-center gap-6 lg:gap-8">
              <span className="tracking-tight font-medium">Home</span>
              <span className="tracking-tight font-medium">Service</span>
              <span className="tracking-tight font-medium">Feature</span>
              <span className="tracking-tight font-medium">Product</span>
              <span className="tracking-tight font-medium">Testimonial</span>
              <span className="tracking-tight font-medium">FAQ</span>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-8">
              <span className="text-[#4CAF4F] font-extralight tracking-tight text-sm">
                Login
              </span>
              <button className="bg-[#4CAF4F] px-4 lg:px-5 py-2 lg:py-2.5 rounded-md text-white text-sm lg:text-base">
                Sign up
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-10 items-center pb-4 px-4 lg:px-0">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-20 pb-6 lg:pb-10 px-2">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="text-[#4D4D4D] font-bold text-3xl lg:text-4xl tracking-tighter">
                  Lessons and insights
                </span>
                <span className="text-[#4CAF4F] font-bold text-3xl lg:text-4xl stroke-2 stroke-black tracking-tighter">
                  from 8 years
                </span>
                <span className="text-[#717171] text-sm mt-2">
                  Where to grow your business as a photographer: site or social
                  media?
                </span>
                <button className="bg-[#4CAF4F] py-2 px-5 rounded-sm mt-3 text-white text-sm">
                  Register
                </button>
              </div>
              <img
                src="/hero_section_image.png"
                alt=""
                className="w-full max-w-[300px] lg:max-w-none lg:w-auto h-auto lg:h-[390px]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-[#4CAF4F] rounded-full w-2 h-2"></div>
              <div className="bg-[#4CAF4F]/30 rounded-full w-2 h-2"></div>
              <div className="bg-[#4CAF4F]/30 rounded-full w-2 h-2"></div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center">
          <span className="text-black font-extrabold tracking-tighter text-xl">
            Our Clients
          </span>
          <span className="text-[#717171] tracking-tight font-thin text-[12px] pt-1 text-center px-4">
            We have been working with some Fortune 500+ clients
          </span>
          <div className="w-full flex flex-wrap lg:flex-row py-8 px-6 items-center justify-center lg:justify-around gap-8 lg:gap-0">
            <img src="/logo.png" alt="" />
            <img src="/logo2.png" alt="" />
            <img src="/logo3.png" alt="" />
            <img src="/logo4.png" alt="" />
            <img src="/logo5.png" alt="" />
            <img src="/logo.png" alt="" />
            <img src="/logo2.png" alt="" />
          </div>

          <h2 className="pt-8 text-[#4D4D4D] font-bold leading-none text-xl lg:text-2xl text-center px-4">
            Manage your entire community
          </h2>
          <h2 className="text-[#4D4D4D] font-bold text-xl lg:text-2xl text-center px-4">
            in a single system
          </h2>
          <span className="text-[#717171] text-xs pt-2">
            Who is Nextcent suitable for?
          </span>

          <div className="pt-6 px-4 lg:px-8 flex flex-col md:flex-row w-full items-center justify-around gap-8 md:gap-4">
            <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)] p-4">
              <img src="/membership.png" alt="" />
              <span className="text-[#4D4D4D] font-bold text-xl pt-3 leading-7">
                Membership
              </span>
              <span className="leading-none text-[#4D4D4D] font-bold text-xl">
                Organization
              </span>
              <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)] p-4">
              <img src="/national.png" alt="" />
              <span className="text-[#4D4D4D] font-bold text-xl pt-3 leading-7">
                Membership
              </span>
              <span className="leading-none text-[#4D4D4D] font-bold text-xl">
                Organization
              </span>
              <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="flex flex-col items-center max-w-50 shadow-[0_2px_4px_0_rgba(171,190,209,0.2)] p-4">
              <img src="/clubs.png" alt="" />
              <span className="leading-7 text-[#4D4D4D] font-bold text-xl pt-3">
                Membership
              </span>
              <span className="leading-none text-[#4D4D4D] font-bold text-xl">
                Organization
              </span>
              <p className="text-xs text-center text-wrap text-[#717171] pt-2 leading-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row pt-12 lg:pt-20 items-center justify-center w-full px-6 lg:px-30 gap-8 lg:gap-0">
            <img className="w-full max-w-[320px] lg:max-w-100" src="/frame35.png" alt="" />
            <div className="max-w-150 flex flex-col items-center text-center lg:items-start lg:text-left mb-8 lg:mb-16">
              <span className="text-[#4D4D4D] font-bold text-2xl leading-7">
                The unseen of spending three <br className="hidden lg:inline" />
                years at Pixelgrade
              </span>
              <p className="text-wrap text-xs text-[#717171] pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button className="mt-4 px-4 py-2 rounded-sm text-white text-sm bg-[#4CAF4F]">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-[#F5F7FA] items-center justify-center gap-10 lg:gap-60 w-full px-6 lg:px-16 py-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-[#4D4D4D] text-xl font-bold">
                Helping a local
              </span>
              <span className="text-[#4CAF4F] text-xl font-bold">
                business reinvent itself
              </span>
              <span className="text-xs text-gray-900 mt-2">
                We reached here with our hard work and dedication
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex flex-row items-center gap-2">
                  <img src="/member_symbol.png" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[#4D4D4D] text-xl font-bold">
                      2,245,341
                    </span>
                    <span className="text-[#717171] text-xs">Members</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src="/member_symbol.png" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[#4D4D4D] text-xl font-bold">
                      2,245,341
                    </span>
                    <span className="text-[#717171] text-xs">Members</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex flex-row items-center gap-2">
                  <img src="/member_symbol.png" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[#4D4D4D] text-xl font-bold">
                      2,245,341
                    </span>
                    <span className="text-[#717171] text-xs">Members</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src="/member_symbol.png" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[#4D4D4D] text-xl font-bold">
                      2,245,341
                    </span>
                    <span className="text-[#717171] text-xs">Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 px-6 lg:px-0 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center justify-center">
            <img
              src="/mobileappgirl.png"
              alt=""
              className="w-full max-w-[320px] lg:max-w-none lg:w-auto"
            />
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left max-w-140 gap-4 lg:gap-6">
              <span className="font-bold text-2xl lg:text-3xl text-[#4D4D4D]">
                How to design your site footer like we did
              </span>
              <p className="text-[#717171] text-[14px]">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero ultrices
                mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
                dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
                ultricies, non aliquet urna tincidunt. Integer in nisi eget
                nulla commodo faucibus efficitur quis massa. Praesent felis est,
                finibus et nisi ac, hendrerit venenatis libero. Donec
                consectetur faucibus ipsum id gravida.
              </p>
              <button className="mt-4 px-4 py-2 rounded-sm text-white text-sm bg-[#4CAF4F]">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-[#F5F7FA] py-8 lg:py-6 px-6 lg:px-16 w-full items-center justify-center gap-8 lg:gap-12">
            <img
              src="/teslaimage.png"
              alt=""
              className="w-full max-w-[280px] lg:max-w-none lg:w-auto"
            />
            <div className="flex flex-col gap-4 max-w-180 items-center text-center lg:items-start lg:text-left">
              <p className="text-[14px] lg:text-[16px] text-[#717171]">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <span className="text-[#4CAF4F] font-semibold text-[20px]">
                Tim Smith
              </span>
              <span className="text-[#89939E] text-[16px]">
                British Dragon Boat Racing Association
              </span>
              <div className="flex flex-wrap lg:flex-row gap-6 lg:gap-8 items-center justify-center lg:justify-start">
                <img
                  src="/Logo.png"
                  alt=""
                  className="filter sepia saturate-200 hue-rotate-270"
                />
                <img src="/Logo2.png" alt="" className="" />
                <img src="/Logo3.png" alt="" className="" />
                <img src="/Logo4.png" alt="" className="" />
                <img src="/Logo5.png" alt="" className="" />
                <img src="/Logo6.png" alt="" className="" />
                <span className="text-[#4CAF4F] text-[18px] lg:text-[20px] tracking-tighter">
                  Meet all customers
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 pb-24 lg:pb-30 px-6 lg:px-16 flex flex-col items-center">
            <span className="text-[#4D4D4D] font-bold text-2xl text-center">
              Caring is the new marketing
            </span>
            <p className="pt-2 text-[14px] lg:text-[16px] text-[#717171] max-w-140 text-center">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
            <div className="flex flex-col lg:flex-row pt-6 lg:pt-3 justify-center items-center gap-24 lg:gap-8">
              <div className="relative max-w-80">
                <img src="/uncleimage.png" alt="" />
                <div className="flex flex-col px-2 py-2 rounded-md shadow-2xl shadow-grey gap-4 items-center w-3/4 absolute bg-[#F5F7FA] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                  <p className="text-center text-[#717171] font-semibold">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </p>
                  <span className="text-[#4CAF4F] font-semibold">Readmore</span>
                </div>
              </div>
              <div className="relative max-w-80">
                <img src="/uncleimage.png" alt="" />
                <div className="flex flex-col px-2 py-2 rounded-md shadow-2xl shadow-grey gap-4 items-center w-3/4 absolute bg-[#F5F7FA] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                  <p className="text-center text-[#717171] font-semibold">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </p>
                  <span className="text-[#4CAF4F] font-semibold">Readmore</span>
                </div>
              </div>
              <div className="relative max-w-80">
                <img src="/uncleimage.png" alt="" />
                <div className="flex flex-col px-2 py-2 rounded-md shadow-2xl shadow-grey gap-4 items-center w-3/4 absolute bg-[#F5F7FA] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                  <p className="text-center text-[#717171] font-semibold">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </p>
                  <span className="text-[#4CAF4F] font-semibold">Readmore</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 px-6 lg:px-12 flex flex-col w-full items-center bg-[#F5F7FA] gap-4">
          <span className="text-[#263238] font-bold text-2xl lg:text-4xl max-w-140 text-center">
            Pellentesque suscipit fringilla libero eu.
          </span>
          <button className="px-6 py-2 rounded-sm text-white text-sm bg-[#4CAF4F]">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
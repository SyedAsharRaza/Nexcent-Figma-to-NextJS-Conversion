// src/components/ProfileCard.tsx

// 1. Define the shape of the data the component expects
interface ProfileCardProps {
  name: string;
  role: string;
  location: string;
  projectsCount: number;
  followersCount: string;
  followingCount: number;
  isOnline?: boolean; // The '?' means optional!
}

// 2. Destructure props inside the function arguments
export default function ProfileCard({
  name,
  role,
  location,
  projectsCount,
  followersCount,
  followingCount,
  isOnline = true, // Default value if not passed
}: ProfileCardProps) {
  // Extract initials from name (e.g., "Ashar Raza" -> "AR")
  const initials = name.split(" ").map((word) => word[0]).join("");

  return (
    <div className="w-full max-w-md bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
      {/* Top Section */}
      <div className="flex flex-col items-center relative mb-4">
        {isOnline && (
          <span className="absolute top-0 left-0 text-emerald-400 text-xs font-semibold bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800/50 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Online
          </span>
        )}

        <div className="w-20 h-20 rounded-full border-2 border-slate-700 bg-indigo-600 flex items-center justify-center text-xl font-bold mt-6 shadow-md">
          {initials}
        </div>

        <h2 className="text-white text-xl font-bold mt-3">{name}</h2>
        <p className="text-slate-400 text-sm">{role}</p>
        <p className="text-slate-500 text-xs mt-1">📍 {location}</p>
      </div>

      {/* Stats Box */}
      <div className="flex bg-slate-800/60 rounded-xl p-3 border border-slate-700/50 my-4">
        <div className="w-full flex flex-col items-center border-r border-slate-700/50">
          <p className="text-lg font-bold text-white">{projectsCount}</p>
          <p className="text-xs text-slate-400">Projects</p>
        </div>
        <div className="w-full flex flex-col items-center border-r border-slate-700/50">
          <p className="text-lg font-bold text-white">{followersCount}</p>
          <p className="text-xs text-slate-400">Followers</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-lg font-bold text-white">{followingCount}</p>
          <p className="text-xs text-slate-400">Following</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-lg border border-slate-700 transition-colors">
          Message
        </button>
        <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors">
          Follow
        </button>
      </div>
    </div>
  );
}
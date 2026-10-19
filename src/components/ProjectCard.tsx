interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    stars: number;
    isFeatured?: boolean; // Optional prop
}

export default function ProjectCard({
    title,
    description,
    techStack,
    stars,
    isFeatured = false, // Default value if not passed 
}: ProjectCardProps) {
    return (
        <div className="bg-purple-950 p-4 w-full max-w-md relative rounded-2xl border border-purple-800 shadow-xl flex flex-col items-center">
            {isFeatured && (
                <div className="absolute top-2 right-2 rounded-2xl bg-yellow-300 shadow-md px-2 py-1 text-black">
                    Featured
                </div>
            )}
            <div className="text-3xl font-bold mt-4">
                {title}
            </div>
            <p className="font-medium text-white">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech, index) => (
                    <div key={index} className="bg-purple-800 text-white px-2 py-1 rounded-lg text-sm">
                        {tech}
                    </div>
                ))}
            </div>
            <div className="font-semibold mt-4">{"Stars: " + stars}</div>
        </div>
    );
}
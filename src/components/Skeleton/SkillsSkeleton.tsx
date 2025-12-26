
const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border  border-green-400 hover:shadow-[#5eea37] animate-pulse">
      {/* Icon */}
      <div className="h-16 w-16 rounded-lg bg-slate-600 mb-4"></div>

      {/* Title */}
      <div className="h-4 w-3/4 rounded bg-slate-600 mb-2"></div>

      {/* Subtitle */}
      <div className="h-3 w-1/2 rounded bg-slate-600"></div>
    </div>
  );
};

export default SkeletonCard;

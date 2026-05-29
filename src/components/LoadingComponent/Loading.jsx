function Loading() {
  return (
    <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-br from-rose-500 to-violet-600 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400 tracking-wide">Loading...</p>
    </div>
  );
}

export default Loading;
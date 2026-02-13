const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background - Deep blue-purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1a2e] to-[#16213e]"></div>
      
      {/* Glowing code snippets - Left side */}
      <div className="absolute top-20 left-10 text-blue-400/25 font-mono text-sm animate-pulse hidden md:block">
        <div className="mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]">
          <span className="text-purple-400/40">const</span>{' '}
          <span className="text-blue-300/30">developer</span> ={' '}
          <span className="text-purple-400/40">new</span>{' '}
          <span className="text-blue-300/30">Developer</span>();
        </div>
        <div className="drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]">
          developer.<span className="text-purple-400/40">code</span>();
        </div>
      </div>

      {/* Glowing code snippet - Right side */}
      <div className="absolute top-32 right-20 text-blue-400/25 font-mono text-sm animate-pulse delay-1000 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)] hidden lg:block">
        <div>
          <span className="text-purple-400/40">while</span>
          <span className="text-blue-300/30">(true)</span>{' '}
          {'{'}{' '}
          <span className="text-green-400/40">improve</span>();{' '}
          {'}'}
        </div>
      </div>

      {/* Abstract UI shapes - Left (Mobile-like screens) */}
      <div className="absolute top-40 left-20 hidden md:block">
        <div className="w-32 h-40 border-2 border-blue-400/25 rounded-lg rotate-12 blur-[1px] drop-shadow-[0_0_15px_rgba(96,165,250,0.2)]"></div>
        <div className="w-32 h-40 border-2 border-purple-400/25 rounded-lg -rotate-12 -mt-32 ml-8 blur-[1px] drop-shadow-[0_0_15px_rgba(167,139,250,0.2)]"></div>
      </div>

      {/* Abstract UI shapes - Right (Code blocks) */}
      <div className="absolute top-20 right-32 hidden lg:block">
        <div className="w-28 h-36 border-2 border-blue-400/25 rounded-lg rotate-6 blur-[1px] drop-shadow-[0_0_15px_rgba(96,165,250,0.2)]"></div>
        <div className="w-28 h-36 border-2 border-purple-400/25 rounded-lg -rotate-6 -mt-28 ml-6 blur-[1px] drop-shadow-[0_0_15px_rgba(167,139,250,0.2)]"></div>
      </div>

      {/* Stacked shapes - Right side (Data layers) */}
      <div className="absolute bottom-40 right-16 space-y-2 hidden lg:block">
        <div className="w-24 h-8 border-2 border-blue-400/25 rounded blur-[1px] drop-shadow-[0_0_10px_rgba(96,165,250,0.2)]"></div>
        <div className="w-28 h-8 border-2 border-purple-400/25 rounded blur-[1px] ml-4 drop-shadow-[0_0_10px_rgba(167,139,250,0.2)]"></div>
        <div className="w-20 h-8 border-2 border-blue-400/25 rounded blur-[1px] ml-2 drop-shadow-[0_0_10px_rgba(96,165,250,0.2)]"></div>
      </div>

      {/* Terminal/Code Editor Window - Bottom Right */}
      <div className="absolute bottom-20 right-10 w-64 border-2 border-blue-400/30 rounded-lg bg-black/30 backdrop-blur-sm p-3 shadow-xl shadow-blue-500/20 drop-shadow-[0_0_20px_rgba(96,165,250,0.3)] hidden lg:block md:w-48 md:text-xs">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div className="font-mono text-xs text-blue-400/40 space-y-1">
          <div className="flex gap-2">
            <span className="text-purple-400/50">while</span>
            <span className="text-blue-300/40">(true)</span>
            {' '}
            {'{'}
          </div>
          <div className="ml-4">
            <span className="text-green-400/50">improve</span>();{' '}
            {'}'}
          </div>
        </div>
      </div>

      {/* Additional code snippet - Top center */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-blue-400/20 font-mono text-xs animate-pulse delay-2000 hidden xl:block">
        <div className="drop-shadow-[0_0_8px_rgba(96,165,250,0.2)]">
          <span className="text-purple-400/30">function</span>{' '}
          <span className="text-blue-300/25">create</span>() {'{'}
          <span className="text-green-400/30">return</span> magic;
          {'}'}
        </div>
      </div>

      {/* Floating orbs/glows - Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Grid pattern overlay - Subtle tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(102, 126, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Scanline effect - Very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-full animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;

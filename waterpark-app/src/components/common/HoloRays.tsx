export default function HoloRays() {
  const rays = [
    { width: '15%', left: '10%', angle: '25deg', duration: '8s', delay: '0s' },
    { width: '25%', left: '30%', angle: '20deg', duration: '11s', delay: '2s' },
    { width: '10%', left: '55%', angle: '30deg', duration: '7s', delay: '1s' },
    { width: '20%', left: '70%', angle: '22deg', duration: '9s', delay: '3s' },
    { width: '12%', left: '85%', angle: '28deg', duration: '10s', delay: '0.5s' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-40">
      {rays.map((r, i) => (
        <div
          key={i}
          className="absolute top-[-20%] bottom-[-20%] animate-[rayPulse_ease-in-out_infinite] origin-top opacity-30"
          style={{
            width: r.width,
            left: r.left,
            transform: `rotate(${r.angle})`,
            background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.4) 0%, rgba(0, 255, 204, 0) 100%)',
            animationDuration: r.duration,
            animationDelay: r.delay
          }}
        />
      ))}
    </div>
  );
}

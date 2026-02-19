"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ZONES } from "@/lib/zones";
import { Container } from "@/components/ui";

interface CityPos {
  x: number;
  y: number;
  capital?: boolean;
}

const CITIES: Record<string, CityPos> = {
  "luxembourg-ville": { x: 248, y: 365, capital: true },
  "esch-sur-alzette": { x: 168, y: 445 },
  "differdange": { x: 132, y: 432 },
  "dudelange": { x: 208, y: 470 },
  "petange": { x: 112, y: 418 },
  "ettelbruck": { x: 208, y: 240 },
  "diekirch": { x: 242, y: 232 },
  "wiltz": { x: 152, y: 178 },
  "echternach": { x: 338, y: 258 },
  "grevenmacher": { x: 348, y: 340 },
  "remich": { x: 338, y: 420 },
  "mondorf-les-bains": { x: 302, y: 465 },
};

// Simplified but recognizable Luxembourg outline
const OUTLINE =
  "M 140,42 Q 200,20 270,48 Q 312,68 332,112 Q 348,158 352,212 Q 358,258 352,298 Q 348,338 345,378 Q 338,418 318,452 Q 298,482 268,498 Q 238,510 208,502 Q 175,492 148,478 Q 118,458 100,428 Q 82,398 72,358 Q 62,312 60,268 Q 58,225 65,182 Q 75,132 92,88 Q 108,58 140,42 Z";

export default function LuxembourgMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  const capital = CITIES["luxembourg-ville"];
  const hoveredZone = hovered ? ZONES.find((z) => z.id === hovered) : null;

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0f1d32 50%, #13243d 100%)",
      }}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Map */}
          <div className="lg:col-span-3 flex justify-center">
            <svg
              viewBox="0 0 420 540"
              className="w-full max-w-[500px] h-auto select-none"
            >
              <defs>
                <radialGradient id="mapFill" cx="58%" cy="68%" r="55%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                </radialGradient>
                <filter id="dotGlow">
                  <feGaussianBlur stdDeviation="3" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="bigGlow">
                  <feGaussianBlur stdDeviation="5" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outline glow (blurred larger stroke) */}
              <motion.path
                d={OUTLINE}
                fill="none"
                stroke="#2563eb"
                strokeWidth="6"
                strokeLinejoin="round"
                opacity="0.15"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{ filter: "blur(6px)" }}
              />

              {/* Main outline */}
              <motion.path
                d={OUTLINE}
                fill="url(#mapFill)"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={isInView ? { pathLength: 1, fillOpacity: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Coverage pulse rings from capital */}
              {isInView &&
                [0, 1, 2].map((i) => (
                  <motion.circle
                    key={`ring-${i}`}
                    cx={capital.x}
                    cy={capital.y}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    initial={{ r: 15, opacity: 0.3 }}
                    animate={{ r: 160, opacity: 0 }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 2 + i * 1.2,
                      ease: "easeOut",
                    }}
                  />
                ))}

              {/* Connection lines from capital */}
              {Object.entries(CITIES).map(([id, pos], i) => {
                if (id === "luxembourg-ville") return null;
                return (
                  <motion.line
                    key={`line-${id}`}
                    x1={capital.x}
                    y1={capital.y}
                    x2={pos.x}
                    y2={pos.y}
                    stroke="#2563eb"
                    strokeWidth={hovered === id ? 1.5 : 0.8}
                    strokeDasharray="5 5"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: hovered === id ? 0.5 : 0.12,
                            pathLength: 1,
                          }
                        : {}
                    }
                    transition={{
                      pathLength: { duration: 0.8, delay: 2.2 + i * 0.08 },
                      opacity: { duration: 0.3 },
                    }}
                  />
                );
              })}

              {/* City markers */}
              {Object.entries(CITIES).map(([id, pos], i) => {
                const isHov = hovered === id;
                const isCap = !!pos.capital;
                const r = isCap ? 7 : 4.5;

                return (
                  <g
                    key={id}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(hovered === id ? null : id)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Outer pulse for hovered or capital */}
                    {(isHov || isCap) && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        fill="none"
                        stroke={isCap ? "#f59e0b" : "#2563eb"}
                        strokeWidth="1.5"
                        animate={{
                          r: [r + 4, r + 14],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}

                    {/* Larger invisible hit area for easier hover/tap */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="16"
                      fill="transparent"
                    />

                    {/* Main dot */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isHov ? r + 2 : r}
                      fill={isCap ? "#f59e0b" : "#3b82f6"}
                      filter={isCap ? "url(#bigGlow)" : "url(#dotGlow)"}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        delay: 2 + i * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                      }}
                    />

                    {/* Center highlight */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isCap ? 2.5 : 1.5}
                      fill="white"
                      opacity="0.85"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 2.1 + i * 0.1 }}
                      style={{ pointerEvents: "none" }}
                    />

                    {/* Always-visible capital label */}
                    {isCap && (
                      <motion.text
                        x={pos.x}
                        y={pos.y - 18}
                        textAnchor="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 0.9 } : {}}
                        transition={{ delay: 2.5 }}
                        style={{
                          pointerEvents: "none",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Luxembourg-Ville
                      </motion.text>
                    )}
                  </g>
                );
              })}

              {/* Hover tooltip for non-capital cities */}
              <AnimatePresence>
                {hovered && !CITIES[hovered]?.capital && hoveredZone && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ pointerEvents: "none" }}
                  >
                    <rect
                      x={Math.max(20, Math.min(280, CITIES[hovered].x - 70))}
                      y={
                        CITIES[hovered].y < 120
                          ? CITIES[hovered].y + 18
                          : CITIES[hovered].y - 42
                      }
                      width="140"
                      height="28"
                      rx="6"
                      fill="white"
                      opacity="0.95"
                    />
                    <text
                      x={Math.max(90, Math.min(350, CITIES[hovered].x))}
                      y={
                        CITIES[hovered].y < 120
                          ? CITIES[hovered].y + 37
                          : CITIES[hovered].y - 23
                      }
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="12"
                      fontWeight="600"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {hoveredZone.name}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 text-white">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-5 text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
                Couverture nationale
              </div>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tout le Luxembourg
                <br />
                <span className="text-[#3b82f6]">à votre service</span>
              </h2>

              <p className="text-white/60 mb-8 leading-relaxed">
                De Luxembourg-Ville à Wiltz, de Echternach à Pétange — nous
                couvrons l&apos;ensemble du Grand-Duché pour vos besoins de
                débarras, avec déplacement gratuit.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "12", label: "Zones" },
                  { value: "2 586", label: "km² couverts" },
                  { value: "48h", label: "Intervention" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/[0.08]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-xl md:text-2xl font-bold text-[#3b82f6]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hovered zone detail */}
              <div className="min-h-[88px]">
                <AnimatePresence mode="wait">
                  {hoveredZone ? (
                    <motion.div
                      key={hoveredZone.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/[0.08]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            CITIES[hoveredZone.id]?.capital
                              ? "bg-[#f59e0b]"
                              : "bg-[#3b82f6]"
                          }`}
                        />
                        <span className="font-semibold text-sm">
                          {hoveredZone.name}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {hoveredZone.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="hint"
                      className="text-white/30 text-sm italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Survolez un point sur la carte pour découvrir la zone
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

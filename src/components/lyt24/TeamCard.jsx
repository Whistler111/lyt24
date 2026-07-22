import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const gradients = [
  "from-cobalt to-phosphor",
  "from-amethyst to-cobalt",
  "from-phosphor to-amethyst",
  "from-cobalt to-amethyst",
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function normalizeAssetPath(src) {
  if (!src || src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
}

export default function TeamCard({ member, index = 0, compact = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [failedImages, setFailedImages] = useState({
    front: false,
    back: false,
    dialog: false,
  });
  const gradient = gradients[index % gradients.length];
  const tags = member.skills ?? member.technologies ?? [];
  const image = normalizeAssetPath(member.image);
  const hoverImage = normalizeAssetPath(member.hoverImage ?? member.image);
  const bio =
    member.summary ??
    `${member.name} serves as ${member.role} at LYT24 Technologies, contributing to the company's delivery, culture, and client outcomes.`;
  void compact;

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <motion.div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.06,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative aspect-[4/5] w-full cursor-pointer [perspective:1200px]"
      >
        <div className="absolute inset-0 rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20 transition-all duration-300 [backface-visibility:hidden] group-hover:border-aqua/30 group-hover:shadow-cobalt/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.35),rgba(148,163,184,0.18)_28%,rgba(15,23,42,0.96)_72%)]" />
            {image && !failedImages.front ? (
              <img
                src={image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                onError={() =>
                  setFailedImages((current) => ({ ...current, front: true }))
                }
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              <div className="absolute inset-x-0 top-0 flex justify-center px-6 pt-6">
                <div
                  className={`flex aspect-square w-full max-w-36 items-center justify-center rounded-b-[1.75rem] rounded-t-xl bg-gradient-to-br ${gradient} text-4xl font-bold text-white shadow-2xl shadow-black/30`}
                >
                  {getInitials(member.name)}
                </div>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/72 to-transparent px-4 pb-5 pt-20 text-center">
              <h3 className="mx-auto max-w-[13rem] font-display text-lg font-semibold leading-tight text-white">
                {member.name}
              </h3>
              <p className="mx-auto mt-2 max-w-[12rem] text-xs font-medium leading-5 text-slate-200">
                {member.role}
              </p>
              <span className="mt-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur">
                Read Bio
              </span>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-center shadow-xl shadow-cobalt/10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.24),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            {hoverImage && !failedImages.back ? (
              <img
                src={hoverImage}
                alt={member.name}
                loading="lazy"
                decoding="async"
                onError={() =>
                  setFailedImages((current) => ({ ...current, back: true }))
                }
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              <div
                className={`absolute inset-x-10 top-10 flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-4xl font-bold text-white shadow-2xl shadow-black/30`}
              >
                {getInitials(member.name)}
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pb-5 pt-20">
              {/* <h3 className="font-display text-xl font-semibold leading-tight text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-xs font-medium leading-5 text-slate-200">
                {member.role}
              </p> */}
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-0 text-white shadow-2xl shadow-black/40 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Close className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/70 p-2 text-slate-300 transition-colors hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-aqua">
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Close profile</span>
          </Dialog.Close>

          <div className="grid gap-0 md:grid-cols-[220px_1fr]">
            <div className="flex items-center justify-center bg-gradient-to-br from-cobalt/30 via-slate-900 to-phosphor/20 p-8">
              {(hoverImage || image) && !failedImages.dialog ? (
                <img
                  src={hoverImage || image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  onError={() =>
                    setFailedImages((current) => ({ ...current, dialog: true }))
                  }
                  className="aspect-square w-full max-w-40 rounded-2xl object-cover shadow-2xl shadow-black/30"
                />
              ) : (
                <div
                  className={`flex aspect-square w-full max-w-40 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-4xl font-bold text-white shadow-2xl shadow-black/30`}
                >
                  {getInitials(member.name)}
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-aqua">
                {member.department}
              </span>
              <Dialog.Title className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
                {member.name}
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-base leading-7 text-slate-300">
                {member.role}
              </Dialog.Description>

              <div className="mt-6 space-y-6">
                <p className="text-sm leading-7 text-slate-300">{bio}</p>

                {tags.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      Expertise
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

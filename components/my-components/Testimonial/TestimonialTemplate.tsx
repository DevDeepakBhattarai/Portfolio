"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  giver: string;
  feedback: string;
  image?: string;
  status: string;
  rating?: number;
  platform?: string;
  featured?: boolean;
}

function getInitials(fullName: string): string {
  const names = fullName.split(" ");
  if (names.length >= 2) {
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`;
  }
  return fullName.charAt(0);
}

const platformStyles: Record<string, string> = {
  Upwork: "bg-[#14a800]/15 text-[#14a800] border-[#14a800]/40",
  LinkedIn: "bg-[#0077b5]/15 text-[#0077b5] border-[#0077b5]/40",
  GitHub: "bg-white/10 text-white/60 border-white/20",
  Direct: "bg-golden/10 text-golden border-golden/40",
};

export default function TestimonialTemplate({
  giver,
  feedback,
  status,
  image,
  rating = 5,
  platform,
  featured = false,
}: Props) {
  const platformClass =
    platform && platformStyles[platform]
      ? platformStyles[platform]
      : "bg-white/10 text-white/50 border-white/15";

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-golden/30 hover:shadow-[0_0_50px_-10px_rgba(255,215,0,0.2)]">
      {/* Radial glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(ellipse_at_50%_0%,rgba(255,215,0,0.07),transparent_65%)]" />

      {/* Top row */}
      <div className="mb-5 flex items-start justify-between">
        <svg
          aria-hidden="true"
          className={`text-golden/60 ${featured ? "h-10 w-10" : "h-7 w-7"}`}
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        {platform && (
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${platformClass}`}>
            {platform}
          </span>
        )}
      </div>

      {/* Feedback */}
      <p className={`flex-1 leading-relaxed text-white/70 ${featured ? "text-base" : "text-sm"}`}>
        {feedback}
      </p>

      {/* Stars */}
      <div className="my-5 flex gap-1" role="img">
        <span className="sr-only">{`${rating} out of 5 stars`}</span>
        {["1st", "2nd", "3rd", "4th", "5th"].map((label, i) => (
          <svg
            key={label}
            aria-hidden="true"
            className={`${i < rating ? "text-golden" : "text-white/20"} ${featured ? "h-4 w-4" : "h-3.5 w-3.5"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Divider */}
      <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Person */}
      <div className="flex items-center gap-3">
        <Avatar className={`border border-white/20 ring-1 ring-golden/20 ${featured ? "h-12 w-12" : "h-10 w-10"}`}>
          <AvatarImage alt={`Photo of ${giver}`} src={image} />
          <AvatarFallback className="bg-zinc-800 font-bold text-white/80">
            {getInitials(giver)}
          </AvatarFallback>
        </Avatar>
        <div>
          <span className={`block font-semibold text-white ${featured ? "text-base" : "text-sm"}`}>
            {giver}
          </span>
          <span className="block text-xs text-white/45">{status}</span>
        </div>
      </div>
    </div>
  );
}

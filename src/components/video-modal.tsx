import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xs bg-gray-900">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-xs bg-black/70 text-3xl leading-none text-white transition hover:bg-black"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>
        <iframe
          className="aspect-video w-full"
          src={src}
          title="Introduction video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body,
  );
}

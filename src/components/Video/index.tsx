"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="Behind every smart solution is a team that listens. From AI-powered insights to human support, we are ready when you are."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40 items-center justify-center">
                  <Image
                    src="/images/video/image.png"
                    alt="video image"
                    className="object-cover"
                    fill
                  />
                  <button
                    type="button"
                    aria-label="Play introduction video"
                    onClick={() => setOpen(true)}
                    className="text-primary shadow-two absolute top-1/2 left-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 transition hover:scale-105 hover:bg-white"
                  >
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M21 10.2679C22.3333 11.0377 22.3333 12.9623 21 13.7321L3 24.1244C1.66667 24.8942 0 23.9319 0 22.3923V1.60769C0 0.0680885 1.66667 -0.894162 3  -0.124362L21 10.2679Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] "> */}
            {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      />
    </>
  );
}

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
            paragraph="Behind every smart solution is a team that listens. From AI-powered insights to human support, we're ready when you are."            center
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
};

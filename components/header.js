import React from "react";
import { storyblokEditable } from '@storyblok/react'
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from 'usehooks-ts'

const Header = ({ blok }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  let responsivePicture = blok.picture

  if (blok.picture_mobile) {
    responsivePicture = isDesktop ? blok.picture : blok.picture_mobile
  }
  return (
    <div className="header relative h-112 md:mx-6 mb-6" {...storyblokEditable(blok)}>
      {responsivePicture.filename && (
        <Image
          src={responsivePicture.filename}
          alt={responsivePicture.alt}
          layout="fill"
          priority="true"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={responsivePicture.filename + '/m/50x0'}
          className="md:rounded-lg bg-neutral-100"
        />
      )}
      <div className="relative container h-full px-5 py-10 md:p-12">
        <div className="col-span-8 flex flex-col justify-end items-start">
          <h1 className="mb-0 text-white text-shadow-xl">{blok.title}</h1>
          {blok.link.cached_url && (
            <Link href={blok.link.cached_url}>
              <a className="btn -large -primary mt-8" target={blok.new_tab ? "_blank" : "_self"} rel={blok.new_tab ? "noreferrer" : undefined}>
                Entdecken
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

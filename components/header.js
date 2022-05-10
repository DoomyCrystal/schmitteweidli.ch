import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";
import Link from "next/link";

const Header = ({ blok }) => {
  return (
    <div className="header relative h-112 md:mx-6 mb-6" {...sbEditable(blok)}>
      {blok?.picture?.filename && (
        <Image src={blok.picture.filename} alt={blok.picture.alt} layout="fill" objectFit="cover" className="md:rounded-lg"/>
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

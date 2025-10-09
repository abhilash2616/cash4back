"use client"

interface HeaderProps {
    heading: string;
    textalign: string;
}

const HeaderText = ({ heading, textalign } : HeaderProps) => {
  return (
    <h2 className={`md:text-[28px] md:ps-10 text-[22px] leading-tight mb-4 text-black font-semibold pl-20 ${textalign}`}>
        {heading}
    </h2>
  )
}

export default HeaderText
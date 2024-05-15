import Image from "next/image";

export default function layout({ children }) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-5">
      <Image
        src='/icons/logo.png'
        alt='logo'
        width={200}
        height={50}
        priority
      />
      {children}
    </div>
  );
}

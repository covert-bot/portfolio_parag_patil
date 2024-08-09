import { RiReactjsLine } from "react-icons/ri";
import {  RiHtml5Line }  from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine} from "react-icons/ri";



const Technology = () => {
  return (
    <div className='border-b boer-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technology</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='Rounded-4xl border-4 border-neutral-800  p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className='rounded-2xl border-neutral-800 border-4 p-4'>
          <RiHtml5Line className="text-7xl text-cyan-400"/>
        </div>
        <div className='rounded-2xl border-neutral-800 border-4 p-4'>
          <RiCss3Line className="text-7xl text-cyan-400"/>
        </div>
        <div className='rounded-2xl border-neutral-800 border-4 p-4'>
          <RiJavascriptLine className="text-7xl text-cyan-400"/>
        </div>
      </div>
    </div>
  );
};

export default Technology

import Noproject from "./No-project";
import Addproject from "./Add-project";
import Viewproject from "./View-Project";
import {useState} from 'react';

export default function Detail({click ,save ,set ,start ,dentry,del}) {

  return (
    <section className="container mx-auto h-full flex flex-grow Detail">
      {start == 0 && <Noproject handle={click}/>}
      {start == 1 && <Addproject save={save} handle={click} set={set}/> }
      {start == 2 && <Viewproject entry={dentry} del={del}/>}
    </section>
  );
}

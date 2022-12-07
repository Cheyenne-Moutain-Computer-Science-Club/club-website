import Card from "./card";
import Link from "next/link";

export default function Sean(){
  return (
    <div>
      <h1>Hello World</h1>
      <Card />
      <Card />
      <Link href="/">Home</Link>
      <img src="/maxresdefault.jpg" alt="gayimage" className="w-20 h-w20"/>
    </div>
  );
}
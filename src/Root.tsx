import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Root = () => {return <div className="space-x-2 space-y-2 flex flex-wrap text-l border-double p-5">

<Card title="Pikachu - 0" image="https://placehold.co/400x400" />
<Card title="02" image=""/>
<Card title="03" image=""/>
<Card title="04" image=""/>
<Card title="05" image=""/>
<Card title="06" image=""/>



</div>};

const Card = (props:{title:string,image:string}) => {
  return <div className="bg-white w-40 h-50 text-up flex flex-wrap rounded-md px-4 pt-4 border-solid border-4 border-gray-500">  {props.title}
<img src={props.image}/> </div>
}
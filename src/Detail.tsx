export const Detail = () => {
   
  return <div className="space-x-2 space-y-3 flex flex-wrap text-xl justify-center">
<Card title="01"/>
<Card title="02"/>
<Card title="03"/>
<Card title="04"/>
<Card title="05"/>
<Card title="06"/>


</div>};

const Card = (props:{title:string}) => {
  return <div className="bg-green-500 w-40 h-40 text-center flex items-center justify-center">  {props.title} </div>
}
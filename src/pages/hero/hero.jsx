import List_View from "../list-view/list-view";

export default function Hero() {
  return (
    <>
      <div className="text-center w-full">
        <div className="w-full flex-col h-[80vh] text-3xl  lg:text-8xl uppercase font-bold flex items-center justify-center">
          <p>We Provide</p>
          <p>Web development</p>
        </div>
        <div className="page2"></div>
      </div>
      <List_View />
    </>
  );
}

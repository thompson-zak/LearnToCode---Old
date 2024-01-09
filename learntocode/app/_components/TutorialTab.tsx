export default function TutorialTab(props: { tabTitle:string }) {
    return (
      <div style={{backgroundColor:"#1E1E1E"}} className="w-full h-auto border-neutral-200 border-b-2 border-x-2 text-center text-lg font-normal text-neutral-200">
          { props.tabTitle }
      </div>
    )
  }
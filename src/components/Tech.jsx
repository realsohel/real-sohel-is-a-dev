import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
// import Tooltip from "./tooltip/Tooltip"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {
        technologies.map((tech)=>(
          <div className="w-28 h-28 " key={tech.name}>  
            <div className="h-full" data-tooltip-id={tech.name}>
              <BallCanvas    icon={tech.icon}/>
            </div>
            <ReactTooltip
              id={tech.name}
              place="top"
              content={tech.name}
            />
          {/* </Tooltip> */}
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,"");
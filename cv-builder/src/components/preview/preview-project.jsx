import { useContext } from "react";
import cvContext from "../../context/general-context";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiXml } from "@mdi/js";

export default function PreviewProject() {
  const context = useContext(cvContext);
  return (
    <>
      {context.projects.length > 0 && (
        <div className="head">
          Projects
          <hr />
        </div>
      )}
      {context.projects.length > 0 && (
        <div className="odd">
          {context.projects.map((item) => (
            <div key={item.id} className="flex-col">
              <div className="bold">{item.name}</div>
              <div className="theme flex">
                {item.demo && (
                  <div className="flex">
                    <Icon path={mdiEyeOutline} size={0.4} />
                    <a href={item.demo} target="_blank">
                      demo
                    </a>
                  </div>
                )}
                {item.github && (
                  <div className="flex">
                    <Icon path={mdiXml} size={0.4} />
                    <a href={item.github} target="_blank">
                      github
                    </a>
                  </div>
                )}
              </div>
              <div>{item.details}</div>
              {item.stack.length > 0 && (
                <div className="flex stack">
                  Stack:
                  {item.stack.map((stack, index) => (
                    <div key={index}>
                      {stack}
                      {index === item.stack.length - 1 ? "" : " / "}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

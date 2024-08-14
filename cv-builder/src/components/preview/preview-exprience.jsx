import { useContext } from "react";
import { cvContext } from "../../context/cv-context";
import Icon from "@mdi/react";
import { mdiCalendarRange, mdiMapMarkerOutline } from "@mdi/js";

export default function PreviewExprience() {
  const context = useContext(cvContext);
  return (
    <>
      {context.cvData.exprience.length > 0 && (
        <div className="head">
          Work Exprience
          <hr />
        </div>
      )}
      {context.cvData.exprience.length > 0 && (
        <div className="odd">
          {context.cvData.exprience.map((item) => (
            <div key={item.id} className="flex-col">
              <div className="bold">{item.role}</div>
              <div className="bold">{item.company}</div>
              <div className="theme flex thin">
                {item.from && item.to && (
                  <div className="flex">
                    <Icon path={mdiCalendarRange} size={0.4} />
                    <div>{item.from}</div>
                    <div>-</div>
                    <div>{item.to}</div>
                  </div>
                )}
                {item.location && (
                  <div className="flex">
                    <Icon path={mdiMapMarkerOutline} size={0.4} />
                    <div>{item.location}</div>
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

import { useContext } from "react";
import cvContext from "../context/general-context";
import "./../styles/right.css";
import Icon from "@mdi/react";
import { mdiCalendarRange } from "@mdi/js";
import { mdiMapMarkerOutline } from "@mdi/js";

export default function Right() {
  const context = useContext(cvContext);
  let [first, last] = context.name.split(" ");
  return (
    <div className="cv">
      <div className="paper">
        <div className="personal">
          <div className="name">
            <div className="first">{first}</div>
            <div className="last theme">{last}</div>
          </div>
          <div className="info">
            {context.email && <div>Email:</div>}
            <div className="theme">{context.email}</div>
            {context.linkedin && <div>LinkedIn:</div>}
            <div className="theme">{context.linkedin}</div>
          </div>
        </div>
        {context.about && (
          <div className="head">
            Profile <hr />
          </div>
        )}
        <div className="about odd">{context.about}</div>
        {context.exprience.length > 0 && (
          <div className="head">
            Work Exprience
            <hr />
          </div>
        )}
        {context.exprience.length > 0 && (
          <div className="odd">
            {context.exprience.map((item) => (
              <div key={item.id} className="flex-col">
                <div className="bold">{item.role}</div>
                <div className="bold">{item.company}</div>
                <div className="theme flex thin">
                  <Icon path={mdiCalendarRange} size={0.4} />
                  <div>{item.from}</div>
                  <div>-</div>
                  <div>{item.to}</div>
                  <Icon path={mdiMapMarkerOutline} size={0.4} />
                  <div>{item.location}</div>
                </div>
                <div>{item.details}</div>
                <div className="flex stack">
                  Stack:
                  {item.stack.map((stack, index) => (
                    <div key={index}>
                      {stack}
                      {index === item.stack.length - 1 ? "" : " / "}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {context.education.length > 0 && (
          <div className="head">
            Education <hr />
          </div>
        )}
        {context.education.length > 0 && (
          <div className="education odd">
            {context.education.map((item) => (
              <div key={item.id} className="flex-col">
                <div className="bold">{item.field}</div>
                <div className="bold">{item.univercity}</div>
                <div className="theme flex thin">
                  <Icon path={mdiCalendarRange} size={0.4} />
                  <div>{item.from}</div>
                  <div>-</div>
                  <div>{item.to}</div>
                  <Icon path={mdiMapMarkerOutline} size={0.4} />
                  <div>{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

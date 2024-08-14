import { useContext } from "react";
import { cvContext } from "../../context/cv-context";
import Icon from "@mdi/react";
import { mdiCalendarRange, mdiMapMarkerOutline } from "@mdi/js";

export default function PreviewEducation() {
  const context = useContext(cvContext);
  return (
    <>
      {context.cvData.education.length > 0 && (
        <div className="head">
          Education <hr />
        </div>
      )}
      {context.cvData.education.length > 0 && (
        <div className="education odd">
          {context.cvData.education.map((item) => (
            <div key={item.id} className="flex-col">
              <div className="bold">{item.field}</div>
              <div>{item.univercity}</div>
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
            </div>
          ))}
        </div>
      )}
    </>
  );
}

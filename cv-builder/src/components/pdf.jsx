import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useContext } from "react";
import cvContext from '../context/general-context'
import Icon from "@mdi/react";
import {
  mdiCalendarRange,
  mdiMapMarkerOutline,
  mdiEyeOutline,
  mdiXml,
} from "@mdi/js";

const styles = StyleSheet.create({
  theme: {
    color: "#7e8724",
  },
  paper: {
    backgroundColor: "white",
    width: "450px",
    minHeight: "570px",
    margin: "1.5rem auto",
    padding: "2rem",
    fontSize: "0.5rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  personal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.25rem",
  },

  odd: {
    paddingLeft: "1rem",
    color: "black",
    fontWeight: "lighter",

    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  name: {
    fontSize: "15",
    display: "flex",
    textAlign: "center",
  },

  last: {
    paddingLeft: 10,
  },

  info: {
    display: "flex",
    gap: 10,
  },
  flex: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },

  bold: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },

  stack: {
    marginTop: 10,
  },

  thin: {
    fontWeight: "lighter",
  },
  head: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontSize: "x-small",
    color: "rgba(0, 0, 0, 0.561)",
  },

  //   ,head > * {
  //     flex: 1;
  //   }

  hr: {
    borderColor: "mdiGantryCrane",
    borderTop: 1,
    borderLeft: 0,
  },

  flexcol: {
    display: "flex",
    flexDirection: "column",
  },

  skillpreview: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  //   ,skill-preview>*{
  //     border: 1px solid var(--theme-color);
  //     border-radius: .5rem;
  //     padding: .25rem .75rem;
  //   }
});

export const MyDocument = () => {
  const context = useContext(cvContext);
  let [first, last] = context.name.split(" ");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.personal}>
          <div style={styles.name}>
            <div style={styles.first}>{first}</div>
            <div style={styles.last}>{last}</div>
          </div>
          <div style={styles.info}>
            {context.email && <div>Email:</div>}
            <div style={styles.theme}>{context.email}</div>
            {context.linkedin && <div>LinkedIn:</div>}
            <div style={styles.theme}>{context.linkedin}</div>
          </div>
        </div>
        {context.about && (
          <div style={styles.head}>
            Profile <hr />
          </div>
        )}
        <div style={[styles.about, styles.odd]}>{context.about}</div>
        {context.exprience.length > 0 && (
          <div style={styles.head}>
            Work Exprience
            <hr />
          </div>
        )}
        {context.exprience.length > 0 && (
          <div style={styles.odd}>
            {context.exprience.map((item) => (
              <div key={item.id} style={styles.flexcol}>
                <div style={styles.bold}>{item.role}</div>
                <div style={styles.bold}>{item.company}</div>
                <div style={[styles.theme, styles.flex, styles.thin]}>
                  {item.from && item.to && (
                    <div style={styles.flex}>
                      <Icon path={mdiCalendarRange} size={0.4} />
                      <div>{item.from}</div>
                      <div>-</div>
                      <div>{item.to}</div>
                    </div>
                  )}
                  {item.location && (
                    <div style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <div>{item.location}</div>
                    </div>
                  )}
                </div>
                <div>{item.details}</div>
                {item.stack.length > 0 && (
                  <div style={[styles.flex, styles.stack]}>
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
        {context.projects.length > 0 && (
          <div style={styles.head}>
            Projects
            <hr />
          </div>
        )}
        {context.projects.length > 0 && (
          <div style={styles.odd}>
            {context.projects.map((item) => (
              <div key={item.id} style={styles.flexcol}>
                <div style={styles.bold}>{item.name}</div>
                <div style={[styles.flex, styles.theme]}>
                  {item.demo && (
                    <div style={styles.flex}>
                      <Icon path={mdiEyeOutline} size={0.4} />
                      <a href={item.demo} target="_blank">
                        demo
                      </a>
                    </div>
                  )}
                  {item.github && (
                    <div style={styles.flex}>
                      <Icon path={mdiXml} size={0.4} />
                      <a href={item.github} target="_blank">
                        github
                      </a>
                    </div>
                  )}
                </div>
                <div>{item.details}</div>
                {item.stack.length > 0 && (
                  <div style={[styles.flex, styles.theme]}>
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
        {context.education.length > 0 && (
          <div style={styles.head}>
            Education <hr />
          </div>
        )}
        {context.education.length > 0 && (
          <div style={[styles.education, styles.odd]}>
            {context.education.map((item) => (
              <div key={item.id} style={styles.flexcol}>
                <div style={styles.bold}>{item.field}</div>
                <div style={styles.bold}>{item.univercity}</div>
                <div style={[styles.flex, styles.theme, styles.thin]}>
                  {item.from && item.to && (
                    <div style={styles.flex}>
                      <Icon path={mdiCalendarRange} size={0.4} />
                      <div>{item.from}</div>
                      <div>-</div>
                      <div>{item.to}</div>
                    </div>
                  )}
                  {item.location && (
                    <div style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <div>{item.location}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {context.skills.length > 0 && (
        <div style={styles.head}>
          Skills
          <hr />
        </div>
      )}
      {context.skills.length > 0 && (
        <div style={[styles.skillpreview,styles.odd]}>
          {context.skills.map((item) => (
            item.name&&
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
      </Page>
    </Document>
  );
};

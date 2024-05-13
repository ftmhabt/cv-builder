import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
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
    width: 450,
    minHeight: 570,
    margin: 20,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  personal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },

  odd: {
    paddingLeft: 10,
    color: "black",
    fontWeight: "lighter",

    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  name: {
    fontSize: 15,
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
    color: "gray",
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

export const MyDocument = ({context}) => {
    let [first, last] = context.name.split(" ");
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.personal}>
          <View style={styles.name}>
            <Text style={styles.first}>hello</Text>
            <Text style={styles.last}>mmmm</Text>
          </View>
          <View style={styles.info}>
            {context.email && <Text>Email:</Text>}
            <Text style={styles.theme}>{context.email}</Text>
            {context.linkedin && <Text>LinkedIn:</Text>}
            <Text style={styles.theme}>{context.linkedin}</Text>
          </View>
        </View>
        {context.about ? (
          <Text style={styles.head}>
            Profile <hr />
          </Text>
        ):null}
        <Text style={[styles.about, styles.odd]}>{context.about}</Text>
        {context.exprience.length > 0 ? (
          <Text style={styles.head}>
            Work Exprience
            <hr />
          </Text>
        ):null}
        {context.exprience.length > 0 ? (
          <Text style={styles.odd}>
            {context.exprience.map((item) => (
              <Text key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.role}</Text>
                <Text style={styles.bold}>{item.company}</Text>
                <Text style={[styles.theme, styles.flex, styles.thin]}>
                  {item.from && item.to ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiCalendarRange} size={0.4} />
                      <Text>{item.from}</Text>
                      <Text>-</Text>
                      <Text>{item.to}</Text>
                    </Text>
                  ):null}
                  {item.location ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </Text>
                  ):null}
                </Text>
                <Text>{item.details}</Text>
                {item.stack.length > 0 ? (
                  <Text style={[styles.flex, styles.stack]}>
                    Stack:
                    {item.stack.map((stack, index) => (
                      <Text key={index}>
                        {stack}
                        {index === item.stack.length - 1 ? "" : " / "}
                      </Text>
                    ))}
                  </Text>
                ):null}
              </Text>
            ))}
          </Text>
        ):null}
        {context.projects.length > 0 ? (
          <Text style={styles.head}>
            Projects
            <hr />
          </Text>
        ):null}
        {context.projects.length > 0 ? (
          <Text style={styles.odd}>
            {context.projects.map((item) => (
              <Text key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.name}</Text>
                <Text style={[styles.flex, styles.theme]}>
                  {item.demo ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiEyeOutline} size={0.4} />
                      <Text href={item.demo} target="_blank">
                        demo
                      </Text>
                    </Text>
                  ):null}
                  {item.github && (
                    <Text style={styles.flex}>
                      <Icon path={mdiXml} size={0.4} />
                      <Text href={item.github} target="_blank">
                        github
                      </Text>
                    </Text>
                  )}
                </Text>
                <Text>{item.details}</Text>
                {item.stack.length > 0 ? (
                  <Text style={[styles.flex, styles.theme]}>
                    Stack:
                    {item.stack.map((stack, index) => (
                      <Text key={index}>
                        {stack}
                        {index === item.stack.length - 1 ? "" : " / "}
                      </Text>
                    ))}
                  </Text>
                ):null}
              </Text>
            ))}
          </Text>
        ):null}
        {context.education.length > 0 ? (
          <Text style={styles.head}>
            Education <hr />
          </Text>
        ):null}
        {context.education.length > 0 ? (
          <Text style={[styles.education, styles.odd]}>
            {context.education.map((item) => (
              <Text key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.field}</Text>
                <Text style={styles.bold}>{item.univercity}</Text>
                <Text style={[styles.flex, styles.theme, styles.thin]}>
                  {item.from && item.to ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiCalendarRange} size={0.4} />
                      <Text>{item.from}</Text>
                      <Text>-</Text>
                      <Text>{item.to}</Text>
                    </Text>
                  ):null}
                  {item.location ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </Text>
                  ):null}
                </Text>
              </Text>
            ))}
          </Text>
        ):null}
        {context.skills.length > 0 ? (
        <Text style={styles.head}>
          Skills
          <hr />
        </Text>
      ):null}
      {context.skills.length > 0 ? (
        <Text style={[styles.skillpreview,styles.odd]}>
          {context.skills.map((item) => (
            item.name?
            <Text key={item.id}>{item.name}</Text>:null
          ))}
        </Text>
      ):null}
      </Page>
    </Document>
  );
};

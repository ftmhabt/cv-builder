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
    margin: 30,
    fontSize: 10,
    flexDirection: "column",
    gap: 5,
  },
  personal: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  wrap: {
    width: 500,
  },
  line: {
    backgroundColor: "#707070",
    Width: 400,
    height: 1,
  },
  name: {
    fontSize: 30,
    flexDirection: "row",
    textAlign: "center",
  },

  last: {
    paddingLeft: 10,
  },

  info: {
    flexDirection: "row",
    gap: 10,
  },
  flex: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  odd: {
    paddingLeft: 10,
    color: "black",
    fontWeight: "lighter",

    flexDirection: "column",
    gap: 5,
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
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    fontSize: 10,
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
    flexDirection: "column",
  },

  skillpreview: {
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

export const MyDocument = ({ context }) => {
  let [first, last] = context.name.split(" ");

  return (
    <Document>
      <Page size="A4" style={styles.paper}>
        <View style={[styles.personal, styles.wrap]}>
          <View style={styles.name}>
            <Text>{first}</Text>
            <Text style={[styles.last, styles.theme]}>{last}</Text>
          </View>
          <View style={styles.info}>
            {context.email && <Text>Email:</Text>}
            <Text style={styles.theme}>{context.email}</Text>
            {context.linkedin && <Text>LinkedIn:</Text>}
            <Text style={styles.theme}>{context.linkedin}</Text>
          </View>
        </View>

        {context.about && (
          <View style={styles.flex}>
            <Text style={styles.head}>Profile</Text>
            <View style={styles.line}></View>
          </View>
        )}

        <View style={styles.wrap}>
          <Text style={[styles.about, styles.odd]}>{context.about}</Text>
        </View>
        {context.exprience.length > 0 ? (
          <Text style={styles.head}>
            Work Exprience
            <hr />
          </Text>
        ) : null}
        {context.exprience.length > 0 && (
          <View style={styles.odd}>
            {context.exprience.map((item) => (
              <View key={item.id} style={styles.flexcol}>
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
                  ) : null}
                  {item.location ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </Text>
                  ) : null}
                </Text>
                <Text style={styles.wrap}>{item.details}</Text>
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
                ) : null}
              </View>
            ))}
          </View>
        )}
        {context.projects.length > 0 && (
          <Text style={styles.head}>Projects</Text>
        )}
        {context.projects.length > 0 ? (
          <View style={styles.odd}>
            {context.projects.map((item) => (
              <View key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.name}</Text>
                <Text style={[styles.flex, styles.theme]}>
                  {item.demo ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiEyeOutline} size={0.4} />
                      <Text href={item.demo} target="_blank">
                        demo
                      </Text>
                    </Text>
                  ) : null}
                  {item.github && (
                    <Text style={styles.flex}>
                      <Icon path={mdiXml} size={0.4} />
                      <Text href={item.github} target="_blank">
                        github
                      </Text>
                    </Text>
                  )}
                </Text>
                <Text style={styles.wrap}>{item.details}</Text>
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
                ) : null}
              </View>
            ))}
          </View>
        ) : null}
        {context.education.length > 0 ? (
          <Text style={styles.head}>
            Education <hr />
          </Text>
        ) : null}
        {context.education.length > 0 ? (
          <View style={[styles.education, styles.odd]}>
            {context.education.map((item) => (
              <View key={item.id} style={styles.flexcol}>
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
                  ) : null}
                  {item.location ? (
                    <Text style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </Text>
                  ) : null}
                </Text>
              </View>
            ))}
          </View>
        ) : null}
        {context.skills.length > 0 ? (
          <Text style={styles.head}>
            Skills
            <hr />
          </Text>
        ) : null}
        {context.skills.length > 0 ? (
          <Text style={[styles.skillpreview, styles.odd]}>
            {context.skills.map((item) =>
              item.name ? <Text key={item.id}>{item.name}</Text> : null
            )}
          </Text>
        ) : null}
      </Page>
    </Document>
  );
};

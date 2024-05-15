import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";
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
    margin: 45,
    fontSize: 10,
    flexDirection: "column",
    gap: 10,
  },

  personal: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },

  wrap: {
    width: 475,
  },

  line: {
    backgroundColor: "#d4d4d4",
    height: "1px",
  },

  line1: {
    flex: 0.826,
  },

  line2: {
    flex: 0.806,
  },

  line3: {
    flex: 0.822,
  },

  line4: {
    flex: 0.818,
  },

  line5: {
    flex: 0.827,
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
    gap: 5,
    alignItems: "center",
  },

  odd: {
    paddingLeft: 20,
    color: "black",
    fontWeight: "lighter",
    flexDirection: "column",
    gap: 5,
  },

  bold: {
    color: "black",
    fontSize: 12,
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
    fontSize: 13,
    color: "gray",
  },

  flexcol: {
    flexDirection: "column",
  },

  skillpreview: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingLeft: 20,
  },

  skill: {
    border: 1,
    borderColor: "#7e8724",
    borderRadius: 10,
    textAlign: "center",
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
});

const Calender = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
  </Svg>
);

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
            <View style={[styles.line, styles.line1]}></View>
          </View>
        )}
        <View style={styles.wrap}>
          <Text style={[styles.about, styles.odd]}>{context.about}</Text>
        </View>

        {context.exprience.length > 0 && (
          <View style={styles.flex}>
            <Text style={styles.head}>Work Exprience </Text>
            <View style={[styles.line, styles.line2]}></View>
          </View>
        )}
        {context.exprience.length > 0 && (
          <View style={styles.odd}>
            {context.exprience.map((item) => (
              <View key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.role}</Text>
                <Text style={styles.bold}>{item.company}</Text>
                <View style={[styles.theme, styles.flex, styles.thin]}>
                  {item.from && item.to && (
                    <View style={styles.flex}>
                      <Calender />
                      <Text>{item.from}</Text>
                      <Text>-</Text>
                      <Text>{item.to}</Text>
                    </View>
                  )}
                  {item.location && (
                    <View style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.wrap}>{item.details}</Text>
                {item.stack.length > 0 && (
                  <View style={[styles.flex, styles.stack]}>
                    <Text>Stack:</Text>
                    {item.stack.map((stack, index) => (
                      <Text key={index}>
                        {stack}
                        {index === item.stack.length - 1 ? "" : "  /"}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {context.projects.length > 0 && (
          <View style={styles.flex}>
            <Text style={styles.head}>Projects </Text>
            <View style={[styles.line, styles.line3]}></View>
          </View>
        )}
        {context.projects.length > 0 && (
          <View style={styles.odd}>
            {context.projects.map((item) => (
              <View key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.name}</Text>
                <View style={[styles.flex, styles.theme]}>
                  {item.demo && (
                    <View style={styles.flex}>
                      <Icon path={mdiEyeOutline} size={0.4} />
                      <Text href={item.demo} target="_blank">
                        demo
                      </Text>
                    </View>
                  )}
                  {item.github && (
                    <View style={styles.flex}>
                      <Icon path={mdiXml} size={0.4} />
                      <Text href={item.github} target="_blank">
                        github
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={styles.wrap}>{item.details}</Text>
                {item.stack.length > 0 && (
                  <View style={[styles.flex, styles.stack]}>
                    <Text>Stack:</Text>
                    {item.stack.map((stack, index) => (
                      <Text key={index}>
                        {stack}
                        {index === item.stack.length - 1 ? "" : "  /"}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {context.education.length > 0 && (
          <View style={styles.flex}>
            <Text style={styles.head}>Education </Text>
            <View style={[styles.line, styles.line4]}></View>
          </View>
        )}
        {context.education.length > 0 && (
          <View style={[styles.education, styles.odd]}>
            {context.education.map((item) => (
              <View key={item.id} style={styles.flexcol}>
                <Text style={styles.bold}>{item.field}</Text>
                <Text style={styles.bold}>{item.univercity}</Text>
                <View style={[styles.flex, styles.theme, styles.thin]}>
                  {item.from && item.to && (
                    <View style={styles.flex}>
                      <Calender />
                      <Text>{item.from}</Text>
                      <Text>-</Text>
                      <Text>{item.to}</Text>
                    </View>
                  )}
                  {item.location && (
                    <View style={styles.flex}>
                      <Icon path={mdiMapMarkerOutline} size={0.4} />
                      <Text>{item.location}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {context.skills.length > 0 && (
          <View style={styles.flex}>
            <Text style={styles.head}>Skills </Text>
            <View style={[styles.line, styles.line5]}></View>
          </View>
        )}
        {context.skills.length > 0 && (
          <View style={styles.skillpreview}>
            {context.skills.map(
              (item) =>
                item.name && (
                  <Text key={item.id} style={styles.skill}>
                    {item.name}
                  </Text>
                )
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};

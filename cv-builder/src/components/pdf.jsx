import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";

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
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={10}
    height={10}
  >
    <Path
      fill="#7e8724"
      d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"
    />
  </Svg>
);

const Location = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={10}
    height={10}
  >
    <Path
      fill="#7e8724"
      d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
    />
  </Svg>
);

const Demo = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={10}
    height={10}
  >
    <Path
      fill="#7e8724"
      d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
    />
  </Svg>
);

const Code = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={10}
    height={10}
  >
    <Path
      fill="#7e8724"
      d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
    />
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
                      <Location />
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
                      <Demo />
                      <Text href={item.demo} target="_blank">
                        demo
                      </Text>
                    </View>
                  )}
                  {item.github && (
                    <View style={styles.flex}>
                      <Code/>
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
                      <Location />
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

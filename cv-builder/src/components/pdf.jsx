import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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

export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

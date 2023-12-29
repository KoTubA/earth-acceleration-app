import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import font from 'src/assets/fonts/Roboto-Regular.ttf';
import fontbold from 'src/assets/fonts/Roboto-Bold.ttf';

// Register Font
Font.register({ family: 'Roboto', src: font });
Font.register({ family: 'Roboto-Medium', src: font });
Font.register({ family: 'Roboto-Bold', src: fontbold });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  dataText: {
    fontSize: 10,
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#082F49',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '16.67%', // 100% / 6 columns
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableSubCol: {
    width: '33.67%', // 100% / 6 columns
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
  tableHeader: {
    width: '100%',
    backgroundColor: '#082F49',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
  },
  tableSubHeader: {
    backgroundColor: '#cbd5e1',
    fontFamily: 'Roboto-Medium',
  },
  tableSubSubHeader: {
    backgroundColor: '#E5E7EB',
    fontFamily: 'Roboto-Medium',
  },
  tableCell: {
    margin: 'auto',
    paddingVertical: 8,
    fontSize: 10,
    overflow: 'hidden',
  },
});

const renderTable = (result, size) => (
  <View key={size} style={styles.table}>
    {/* Table Header */}
    <View style={styles.tableHeader}>
      <Text style={styles.tableCell}>
        {size === 'Avg' ? 'Średnia wyników' : `Dla ilości okresów n = ${size}`}
      </Text>
    </View>

    <View style={[styles.tableRow, styles.tableSubHeader]}>
      <View style={styles.tableSubCol}>
        <Text style={styles.tableCell}>Małe α</Text>
      </View>
      <View style={styles.tableSubCol}>
        <Text style={styles.tableCell}>Średnie α</Text>
      </View>
      <View style={styles.tableSubCol}>
        <Text style={styles.tableCell}>Duże α</Text>
      </View>
    </View>

    <View style={[styles.tableRow, styles.tableSubSubHeader]}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>T</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>g</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>T</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>g</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>T</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>g</Text>
      </View>
    </View>

    {/* Table Content */}
    <View style={styles.tableRow}>
      {[`small-${size}`, `medium-${size}`, `large-${size}`].map((key) => (
        <React.Fragment key={key}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {result[size]?.[key]?.T !== undefined
                ? result[size][key].T.toFixed(5)
                : '-'}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {result[size]?.[key]?.g !== undefined
                ? result[size][key].g.toFixed(5)
                : '-'}
            </Text>
          </View>
        </React.Fragment>
      ))}
    </View>
  </View>
);

const PDFTemplate = ({ history, conclusions }) => (
  <Document>
    {history.map((result, index) => (
      <Page key={index} size="A4" style={styles.body}>
        {/* Rendering results */}
        <View>
          <Text style={styles.title}>{`Wynik ${index + 1}`}</Text>
          <Text
            style={styles.dataText}
          >{`Długość wahadła (l0): ${result.lengthLResult}`}</Text>
          {renderTable(result, 20)}
          {renderTable(result, 30)}
          {renderTable(result, 50)}
          {renderTable(result, 'Avg')}
        </View>
      </Page>
    ))}

    {/* Additional page for conclusions */}
    <Page size="A4" style={styles.body}>
      <View>
        <Text style={styles.title}>Wnioski</Text>
        <Text style={styles.dataText}>{conclusions}</Text>
      </View>
    </Page>
  </Document>
);

PDFTemplate.propTypes = {
  history: PropTypes.array.isRequired,
  conclusions: PropTypes.string.isRequired,
};

export default PDFTemplate;
